// {Name: Zeepath_Challenges}
// {Description: Zeepath Challenges application script}
// {Visibility: Admin}

title("Challenges")


let confirmInput = context(() => {
    follow(`Yes`, p => {
        p.resolve("yes");
    })

    follow(`No`, p => {
        p.resolve("no");
    })

    fallback("Please, Say Yes to confirm input, (say|or) No to change it")
});

let userInput = context(() => {
    follow(`$(I* (.+))`, async p => {
        p.resolve(p.I.value);
    })
});

async function getUserInput(p, prompt, confirm) {
    let name, userConfirm;
    do {
        p.play(prompt);
        name = await p.then(userInput);
        p.play(`${confirm} ${name}. Do you confirm?`);
        let userConfirm = await p.then(confirmInput);
        if (userConfirm === "yes") {
            break
        }
    } while (true)

    return name;
}

let userInputNumber = context(() => {
    follow(`$(NUMBER)`,
        p => {
            p.resolve(p.NUMBER.number);
        });

    fallback("Please (say|point) a number")
});

let weekDays = context(() => {
    follow(`$(DATE)`, `$(DATE) $(DATE)`, `$(DATE) $(DATE) $(DATE)`, `$(DATE) $(DATE) $(DATE) $(DATE)`,
        `$(DATE) $(DATE) $(DATE) $(DATE) $(DATE)`,
        p => {
            let days = p.DATEs
            p.resolve(days);
        });

    fallback("Please say what week days this task will be repeated")
});

function getWeekDays(p) {
    return p.then(weekDays);
}

function getNumber(p, prompt) {
    return p.then(userInputNumber, {state: {prompt}});
}

const getTasks = context(() => {
    title("whatIsTask");

    follow("$(TASK* (.+))", async p => {
        p.state.action = {}
        p.state.action.name = p.TASK.value;
        p.play({command: 'addAction', value: p.TASK.value});
        p.play({command: 'navigate', path: 'challenge'});
        p.play({command: 'highlight', value: 'action'});

        p.play(`${p.TASK.value} will be added to achieve your goal ${p.state.goal}. Would you like this task once, or have it recurring daily or weekly?`);
        p.state.actions.push(await p.then(taskReccurence, {state: {goal: p.state.goal, action: p.state.action}}));
        p.play("Would you like to add any more tasks?");
    });

    follow("(yes|sure|ok|go on|I want)", p => {
        p.state.action = {}
        p.play(`(OK|Good). What (action|task) would you like to add?`);
    });

    follow("(no|nope|stop|I do not want|finish|it is all|nothing|no more)", p => {
        p.play(`OK`);
        p.play({command: 'navigate', path: 'challengeList'});
        p.play({command: 'highlight', value: 'recent'});
        p.resolve(p.state.actions);
    })
});

const taskReccurence = context(() => {
    title("taskReccurence");

    follow("(only|just|) (once|one time|single)", p => {
        p.state.action.reccurence = 'single';
        p.play(`${p.state.action.name} has been added. This (task|action) should be completed once to achieve your goal ${p.state.goal}.`);
        p.resolve(p.state.action);
    });

    follow("(daily|everyday)", async p => {
        p.state.action.reccurence = 'daily';
        p.play("Ok, this will be a daily (action|task). How many times per day should it be (performed|completed)?");
        let times = await getNumber(p);
        p.play(`${times > 1 ? times + " times" : "Once"} a day. And how many consecutive days should this task be (performed|completed)?`);
        p.state.action.times = times;
        let consecDays = await getNumber(p);
        p.play(`${p.state.action.name} has been added. This (task|action) should be completed ${times > 1 ? times + " times" : "Once"} a day for ${consecDays} ${consecDays > 1 ? 'days' : 'day'} to achieve your goal ${p.state.goal}.`);
        p.state.action.consec = consecDays;
        p.resolve(p.state.action);
    });

    follow("(weekly|every week)", async p => {
        p.state.action.reccurence = 'weekly';
        p.play("Ok, this will be a weekly (action|task). Which days of the week should it be completed?");
        let days = await getWeekDays(p);
        p.state.action.days = days;
        p.play(`Great, this (action|task) will be performed on ${joinAnd(days)}. And for how many weeks should it be performed?`);
        //"Great, this (action|task) will be performed every day of the week. And for how many weeks should it be performed?", "Great, this (action|task) will be performed on the weekend. And for how many weeks should it be performed

        let consecWeeks = await getNumber(p);
        p.play(`${p.state.action.name} has been added. This (task|action) should be completed on ${joinAnd(days)} for ${consecWeeks} ${consecWeeks > 1 ? 'weeks' : 'week'} to achieve your goal ${p.state.goal}.`);
        p.state.action.consec = consecWeeks;
        p.resolve(p.state.action);
    });

    fallback("Please, Say will be it daily, weekly or (one time|single) task?")
});

function joinAnd(list) {
    let head = list.slice(0, -1);
    return _.isEmpty(head) ? list[0] : head.join(", ") + ", and " + list.slice(-1);
}

intent("(I want to|can you|) create a (new|) challenge (for me|)", async p => {

    let name = await getUserInput(p, "What would you like to name your Challenge?", "Your challenge will be");
    if (name) {
        p.play({command: 'navigate', path: 'challenge'});
        p.play({command: 'highlight', value: 'goal'});

        p.play(`(OK,|) your challenge ${name} has been created.`);
        let goal = await getUserInput(p, "What would you like to name your Goal for this Challenge?", "Your goal for this challenge will be");
        if (goal) {
            p.play({command: 'set', field: 'goal', value: goal});
            p.play({command: 'navigate', path: 'challenge'});
            p.play({command: 'highlight', value: 'action'});

            p.play(`${goal} is your new goal. What (action|task) would you like to add to achieve this goal?`);
            let actions = await p.then(getTasks, {state: {challenge: name, goal: goal, actions: []}});
            p.play({command: 'createChallenge', name, goal, actions});
            p.play(`(OK,) your Challenge ${name} has been created with the goal ${goal}.`);
            if (_.size(actions) === 0) {
                p.play("Tasks list is empty");
            } else {
                p.play(`Your ${_.size(actions) > 1 ? "tasks are to " : "task is "} ${joinAnd(actions.map(i => i.name))}. Get started on your tasks now to achieve your goals!`);
            }
        } else {
            p.play("A Goal was not set");
        }
    } else {
        p.play("New Challenge has not been created");
    }

})
