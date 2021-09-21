// {Name: Incture}
// {Description: Incture Application Alan Integration}
// {Visibility: Admin}

// Order: Choose a Task, Add Comment/Resolve/Open
// If open: add a comment/resolve
// If comment: Make changes/resolve
// If resolve: Detail Report, Description, Submit
// Contexts: submit, description, resolve

let tasks = {
    "Pigging Launch": {
        "Status": "Completed",
        "Author": "Anna Vandergraph",
        "Type": "Downtime",
        "Comments": {
            "Comment1": {
                "Author": "Jason Schwarz",
                "Text": "Drywall is completely torn",
                "Timestamp": 21788829447
            },
            "Comment2": {
                "Author": "Amanda Jessen",
                "Text": "Project timeline delayed for two weeks",
                "Timestamp": 263496022181
            }
        }
    },
    "Bring Well Back Online": {
        "Status": "In Progress",
        "Author": "Damon Martin",
        "Type": "Downtime",
        "Comments": {
            "Comment1": {
                "Author": "Amanda Jessen",
                "Text": "Shortage of Hard Hats and Safety Equipment",
                "Timestamp": 291999129181
            },
            "Comment2": {
                "Author": "Amanda Jessen",
                "Text": "Equipment Will Be On Site for Repair",
                "Timestamp": 23793029397
            }
        }
    }
}

//const TASKS_INTENT = Object.keys(tasks).forEach((element, index) => {element = element + '~' + index}).join('|')
const TASKS_INTENT = Object.keys(tasks).join('|');

let submitContext = context(() => {
    follow(`(Yes|Confirm|Right|Affirmative)`, p => {
        p.play({"command": "resolve"})
        p.play("(Okay|Sure|Got it|Great), task has been resolved.")
        p.resolve(null)
    })

    follow(`(No|Cancel|Wrong|Negative)`, p => {
        p.play('Okay, what would you like to change?')
        p.resolve(null)
    })

    follow(`(Stop|Exit|Skip|Return)`, p => {
        p.resolve(null);
    })
})

let commentContext = context(() => {
    follow(`(Add a comment|Say|Reply|Comment|) $(I* (.+))`, async p => {
        if(p.task) addComment(p, p.I.value, p.task); return p.resolve(p.I.value)
        return p.resolve(null)
    })
})

let descriptionContext = context(() => {
    //title('Description Context')
    follow(`(Description is|) $(I* (.+))`, p => {
        p.play({"command": "fill", "description": p.I.value})
        p.play("(Ok|Got it|Cool). Now, review your description. Would you like to resolve the task?")
        p.then(submitContext)
    })
})

function resolve(p, task, detail) {
    if(detail) {
        p.play({"command": "resolveDetail", "Entry": detail, "task": task})
        p.play("Resolving task and added " + detail + " detail entry. What's the description?")
        p.then(descriptionContext)
    } else {
        p.play({"command": "resolve", "task": task})
        p.play("(Okay|Sure|Got it|Great), task has been resolved.")
        p.resolve(null)
    }
}

function addComment(p, comment, task) {
    p.play({"command": "addComment","comment": comment, "task": task})
    p.play({embeddedPage: true, page: "incture.html", command:"comment", comment: comment});
    p.play("Okay, comment added to this task. Would you like to make changes or mark the task as resolved?")
}

intent(`(Alan|) (how|in what way|what) (can|do) I (use|work with) this (app|button|thing|)`, p => {
    p.play(`(In this application|) you can open a task, add a comment to a task? or mark a task as resolved`)
})

// Open a task
intent(`(Bring up|open|show|display|pull up|) (task|) $(TASK ${TASKS_INTENT})`, p => {
    p.play({
        "command": "showTask",
        "task": p.TASK.value
    }) 
    p.state.task = p.TASK.value
    if(p.state.comment) {
        addComment(p, p.state.comment, p.state.task)
    } else if(p.state.willMarkResolved) {
        if(p.state.resolvedEntry) {resolve(p, p.state.task, p.state.resolvedEntry);} 
        else {resolve(p, p.state.task);}
    } else {
        p.play('(Okay|Sure|Got it|Great), would you like to add a comment? or resolve the task')    
    }
})

// Add a comment to a task
intent(`(Add a comment|Say|Reply|Comment|Add comment) $(I* (.+))`, `(Add a comment|Say|Reply|Comment|Add comment)`,
       `(Add a comment|Say|Reply|Comment|Add comment) (to|on) (task|) $(TASK ${TASKS_INTENT})`,
       `(Add the comment|Say|Reply|Comment|Add comment) $(I* (.+)) (to|on) (task|) $(TASK ${TASKS_INTENT})`, async p => { // (that says that functionality needs to be added)
    if(p.TASK || p.state.task) {
        p.state.task = (p.TASK ? p.TASK.value : p.state.task)
        p.play({ "command": "showTask", "task": p.state.task})
        if(p.I) {
            p.play({"command": "addComment","comment": p.I.value, "task": p.state.task})
            p.play("Your comment has been added to the task. (Would you like|Do you want) to make changes? or mark the task as resolved")
        } else {
            p.play("Okay, what comment would you like to add?")
            p.then(commentContext, {task:p.state.task})
        }   
    } else {
        if(p.I) {
            if(!p.state.task) {
                p.state.comment = p.I.value
                p.play('Which task do you want to add this comment to?')
            } else {
                p.play({"command": "addComment","comment": p.I.value, "task": p.state.task})
                p.play("Your comment has been added to the task. Would you like to make changes? or mark the task as resolved")     
            }
        } else {
            p.play('(Okay|) what do you want to comment?');
            p.state.comment = await p.then(commentContext);
            p.play("(Now|) Which task (would you like|do you want) to comment on?");
        }   
    }
}) 

// Mark a task as resolved
intent(`(Resolve|End|Stop) (the|) (task|) (entry details|detail entry|entry) as $(I* (.+))`, 
       `(Mark as|) (resolved|ended|stopped)`, `(Resolve|End|Stop) (the|) (task|)`, p => {
    if(!p.state.task) {
        p.state.willMarkResolved = true;
        if(p.I) {p.state.resolvedEntry = p.I.value;}
        p.play(`Which task do you want to mark as resolved?`)
    } else {
        if(p.I) {resolve(p, p.state.task, p.I.value);}
        else {resolve(p, p.state.task);}
    }
})

// Resolve named task
intent(`(Resolve|End|Get rid of|Stop) $(TASK ${TASKS_INTENT})`, p => {
    p.state.task = p.TASK.value
    resolve(p, p.TASK.value, null)
});

// Remove comment
intent(`(Remove|Delete|Take away) (my|) comment`, p => {
    p.play({"command": "removeComment", "comment": p.state.comment})
});
    
intent(`(Make|Do|) changes`, p => {
    p.play('(Okay|Sure|Got it|Great), what changes do you want to make?')
})

