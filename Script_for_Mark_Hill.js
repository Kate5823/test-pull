// {Name: Script_for_Mark_Hill}
// {Description: Provides voice interface for Mark Hill's page}
// {Visibility: Admin}

title("UWM Mark Hill");

var years = ["2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010",
    "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000",
    "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990",
    "1989", "1988", "1987", "1986", "1985", "1984", "1983"]

years = years.join('|');

let continueDialoag = context(() =>{
    follow("What does (Mark|Mark Hill|he) research",
        reply("Mark's research includes parallel computer system design, memory system design, and computer simulation"))
    follow("What's (Mark Hill|Mark|he) the Professor of",
        reply("Mark is the professor of Computer engineering, computer organization, computer architecture, and paralell computer architecture"))
    follow("Who's (Mark Hill|Mark|he)",
        reply("Mark Hill is the John P. Morgridge Professor and Gene M. Amdahl Professor of Computer Sciences at the University of Wisconsin-Madison"))
})

let building = context(() =>{
    follow("(What building|Where)",
        reply("At 6373 in the Computer Science building"))
})

let scrolling = context(()=>{
    follow(`what are (the|) (publications|his) (active|) years`,
        reply("Publication years are between 1983 and 2018"))

    follow(`(scroll|) (to|) top`,
        reply("",
            p => {

                p.play({
                    command:"run:command",
                    subCommand:"scrollToTop"
                });
            }));

    follow(`(scroll|) up`,
        reply("",
            p => {

                p.play({
                    command:"run:command",
                    subCommand:"scrollUp"
                });
            }));

    follow(`(scroll|) down`,
        reply("",
            p => {

                p.play({
                    command:"run:command",
                    subCommand:"scrollDown"
                });
            }));

    follow(`scroll to $(T ${years}) (year|)`,

        p => {

            if (p.type==="facts"){
                p.play("Do you want to scroll (up|down|to the top of the page)?")
                return
            }

            if (p.T.value) {

                p.play("scrolling (now|)")

                var year = "year" + p.T.value

                p.play({
                    command: "run:command",
                    subCommand: "scrollToPublication",
                    publicationName: year
                });
            }
            else {
                p.play("The available years are from 1983 to 2018")
                return
            }

        });

    fallback("We can't provide you this information now")

})


intent(`(show me|what are|open|) (all|recent|) (Mark Hill's|Mark's|) publications`,
    reply("These are Mark Hill`s publication over the years", "Please have a look at the Mark Hills publications publications", "Mark Hill has scholarly publications starting from 1983",
        p => {
            p.play({
                command:"open:page",
                page:"https://pages.cs.wisc.edu/~markhill/includes/publications.html"
            });
            p.then(scrolling,  {type:"publications"})
        }));

intent(`(Tell me|Show me|) what is (interesting|amusing) about (Mark|Mark Hill)?`,
    reply("Please, have a look at (what we have got for you|this)", "Take a look at this",
        p => {

            p.play({
                command:"open:page",
                page:"https://pages.cs.wisc.edu/~markhill/includes/amusement.html"
            });
            p.then(scrolling, {type:"facts"})
        }));

intent(`(what are|) (Mark Hill's|Mark's|his|) (open|office) hours`,
    reply("Thursday 1 30 PM to 2 15 PM",
        p=> {
            p.play({
                command:"open:page",
                page:"https://pages.cs.wisc.edu/~markhill/includes/contact.html"
            });
            p.then(building)
        }));

//http://pages.cs.wisc.edu/~markhill/
intent("Who's Mark (Hill|)",
    p=> {
        p.play("Mark Hill is the John P. Morgridge Professor and Gene M. Amdahl Professor of Computer Sciences at the University of Wisconsin-Madison")
        p.play({
            command: "open:page",
            page: "http://pages.cs.wisc.edu/~markhill/"
        })
        p.then(continueDialoag)
    })

intent("What does (Mark|Marl Hill|he) research",
    p=> {
        p.play("Mark's research includes parallel computer system design, memory system design, and computer simulation")
        p.play({
            command: "open:page",
            page: "http://pages.cs.wisc.edu/~markhill/"
        })
        p.then(continueDialoag)
    })

intent("What's (Mark|Marl Hill|he) the Professor of",
    p=> {
        p.play("Mark is the professor of Computer engineering, computer organization, computer architecture, and paralell computer architecture")
        p.play({
            command: "open:page",
            page: "http://pages.cs.wisc.edu/~markhill/"
        })
        p.then(continueDialoag)
    })



intent(`What are (Mark's|Mark Hill's|his) publications $(Q from|for) $(T ${years}) (year|)`,
    p=> {
        if (p.T.value) {

            p.play("Here are (ark's|Mark Hill's|his) publications "+ p.Q.value + " " + p.T.value + " year")

            p.play({
                command: "open:page",
                page: "https://pages.cs.wisc.edu/~markhill/includes/publications.html"
            });
            var year = "year" + p.T.value
            p.play({
                command: "run:command",
                subCommand: "scrollToPublication",
                publicationName: year
            });
        }
        else{
            p.play("The available years are from 1983 to 2018")
            return
        }

        p.then(scrolling, {type:"publications"})
    })


intent("What's (his|Mark's|Mark Hill's) phone number",
    reply("6 0 8 - 2 6 2 - 2 1 9 6"))


// http://pages.cs.wisc.edu/~markhill/includes/graduates.html
intent("Who are the current (Mark Hill's|Marks's|his|) graduate students", "Who are (Mark Hill's|Marks's|his) graduate students",
    p=>{
        p.play("Here are (Mark Hill's|Marks's) graduate students")
        p.play({
            command:"open:page",
            page:"http://pages.cs.wisc.edu/~markhill/includes/graduates.html"
        });
    })