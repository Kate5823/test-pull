// {Name: Vmoso}
// {Description: VMOSO Web Activity}
// {Visibility: Admin}

const serviceURL = "http://vmoso.com/api/v1/";
const zoneNames = ["Priority", "Chats", "Posts", "Tasks", "Content", "Spaces", "Contacts"];
const focusNames = ["Unread"];
const subfocusNames = ["Reference"];
const actionNames = ["Approve", "Reject"];

const zones = zoneNames.map(a => a.toLowerCase()).join("|");
const focus = focusNames.map(a => a.toLowerCase()).join("|");
const subfocus = subfocusNames.map(a => a.toLowerCase()).join("|");
const actions = actionNames.map(a => a.toLowerCase()).join("|");

const commentZone = visual((state) => state.zone && state.zone === "comments");

function fromZone(...zoneName) {
    return visual((state) => {
        if (state.zone) {
            for (let zone in zoneName) {
                if (state.zone.toLowerCase() === zone.toLowerCase())
                    return true;
            }
        }
        return false;
    })
}


function debugAPICall(p, method, params, callback) {
    // start debug
    if (method === "read") {
        if (params.type.startsWith("comment")) {
            callback({
                "type": "comments",
                "items":
                    [
                        {text: "comment 1", id: 1},
                        {text: "comment 2", id: 2},
                        {text: "comment 3", id: 3},
                        {text: "comment 4", id: 4},
                        {text: "comment 5", id: 5},
                        {text: "comment 6", id: 6}
                    ]
            });
        } else if (params.type.startsWith("tile")) {
            callback({
                "type": "tiles",
                "items":
                    [
                        {text: "tiles 1", id: 1},
                        {text: "tiles 2", id: 2},
                        {text: "tiles 3", id: 3},
                        {text: "tiles 4", id: 4},
                        {text: "tiles 5", id: 5}
                    ]
            });
        } else {
            callback({
                "type": "activities",
                "items":
                    [
                        {text: "activity 1", id: 1},
                        {text: "activity 2", id: 2},
                        {text: "activity 3", id: 3},
                        {text: "activity 4", id: 4},
                        {text: "activity 5", id: 5}
                    ]
            });
        }

    } else if (method === "create") {
    }
}

function apiCall(p, method, params, callback) {
    let jsp = {
        url: serviceURL + method,
        strictSSL: false,
        method: 'POST',
        json: params,
        timeout: 20000
    };
    api.request(jsp, (error, res, body) => {
        if (error) {
            p.error("API call failed: " + error);
        }
        try {
            callback(JSON.parse(body));
        } catch (e) {
            p.error("API call failed: " + e);
        }
    });
}

title("web commands");

intent(`(Open|Go to|Navigate|Switch) (to|) (the|) $(ZONE ${zones}) (Zone|Category|Channel|)`,
    p => {
        p.play({
                "command": "navigate",
                "zone": p.ZONE
            }
        );
        p.play("OK");
    });

intent(commentZone, `(Apply|Set|Show) (Filter|Focus|) $(F ${focus})`,
    `(Apply|Set|Show) (Filter|Focus|) $(FOCUS ${focus}) (Sub Focus|Sub Filter) $(SUBF ${subfocus})`,
    p => {
        p.play({
            command: "applyFilter",
            zone: p.visual.zone,
            focus: p.F,
            subfocus: p.SUBF ? p.SUBF : null
        });

        p.state.focus = p.F;
        p.state.subfocus = p.SUBF;

        p.play("Filter has been applied");
    });

intent(commentZone, `(Clear|Remove) (Filter|Focus)`,
    p => {
        p.play({
            command: "clearFilter",
            zone: p.visual.zone,
            focus: p.state.focus,
            subfocus: p.state.subfocus
        });
        p.state.focus = "";
        p.state.subfocus = "";
        p.play("Filter has been cleared");
    });


intent(`Read $(N First|Latest|) $(NUMBER) $(A Activities|Activity|Tile_|Comment_)`,
    `Read $(N First|Latest|) $(A Activities|Activity|Tile_|Comment_)`,
    p => {
        let number = 3;
        if (p.NUMBER) {
            number = 3;
        } else if(p.A) {
            if (!p.A.endsWith("s")) {
                number = 1;
            }
        }

        p.play(`Here is ${number} ${p.N} ${p.A}`);
        debugAPICall(p, "read",
            {
                number: number,
                type: p.A.toLowerCase(),
                dir: p.N.toLowerCase()
            },
            (res) => {
                let step = Math.min(_.size(res.items), number);
                let items = res.items.slice(0, step);
                playHightlighedItems(p, items, i => i.text);
                if (step < _.size(res.items)) {
                    p.play(`Read more?`);
                }
                let state = {items: res.items, type: res.type, step: step, from: step};
                p.then(readListItems, {state});
            });
    });


intent(`$(A* Open activity (.+))`,
    p => {
        let value = p.A.replace("open activity", "");
        p.play({
            command: "openActivity",
            activity: value,
        });
        p.play(`OK, opening ${value} activity`);
    });


intent(`$(A* search local (.+))`,
    p => {
        let value = p.A.replace("search local", "");
        p.play({
            command: "search",
            search: value,
        });
        p.play(`OK, here is result of local searching`);
    });


intent(`$(A* search global (.+))`,
    p => {
        let value = p.A.replace("search global", "");
        p.play({
            command: "search",
            search: value,
        });
        p.play(`OK, here is result of global searching`);
    });


intent(`Select $(A ${actions})`,
    p => {
        p.play({
            command: "action",
            action: p.A,
        });

        p.play(`Action ${p.A} applied`);
    });


const readListItems = context(() => {
    title("read items");

    follow(`Read next $(NUMBER|)`, "(yes|ok|next|read|read next)",
        p => {
            let {state} = p;

            let number = p.NUMBER ? p.NUMBER.number : state.step;
            if (!state.items) {
                p.play("There are no items to read");
                return;
            }
            let from = state.from ? state.from : 0;
            if (from + number > state.items.length) {
                p.state.step = number = from + number - _.size(state.items) + 1;
            }
            let to = Math.min(from + number, _.size(state.items));
            let items = state.items.slice(from, to);
            if (_.isEmpty(items)) {
                p.play(`There are no more items`);
                p.resolve(null);
                return;
            } else {
                playHightlighedItems(p, items, i => i.text);
                if (to < state.items.length) {
                    p.play(`(You have|There are) more unread items`);
                }
            }
            p.state.from = to;
        });

    follow("(repeat|repeat please|say again)", p => {
        let {state} = p;
        if (!state.items) {
            p.play("There are no items");
            console.log("There are no items");
            return;
        }
        let items = state.items.slice(state.from - state.step, state.from);
        playHightlighedItems(p, items, i => i.text);
        if (state.from < _.size(state.items)) {
            p.play(`Read more?`);
        }
    });


    follow("open $(ORDINAL)", "open $(L last)", "open (number|) $(NUMBER)",
        p => {
            let {state} = p;
            let number;
            if (p.ORDINAL) {
                number = p.ORDINAL.number;
            } else if (p.L) {
                number = state.step;
            } else if (p.NUMBER) {
                number = p.NUMBER;
            } else {
                number = 1;
            }
            let index = state.from - state.step + number - 1;
            if (index < _.size(state.items)) {
                p.play({
                    command: "open",
                    item: state.items[index]
                });
                p.play("Ok");
            } else {
                p.play(`Requested item is not avaiable`);
            }
        });
});

function playHightlighedItems(p, list, show) {
    list.forEach(item => {
        p.play(highlight(item));
        p.play(show(item));
    });
    // reset highlighting
    p.play(highlight(null));
}

function highlight(item) {
    return {command: "highlight", item: item};
}