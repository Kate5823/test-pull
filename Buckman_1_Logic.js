// {Name: Buckman_1_Logic}
// {Description: Buckman Logic}
// {Visibility: Admin}

const customerAliasToCustomer = _(project.customers) // [{name: Pensacola, ...}]
    .keyBy('name') // {Pensacola: {...}}
    .mapKeys((_, k) => k.toLowerCase()) // {pensacola: {...}}
    .value();

const customerIntent = Object.keys(customerAliasToCustomer).join("|");

const containerIntent = _(project.products)
    .map(p => p.container)
    .uniq()
    .map(p => `${p}~${p}|${p}s~${p}`)
    .value()
    .join('|');

const productNameAliases = {
    Busperse: ['bus spuddddddddddddddddddddrs', 'bosporus', 'bus purse',
               'you Spurs', 'view Spurs', 'abuse purse',
               'Buspar', 'do space', 'boo space', 'buss pass',
               'disperse', 'Vespers', 'biggest bears',
               'your spares', 'do your Spurs', 'PS purse',
               'Bo Spurs', 'aspers', 'Bale Spurs', 'espers',
               'video Spurs', 'Venus purse', 'the Spurs'],
    Bubreak: ['break', 'you break', 'will break', `we'll break`,
              'bow break', 'bumper 8', 'mowbray', 'Mulberry', 'bulbrite'],
    Buflock: ['flock', 'buffalo', 'moeeosilauke',
              'wolf pack', 'euflora', 'view of log', `you'll float`],
    Bulab: ['blob', 'pull up', 'gulag', 'glock', 'you will have',
            'ulab', 'you left', 'beolab', 'Fuel Up', 'the alarm up',
            'fuel lab'],
    BSI: ['deicide', 'Bayside', 'B-side', 'DSi', 'PSI'],
    Busan: ['you sound', 'abuse and', 'beosound', 'buse m', `but you'll Sam`,
            `you'll Sam`, 'busen'],
    "Busan 1078": ['abuse n1078'],
    "BSI 88": ['BS I-88'],
    "2": [' to '],
    "4452T": ['4452 T', 'for 452 T', 'for for 52 T', '44522'],
    2121: ['to want the one', 'the one the one', 'two one two one',
           'to one to one', 'to 1 to 1'],
    4523: ['for 5 to 3'],
    " 88": [' eight eight', ' A8'],
    2505: ['to 5:05', 'to 505'],
    4528: ['or 5 to 8'],
};

const replaceVoiceObj = {
    Busperse: 'Beu sperse',
    Buflock: 'Beu flock',
    Bulab: 'Beu lab',
    Busan: 'Beu san',
    Bubreak: 'Beu break'
};

function replaceVoice(name) {
    const replKey = Object.keys(replaceVoiceObj)
        .find(n => name.includes(n));
    return replKey ?
        name.replace(replKey, replaceVoiceObj[replKey]) :
        name;
}

const productNameToVoice = _(project.products)
    .map(p => p.name)
    .map(p => [p, spacifyNumbers(replaceVoice(p))])
    .fromPairs()
    .value();

/*
 * Return array of original value and values replaced with aliases
 * @param {string} p Bubreak~1
 * @result {array} ['Bubreak~1', 'break~1', 'will break~1', 'brake~1']
 */
function getAliases(p) {
    const synonymIntents = _(Object.keys(productNameAliases))
        .filter(a => p.includes(a)) // only aliases that are included in this name
        .map(a => productNameAliases[a]
             .map(r => p.replace(a, r)))
        .flatten()
        .value();
    return [p].concat(synonymIntents);
}

const productIntent = _()
    .range(project.products.length)
    .map(i => project.products[i].name + '~' + i)
    .map(getAliases) // add aliases
    .flatten()
    .map(getAliases) // add aliases second time to make up to 2 replacement in every product name
    .flatten()
    .uniq()
//    .map(p => p.replace(/(?<=\d)([a-zA-Z]+)/g, " $1")) //to replace 4452T with 4452 T
    .value()
    .join('|');

/*intent(`product`, async p => {
    p.play('listen')
    const product = await p.then(whatProduct);
    if (product) {
        p.play(`product.name is ${product.product.name}`);
    } else {
        p.play(`don't understand`);
    }
});*/

intent(`hey alan`, reply(`What can I help you with?`));

function cancelFollow() {
    follow('never mind', '(cancel|forget) (that|)', `(Stop|Exit|End|Shut up)`, p => {
        p.play(`(ok|fine|sure)`);
        p.resolve(null);
    });
}

function goBack() {
    follow(`(go back|back|previous|)`, p => {
        p.then(p.state.prevContext)
    });
}

const whatCustomer = context(() => {
    follow(`(place order for|) $(COMPANY ${customerIntent})`, p => {
        const customer = customerAliasToCustomer[p.COMPANY.toLowerCase()];
        p.resolve(customer);
    });

    follow(`(same|previous one)`, p => {
        if (p.customer) p.resolve(p.customer);
        else p.play(`I'm sorry, which customer is this for?`);
    });

    cancelFollow();

    fallback(`(I'm sorry,|) I don't know (this) customer. What customer is this order for?`);
});

const whenDeliver = context(() => {
    follow(`$(DATE)`, p => {
        p.resolve(p.DATE);
    });

    follow(`(same|previous)`, p => {
        if(p.date) p.resolve(p.date);
        else p.play(`I'm sorry, which customer is this for?`);
    });

    cancelFollow();

    fallback(`I'm sorry, when do you want this order delivered?`);
});

const whatProduct = context(() => {
    follow(`$(PRODUCT ${productIntent})`, p => {
        const product = project.products[p.PRODUCT.label];
        p.resolve({quantity: 1, product});
    });

    follow(`(I need|I want|I'd like|) $(CONTAINER ${containerIntent}) (of|) $(PRODUCT ${productIntent})`,
           `(I need|I want|I'd like|) $(NUMBER) $(CONTAINER ${containerIntent}) (of|) $(PRODUCT ${productIntent})`, p => {
        const quantity = p.NUMBER ? p.NUMBER.number : 1;
        const productName = project.products[p.PRODUCT.label].name;
        const container = p.CONTAINER ? p.CONTAINER.label : '';
        const product = project.products
            .find(p => p.name == productName && p.container == container);
        if (product) {
            p.resolve({quantity, product});
        } else {
            p.play(`I’m sorry. Only ${container}s are available for ${productNameToVoice[product]}. Which product would you like to order?`);
        }
    });

    follow(`(same|previous)`, p => {
        const product = p.product, quantity = p.quantity;
        p.resolve({quantity, product});
    });

    cancelFollow();

    fallback(`I'm sorry, which product is this?`);
});

const yesNo = context(() => {
    follow(`yes`, p => p.resolve(true));

    follow(`no`, p => p.resolve(false));

    cancelFollow();

    fallback(`I'm sorry. Say yes or no.`);
});

function spacifyNumbers(str) {
    return str.replace(/(?<=\d)(\d)/gi, " $1");
}

intent(`(I need to|) place order`,
       `(I need to|) place order for $(CUSTOMER ${customerIntent})`, async p => {
    let intentCustomer = p.CUSTOMER ?
        customerAliasToCustomer[p.CUSTOMER.toLowerCase()] :
        null;
    let needAnother = false;
    do {
        p.state.order = {
            customer: null,
            products: [],
            date: null
        };
        if (intentCustomer) {
            p.state.order.customer = intentCustomer;
            p.state.prevContext = whatCustomer;
            intentCustomer = null;
        } else {
            p.play(`What customer is this order for?`);
            const customer = await p.then(whatCustomer);
            p.state.order.customer = customer;
            p.state.prevContext = whatCustomer;
            if (!customer) {
                return;
            }
        }
        let needAnotherProduct = true;
        do {
            p.play(`What product do you need to order for ${p.state.order.customer.name}?`);
            let qp = await p.then(whatProduct);
            if (qp) {
                const {quantity, product} = qp;
                p.state.prevContext = whatProduct;
                const container = product.container + (quantity > 1 ? 's' : '');
                p.play(`${quantity} ${container} of ${productNameToVoice[product.name]}. Is this correct?`);
                const isCorrect = await p.then(yesNo);
                if (!isCorrect) {
                    continue;
                }
                p.state.order.products.push(qp);
            }
            p.play(`Would you like to add another product?`);
            needAnotherProduct = await p.then(yesNo);
            if (!needAnotherProduct && !p.state.order.products.length) {
                p.play(`You hasn't added any products to your order. Do you want to add some or I'll cancel your order.`);
                needAnotherProduct = await p.then(yesNo);
                if (!needAnotherProduct) {
                    p.play(`Your order has been cancelled.`);
                }
            }
        } while (needAnotherProduct);
        if (p.state.order.products.length) {
            p.play(`When do you want this order delivered?`);
            const date = await p.then(whenDeliver);
            p.state.order.date = date;
            p.state.prevContext = whenDeliver;
            if (!date) {
                return;
            }
            p.play(`(I have|I've) (succesfully|) (placed|registered) your order for ${date.moment.format('MMMM Do')}`);
            p.play(Object.assign({}, p.state.order, {date: p.state.order.date.moment}));
        }
        p.play(`Would you like to place another order?`);
        needAnother = await p.then(yesNo);
        if (!needAnother) {
            p.play(`(OK|Sure). Have a good day.`);
            return;
        }
    } while (needAnother);
});