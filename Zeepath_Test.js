// {Name: Zeepath_Test}
// {Description: Provides checklist capabilities}
// {Visibility: Admin}

title ("task list")

var lists = {}

let rename = context(()=>{

    follow(`(new|) list $(N* (?<=list).*)`,
        `(new|) name $(N* (?<=name).*)`,
        p=> {
            return p.resolve(p.N.value.trim())
        })
})

let questions = context(()=>{

    follow("$(R yes|no)",
        p=> {
            return p.resolve(p.R.value)
        })
})


let list = context(()=>{
    title("list")

    follow(`add $(N* (?<=add).*(?!list))`,
        async p=>{
            if(lists[p.name].indexOf(p.N.value.trim())>-1) {
                showItems(p, p.name)
                p.play(`${p.N.value.trim()} already in the list ${p.name}`)
            }
            else{
                lists[p.name].push([p.N.value.trim(),"active"])
                showItems(p, p.name)
                p.play(`${p.N.value.trim()} was added`)
            }
        }
    )


    follow(`(what are|say|show) all (items|list|)`,
        p=>{
            if(lists[p.name].length===0){
                showItems(p, p.name)
                p.play("there are no items in the list now!")
            }
            showItems(p, p.name)
            for (var i in lists[p.name]){
                p.play(`item ${parseInt(i)+1} is ${lists[p.name][i]}`)
            }
        }
    )

    follow(`(what is|say|show) item $(N* (?<=item)\\s+\\d+\\s*)`,
        p=>{
            let itemNumber =  (parseInt(p.N.value.trim().split(" ")[0]))
            if (itemNumber-1 in lists[p.name]){
                showItems(p, p.name)
                p.play(`item ${itemNumber} is ${lists[p.name][itemNumber-1]}`)
            }
            else {
                p.play("no such item")
            }
        }
    )

    follow(`(delete|remove) item $(N* (?<=item)\\s+\\d+\\s*)`,
        p=> {
            let itemNumber = parseInt(p.N.value.trim().split(" ")[0])
            if (itemNumber-1 in lists[p.name]) {
                lists[p.name].splice(itemNumber-1,1)
                showItems(p, p.name)
                p.play(`${itemNumber} was deleted`)
            }
            else {
                p.play(`there is no item ${itemNumber} in the list`)
            }
        }
    )

    follow(`(delete|remove) item $(N* (?<=item)\\s+\\D+\\s*)`,
        `delete $(N* (?<=delete)\\s+\\D+\\s*)`,
        `remove $(N* (?<=remove)\\s+\\D+\\s*)`,
        p=> {
            var key = getKeyByValue(lists[p.name], p.N.value.trim())
            if (!key){
                p.play(`there is no ${p.N.value.trim()} in the list`)
            }
            else {
                lists[p.name].splice(key,1)
                showItems(p, p.name)
                p.play(`${p.N.value} was deleted`)
            }
        }
    )

    follow(`check off item $(N* (?<=off item)\\s+\\d+\\s*)`,
        p=> {
            let itemNumber = parseInt(p.N.value.trim().split(" ")[0])
            if (itemNumber-1 in lists[p.name]) {
                lists[p.name][itemNumber-1][1]="done"
                showItems(p, p.name)
                p.play(`item ${p.N.value} was set to done`)
            }
            else {
                p.play(`there is no item ${itemNumber} in the list`)
            }
        }
    )

    follow(`check on item $(N* (?<=on item)\\s+\\d+\\s*)`,
        p=> {
            let itemNumber = parseInt(p.N.value.trim().split(" ")[0])
            if (itemNumber-1 in lists[p.name]) {
                lists[p.name][itemNumber-1][1]="active"
                showItems(p, p.name)
                p.play(`item ${p.N.value} was set to active`)
            }
            else {
                p.play(`there is no item ${itemNumber} in the list`)
            }
        }
    )

    follow(`check off $(N* (?<=check off)\\s+\\D+\\s*)`,
        p=> {
            var key = getKeyByValue(lists[p.name], p.N.value.trim())
            if (!key){
                p.play(`there is no ${p.N.value.trim()} in the list`)
            }
            else {
                lists[p.name][key][1]="done"
                showItems(p, p.name)
                p.play(`item ${p.N.value} was set to done`)
            }
        }
    )

    follow(`check on $(N* (?<=check on)\\s+\\D+\\s*)`,
        p=> {
            var key = getKeyByValue(lists[p.name], p.N.value.trim())
            if (!key){
                p.play(`there is no ${p.N.value.trim()} in the list`)
            }
            else {
                lists[p.name][key][1]="active"
                showItems(p, p.name)
                p.play(`item ${p.N.value} was set to active`)
            }
        }
    )


    follow(`(I want to|) rename $(S* (?<=rename).*(?=to)) to $(R* (?<=to).*)`,
        `(I want to|) change $(S* (?<=change).*(?=to)) to $(R* (?<=to).*)`,
        async p=>{
            if (p.S.value.trim()===""||p.R.value.trim()===""){
                p.play("Please repeat the command")
                return null
            }
            var index = indexFromName(lists[p.name], p.S.value.trim());
            if (index > -1) {
                lists[p.name][index][0]=p.R.value.trim();
                showItems(p, p.name)
                p.play(`${p.S.value.trim()} was renamed to ${p.R.value.trim()}`)
            }
            else {
                p.play(`Please add ${p.S.value.trim()} first before renaming it`)
            }
        }
    )
})


intent(`(I want to|) (activate|change|make changes to|modify|go to) list $(N* (?<=list).*)`,
    `(I want to|) activate $(N* (?<=activate).*(?=list)) list`,
    `(I want to|) change $(N* (?<=change).*(?=list)) list`,
    `(I want to|) make changes to $(N* (?<=make changes to).*(?=list)) list`,
    `(I want to|) modify $(N* (?<=modify).*(?=list)) list`,
    `(I want to|) go to $(N* (?<=go to).*(?=list)) list`,
    async p=>{
        let listName = p.N.value.trim()
        if (listName===""){
            p.play("Please repeat the command")
            return null
        }
        listName = resolveList(listName)
        if (listName){
            showItems(p, listName)
            p.play(`${listName} is activate, please say what you want to do next`)
            p.then(list, {name:listName})
        }
        else if (p.N.value!=="") {
            p.play("no such list was found! Do you want to create it?")
            let answer = await p.then(questions)
            if (answer==="yes"){
                listName = createList(p.N.value.trim())
                showItems(p, listName)
                p.play(`${listName} was created, you can add items now`)
                p.then(list, {name:listName})
            }
            else {
                p.play("Ok!")
            }
        }
        else {
            p.play("please specify correct list name!")
        }
    }
)

intent(`(I want to|) add $(R* (?<=add).*(?=to)) to $(N* (?<=to).*(?=list)) list`,
    async p=>{
        let listName = p.N.value.trim()
        if (listName===""){
            p.play("Please repeat the command")
            return null
        }
        listName = listName.split(" ")
        listName = listName.slice(-2)
        var testWords = ["to", "the"];
        for (var i in testWords){
            if (listName.indexOf(testWords[i])>-1)
            {
                listName.splice(listName.indexOf(testWords[i]),1)
            }
        }
        listName=listName.join(" ")
        listName = resolveList(listName)
        if (p.N.value ===""||p.N.value ===" "){
            p.play("incorrect item")
            return null
        }
        if (listName){
            lists[listName].push([p.R.value.trim(), "active"])
            showItems(p, listName)
            p.play(`${p.R.value.trim()} was added to list ${p.N.value}`)
            p.then(list, {name:listName})
        }
        else if (p.N.value!=="") {
            p.play("no such list was found! Do you want to create it?")
            let answer = await p.then(questions)
            if (answer==="yes"){
                listName = createList(p.N.value.trim())
                p.play(`${listName} was created`)
                lists[listName].push([p.R.value.trim(), "active"])
                showItems(p, listName)
                p.play(`${p.R.value.trim()} was added to list ${p.N.value}`)
                p.then(list, {name:listName})
            }
            else {
                p.play("Ok!")
            }
        }
        else {
            p.play("please specify correct list name!")
        }
    }
)

intent(`(I want to|) delete $(R* (?<=delete).*(?=from)) from $(N* (?<=from).*(?=list)) list`,
    `(I want to|) remove $(R* (?<=remove).*(?=from)) from $(N* (?<=from).*(?=list)) list`,
    async p=>{
        let listName = p.N.value.trim()
        if (listName===""){
            p.play("Please repeat the command")
            return null
        }
        listName = listName.split(" ")
        listName = listName.slice(-2)
        var testWords = ["from"];
        for (var i in testWords){
            if (listName.indexOf(testWords[i])>-1)
            {
                listName.splice(listName.indexOf(testWords[i]),1)
            }
        }
        listName=listName.join(" ")
        listName = resolveList(listName)
        if (listName){
            var index = indexFromName(lists[listName], p.R.value.trim());
            if (index > -1) {
                lists[listName].splice(index, 1);
                showItems(p, listName)
                p.play(`${p.R.value.trim()} was removed to list ${p.N.value}`)
                p.then(list, {name:listName})
            }
            else {
                p.play(`Please add ${p.R.value.trim()} first before removing it`)
            }
            p.then(list, {name:listName})
        }
        else if (p.N.value!=="") {
            p.play("no such list was found! Do you want to create it?")
            let answer = await p.then(questions)
            if (answer==="yes"){
                listName = createList(p.N.value.trim())
                p.play(`${listName} was created`)
                showItems(p, listName)
                p.then(list, {name:listName})
            }
            else {
                p.play("Ok!")
            }
        }
        else {
            p.play("please specify correct list name!")
        }
    }
)

intent(`(I want to|) rename $(S* (?<=rename).*(?=to)) to $(R* (?<=to).*(?=in)) in $(N* (?<=in).*(?=list)) list`,
    `(I want to|) change $(S* (?<=change).*(?=to)) to $(R* (?<=to).*(?=in)) in $(N* (?<=in).*(?=list)) list`,
    async p=>{
        let listName = p.N.value.trim()
        if (listName==="" || p.S.value.trim()===""||p.R.value.trim()===""){
            p.play("Please repeat the command")
            return null
        }
        listName = listName.split(" ")
        listName = listName.slice(-2)
        var testWords = ["in"];
        for (var i in testWords){
            if (listName.indexOf(testWords[i])>-1)
            {
                listName.splice(listName.indexOf(testWords[i]),1)
            }
        }
        listName=listName.join(" ")
        listName = resolveList(listName)
        if (listName){
            var index = indexFromName(lists[listName], p.S.value.trim());
            if (index > -1) {
                lists[listName][index][0]=p.R.value.trim();
                showItems(p, listName)
                p.play(`${p.S.value.trim()} was renamed to ${p.R.value.trim()}`)
                p.then(list, {name:listName})
            }
            else {
                p.play(`Please add ${p.S.value.trim()} first before renaming it`)
            }
            p.then(list, {name:listName})
        }
        else {
            p.play("no such list was found! Do you want to create it?")
            let answer = await p.then(questions)
            if (answer==="yes"){
                listName = createList(p.N.value.trim())
                lists[listName].push([p.R.value.trim(), "active"])
                showItems(p, listName)
                p.play(`${listName} was created`)
                p.play(`${p.R.value.trim()} was added to list ${listName}`)
                p.then(list, {name:listName})
            }
            else {
                p.play("Ok!")
            }
        }
    }
)

intent(`(I want to|) create $(N* (?<=create).*(?=list)) list`,
    `(I want to|) make $(N* (?<=make).*(?=list)) list`,
    `(I want to|) (create|make) list $(N* (?<=list).*)`,
    async p=>{
        if (p.N.value.trim()===""){
            p.play("Please repeat the command")
            return null
        }
        let listName = resolveList(p.N.value.trim())
        if (!listName){
            listName = createList(p.N.value.trim())
            showItems(p, listName)
            p.play(`${listName} list was successfully created`)
            p.then(list, {name:listName})
        }
        else {
            p.play(`${listName} list already exists, do you want to replace it?`)
            let answer = await p.then(questions)
            if (answer==="yes") {
                listName = createList(p.N.value.trim())
                showItems(p, listName)
                p.play(`${listName} list was replaced`)
                p.then(list, {name:listName})
            }
            else {
                p.play("ok")
            }
        }
    })

intent(`(I want to|) delete $(N* (?<=delete).*(?=list)) list`,
    `(I want to|) remove $(N* (?<=remove).*(?=list)) list`,
    `(I want to|) (delete|remove)  list $(N* (?<=list).*)`,
    async p=>{
        let listName = resolveList(p.N.value.trim())
        if (!listName){
            p.play(`${listName} list are not found!`)
        }
        else {
            delete lists[listName]
            showLists(p)
        }
    })

intent(`(I want to|) show $(N* (?<=show).*(?=list)) list`,
    `(I want to|) show list $(N* (?<=list).*)`,
    `(I want to|) open $(N* (?<=open).*(?=list)) list`,
    `(I want to|) open list $(N* (?<=list).*)`,
    async p=>{
        let listName = resolveList(p.N.value.trim())
        if (!listName){
            p.play(`${listName} list is not found`)
        }
        else {
            if(lists[listName].length===0){
                p.play("list is empty now")
            }
            else {
                p.play(`${listName} list contains`)
                for (var i in lists[listName]) {
                    p.play(`item ${parseInt(i)+1} is  ${lists[listName][i]}`)
                }
            }
            showItems(p, listName)
            p.then(list, {name:listName})
        }
    })

intent(`(I want to|) rename $(N* (?<=rename).*(?=list)) list`,
    `(I want to|) rename list $(N* (?<=list).*)`,
    async p=>{
        let listName = resolveList(p.N.value.trim())
        if (!listName){
            p.play(`${listName} list is not found`)
        }
        else {
            p.play("What would be the new name?")
            let newName = await p.then(rename)
            renameList(listName, newName)
            p.play(`${p.N.value} was renamed to ${newName}`)
            showLists(p)
        }
    })

intent(`(I want to|) rename $(N* (?<=rename).*(?=list)) list to $(R*  (?<=to).*) (list|)`,
    `(I want to|) rename list $(N* (?<=list).*) to $(R* (?<=to).*) (list|)`,
    async p=>{
        let listName = resolveList(p.N.value.trim())
        if (!listName){
            p.play(`${listName} list is not found`)
        }
        else {
            renameList(listName, p.R.value.trim())
            p.play(`${p.N.value} was renamed to ${p.R.value.trim()}`)
            showLists(p)
        }
    })

intent("How many lists (do I have|)",
    p=>{
        showLists(p)
        if (Object.keys(lists).length===0){
            p.play("You have no lists")
            return null
        }
        else if (Object.keys(lists).length===1){
            p.play("You have 1 list")
            return null
        }
        showLists(p)
        p.play(`(you have|there are) ${Object.keys(lists).length} lists`)
    })

intent(`(tell me|say me) lists names`,
    `what are (my|) lists`,
    `(show|show me) (all|) lists`,
    p=>{
        showLists(p)
        var keys = (Object.keys(lists))
        if (keys.length===0){
            showLists(p)
            p.play("You have no lists")
        }
        else if (keys.length===1){
            showLists(p)
            p.play(`You have (only|) 1 list - ${keys[0]}`, `You have one active list -  ${keys[0]}`)
        }
        else{
            showLists(p)
            p.play(`(you have|there are) ${keys.length} lists`)
            for (var i in keys) {
                p.play(`${keys[i]}`)
            }
        }
    })


function createList(name) {

    lists[name] = []
    return name
}

function resolveList(name) {
    if(name in lists){
        return name
    }
}

function renameList(oldName, newName){
    if (oldName !== newName) {
        Object.defineProperty(lists, newName,
            Object.getOwnPropertyDescriptor(lists, oldName));
        delete lists[oldName];
    }
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key][0] === value);
}

function indexFromName(list, item) {
    for (var i = 0; i < list.length; i++) {
        if (list[i][0] == item && list[i][1] == "active") {
            return i;
        }
        else if (list[i][0] == item[0] && list[i][1] == "done"){
            return i;
        }
    }
    return -1;
}

function showLists(p) {
    var displayObject = []
    for (var i in lists){
        displayObject.push({name:i,items:[]})
    }
    p.play({
        embeddedPage:true, page: "todo_list.html",
        lists:displayObject
    });
}

function showItems(p, listName) {
    var displayObject = [{name:listName, items:[]}]
    for (var i in lists[listName]){
        var bool
        if(lists[listName][i][1]==="active"){
            bool=false
        }
        else if (lists[listName][i][1]==="done") {
            bool = true
        }
        displayObject[0].items.push({title:lists[listName][i][0], isDone:bool})
    }
    p.play({
        embeddedPage:true, page: "todo_list.html",
        lists:displayObject
    });
}