// {Name: Alan_Challenge}
// {Description: Alan Challange demo script}
// {Visibility: Admin}

const colors = ["Beige", "Black", "Blue", "Brown", "Burgundy", "Charcoal", "Gold", "Gray", "Green", "Off White",
    "Orange", "Pink", "Purple", "Red", "Silver", "Tan", "Turquoise", "White", "Yellow"];

const models = ["Acura",
    "Alfa Romeo",
    "AMC",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Daewoo",
    "Datsun",
    "DeLorean",
    "Dodge",
    "Eagle",
    "Ferrari",
    "FIAT",
    "Fisker",
    "Ford",
    "Freightliner",
    "Genesis",
    "Geo",
    "GMC",
    "Honda",
    "HUMMER",
    "Hyundai",
    "INFINITI",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Karma",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Lincoln",
    "Lotus",
    "Maserati",
    "Maybach",
    "MAZDA",
    "McLaren",
    "Mercedes-Benz",
    "Mercury",
    "MINI",
    "Mitsubishi",
    "Nissan",
    "Oldsmobile",
    "Plymouth",
    "Pontiac",
    "Porsche",
    "RAM",
    "Rolls-Royce",
    "Saab",
    "Saturn",
    "Scion",
    "smart",
    "SRT",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
    "Yugo"];

const config = {
    title: "configuration of car",
    items: [
        {
            name: "Condition",
            type: "select",
            title: ["condition of car", "car's condition"],
            options: ["new", "used", "certified"],
        },
        {
            name: "Minimal price",
            title: ["minimal price", "start price"],
            type: "number",
            filter: {range: {from: 1000}}
        },
        {
            name: "Maximal price",
            title: ["maximal price", "price to", "end price"],
            type: "number",
            filter: {range: {to: 100000}}
        },
        {
            name: "Style",
            type: "select",
            title: ["style of the car", "car's style"],
            options: ["convertible", "sedan", "van", "mimivan", "coupe", "crossover", "wagon", "hatchback", "truck"]
        },
        {
            name: "Drive type",
            type: "select",
            title: ["drive type", "drive type of the car", "car's drive type"],
            options: ["AWD", "4WD", "Front Wheel Drive", "Rear Wheel Drive"]
        },
        {
            name: "Minimal year of the car",
            title: ["car's minimal year", "Minimal year of the car", "low bound for a year"],
            type: "number",
            filter: {range: {from: 1981, to: 2020}}
        },
        {
            name: "Maximal year of the car",
            title: ["car's maximal year", "year till", "highest year"],
            type: "number",
            filter: {range: {from: 1981, to: 2020}}
        },
        {
            name: "Model of the car",
            title: ["model of the car", "car's model"],
            question: "What model do you (want|wish|prefer)",
            type: "select",
            options: models,
            filter: {options: models},
        },
        {
            name: "Maximal mileage",
            title: ["mileage", "mileage of the car", "maximal mileage", "car's mileage"],
            type: "number"
        },
        {
            name: "transmission type",
            title: ["type of transmission", "transmission type", "transmission"],
            type: "select",
            options: ["automatic", "manual", "continuously variable", "CVR"]
        },
        {
            name: "cylinders number",
            question: "How many cylinders do you (wish|want|choose)?",
            title: ["number of cylinders", "cylinder number", "cylinders"],
            type: "number",
            filter: {options: [3, 4, 5, 6, 8, 10, 12, 16]}
        },
        {
            name: "fuel type",
            title: ["fuel type", "fuel"],
            type: "select",
            options: ["Gasoline", "Diesel", "Hybrid", "Electric", "Hydrogen"]
        },
        {
            name: "Truck Cab Size",
            title: ["truck cab size", "size of truck cab", "cab size", "size of cab"],
            type: "select",
            options: ["Extended Cab", "Regular Cab", "Crew Cab"]
        },
        {
            name: "Doors",
            title: ["number of doors", "doors", "doors count"],
            type: "number",
            filter: {options: [2, 3, 4, 5]}
        },
        {
            name: "Exterior Color",
            title: ["exterior color", "color of exterior"],
            type: "select",
            options: colors,
        },
        {
            name: "Interior Color",
            title: ["interior color", "color of interior"],
            type: "select",
            options: colors,
        },
        {
            name: "Exterior Features",
            title: ["exterior features"],
            type: "select",
            options: ["Keyless Entry", "Premium Wheels", "Roof Rack", "Running Boards", "Trailer Hitch"]
        },
        {
            name: "Technology Features",
            title: ["technology features", "features"],
            type: "select",
            options: ["Android Auto", "Apple CarPlay", "Bluetooth, Hands-Free", "Cruise Control", "DVD Player", "Navigation",
                "Portable Audio Connection", "Premium Audio", "Remote Engine Start", "Satellite Radio", "Steering Wheel Controls"]
        },
        {
            name: "Interior Features",
            title: ["Interior Features"],
            type: "select",
            options: ["3rd Row Seats", "Cooled Seats", "Heated Seats", "Leather Seats", "Sunroof"]
        },
        {
            name: "Safety Features",
            title: ["safety Features", "safety optoins", "safety"],
            type: "select",
            options: ["Backup Camera", "Security System"]
        }
    ]
};

const ITEMS = _.reduce(config.items, (acc, it) => {
    acc[it.name] = it;
    it.title.forEach(t => acc[t.toLowerCase()] = it);
    return acc
}, {});

const alt = arr => arr.map(i => i.toLowerCase()).join('|');

let numberIntents = _.flatten(config.items.filter(a => a.type === "number").map(i => [
    `(add|set|install|I want|) $(NUMBER) $(ITEM ${alt(i.title)})`,
    `set $(ITEM ${alt(i.title)}) to $(NUMBER)`,
    `$(ITEM ${alt(i.title)}) is $(NUMBER)`
]));


let optionsIntents = _.flatten(config.items.filter(a => a.type === "select").map(i => [
    `(add|set|install|I want|) $(VALUE ${alt(i.options)}) $(ITEM ${alt(i.title)})`,
    `(set|) $(ITEM ${alt(i.title)}) (to|is) $(VALUE ${alt(i.options)})`
]));

let optionsFollows = _.flatten(config.items.filter(a => a.type === "select").map(i => [`$(ITEM ${alt(i.options)})`]));

function checkFilter(p, item, value) {
    let itemConf = ITEMS[item];
    if (!itemConf) {
        p.play(`${item} is not configured properly`);
    }
    if (itemConf.options && !checkOptions(p, itemConf.options, value))
        return false;
    if (itemConf.filter && itemConf.filter.options && !checkOptions(p, itemConf.filter.options, value))
        return false;
    if (itemConf.filter && itemConf.filter.range) {
        const range = itemConf.filter.range;
        if ((range.from && value < range.from) || (range.to && value > range.to)) {
            p.play(`${value} is out of range`);
            let availableValues = itemConf.name + " must be ";
            if (range.from) {
                availableValues += ` greater than ${range.from} `;
            }
            if (range.to) {
                if (range.from) {
                    availableValues += " and ";
                }
                availableValues += ` less than ${range.to} `;
            }
            p.play(availableValues);
            return false;
        }
    }
    return true;
}

function checkOptions(p, options, value) {
    if (!options.map(i => i.toString().toLowerCase()).includes(value.toString())) {
        p.play(`${value} is not available option.`);
        let optSize = options.length == 4 ? 4 : 3;
        let availableOptions = `You should select from ${_.shuffle(options).slice(0, optSize).join(" , ")}`;
        if (options.length > 4) {
            availableOptions += ` and ${options.length - 3} other options`;
        }
        p.play(availableOptions);
        return false;
    }
    return true;
}

function setField(p, item, value) {
    if (!p.userData.config) {
        p.userData.config = {}
    }
    p.userData.config[ITEMS[item].name] = value;
}

// INTENTS
intent(...numberIntents, p => {
    let number = p.NUMBER.number;
    if (!checkFilter(p, p.ITEM.value, number)) {
        return;
    }
    setField(p, p.ITEM.value, p.NUMBER);
    p.play(p.ITEM + " is (set to|) " + p.NUMBER);
});

intent(...optionsIntents, p => {
    if (!checkFilter(p, p.ITEM.value, p.VALUE.value)) {
        return;
    }
    setField(p, p.ITEM.value, p.VALUE.value);
    p.play(p.ITEM + " is (set to|) " + p.VALUE);
});

intent("what is my configuration", "what make did I input", "that's (it|all)", "finish", "my config", p => {
    if (!p.userData.config) {
        p.play("Your configuration is empty yet", "Nothing was configured", "Configuration is empty");
        return;
    }
    p.play("Your configuration", "You configured following items");
    for (let item in p.userData.config) {
        p.play(item + " is " + p.userData.config[item]);
    }
});

function processUserAnswer(p, value) {
    if (!checkFilter(p, p.item.name, value)) {
        return false;
    }
    setField(p, p.item.name, value);
    p.play(p.item.name + " is (set to|) " + value);
    return true;
}

let numbers = context(() => {
    follow(`$(NUMBER)`, async p => {
        if (processUserAnswer(p, p.NUMBER.number)) {
            p.resolve();
        } else {
            p.play(p.item.question ? p.item.question : "What is " + p.item.title[0]);
        }
    });

    follow("skip (this|the|) (question|)", p => p.resolve());
});

let options = context(() => {
    follow(...optionsFollows, p => {
        if (processUserAnswer(p, p.ITEM.value)) {
            p.resolve();
        } else {
            p.play("What is " + p.item.title[0]);
        }
    });
    follow("what are (available|) options", "help", p => {
        let options = "Available options are " + _.shuffle(p.item.options).slice(0, 3).join(" , ");
        if (p.item.options.length > 4) {
            options += ` and ${p.item.options.length - 3} other options`;
        }
        p.play(options);
    });
    follow("skip (this|the|) (question|)", p => p.resolve());
});

function random(arr) {
    if (arr && _.isArray(arr) && arr.length > 0) {
        return arr[Math.round((arr.length - 1) * Math.random())];
    }
    return arr;
}

async function nextQuestion(p) {
    for (let item of config.items) {
        if (!p.userData.config[item.name]) {
            p.play(item.question ? item.question : "What is " + item.title[0]);
            if (item.type === "select") {
                await p.then(options, {item});
            } else if (item.type === "number") {
                await p.then(numbers, {item});
            }
            return false;
        }
    }
    return true;
}

async function getConfiguration(p) {
    if (_.isEmpty(p.userData.config)) {
        p.play("Hi! I am Alan. Let's configure a car of your dream. Please answer for serveral questions.");
    }
    let isAll;
    do {
        isAll = await nextQuestion(p);
        if (isAll) {
            p.play("Congratulations! You have configured a car of your dream. Look what options were set.");
            const config = p.userData.config;
            let configuration = Object.keys(p.userData.config).map(k => `${k} is (set to|) ${config[k]}`).join(' , ');
            p.play(configuration);
            return;
        }
    } while (!isAll);
}

intent("Let's do it", "Help me", "How to start", "What is next", "I am ready", "Hi", "Hello",
    "(What is|) next (question|)", "Continue", "Start", "Let's go on", async p => {
        if (!p.userData.config) {
            p.userData.config = {}
        }
        getConfiguration(p);

    });

intent("Start (new|) configuration", "new (config|configuration)", "reset (config|)", p => {
    p.userData.config = {}
    getConfiguration(p);
});
