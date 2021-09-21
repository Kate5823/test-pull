// {Name: UWM_Graduate_2}
// {Description: Provides info about graduation programs}
// {Visibility: Admin}

title("UWM graduate");

const programs = {}

programs.PMP =
    {
        "name": ["Professional Masters Program","PMP"],
        "information": ["The (Professional Masters Program|PMP) is (designed|made) for working professionals who want to (complete|finish) the degree in two years. Here are more details.", "Here(s information|are details) on the (Professional Masters Program|PMP). Its (made|designed) for working professionals who want to (finish|complete) the degree in two years."],
        "information_IMG": "graduate/pmp.png",
        "degree_requirements": ["Here are the details on the Professional Masters Program Degree requirements.", "Here's more information on the PMP requirements"],
        "degree_requirements_IMG": "graduate/pmp_req.png",
        "timeline": ["The Professional Masters Program can be (completed|finished) in 2 years", "A student taking two courses per semester can (finish|complete) the PMP in two years"],
        "timeline_IMG": "graduate/pmp_req.png",
        "application_requirements":  ["The PMP (application|admission) requirements are the same as the requirements for applicants to the regular Masters Program. Here are more details:", "Applicants must satisfy the graduate school requirements, including GPA, bachelor's degree, English proficiency, and financial requirements"],
        "application_requirements_IMG": "graduate/pmp_application.png",
        "faq":  ["The PMP (faq|frequently asked questions) here", "Please check our recent (faq|frequently asked questions) below"],
        "faq_IMG": "graduate/pmp_faq.png",
    };

programs.PHD =
    {
        "name": ["PHD","Doctor of Philosophy"],
        "information": ["the PHD is one of several options for graduate study. Here(s information|are more details)", "Here's a brief summary of the traditional PHD program"],
        "information_IMG": "phd/timeline.png",
        "degree_requirements": ["The PHD (degree|)requirements are the qualifying process, the preliminary process, and the final process. Here's more information:", "There are several course requirements and examinations to complete the PHD. Here's more information"],
        "degree_requirements_IMG": "phd/phd_req.png",
        "timeline": ["5 years are alloted for students to complete their PHD"],
        "timeline_IMG": "phd/phd_req.png",
        "application_requirements":  ["The (application|admission) requirements for the PHD are letters of recommendation, GRE scores, official school records, and English proficiency.(Here's more information|) "],
        "application_requirements_IMG": "phd/admission.png",
        "advising":  ["Initially and by default, the graduate advisors of a student in the academic track are all the members of the Graduate Advising Committee (GAC). (Here's more information|) "],
        "advising_IMG": "phd/advising.png",
        "performance":  ["The satisfactory performance in the academic track of the graduate program in computer sciences entails adhering to the university's standards for professional conduct at all times and meeting the Graduate School enrollment requirements, and maintaining a cumulative GPA of at least 3.00 (Here's more information|) "],
        "performance_IMG": "phd/performance.png",
        "aid":  ["Many students admitted to the traditional M.S./Ph.D. track are offered a funding guarantee of four years through the Department of Computer Sciences, typically in the form of teaching assistantships.(Here's more information|) "],
        "aid_IMG": "phd/aid.png",
        "appeals":  ["If a student feels unfairly treated or aggrieved by faculty, staff or another student, the Department of Computer Sciences and the Graduate School offer several avenues to resolve the issue.(Here's more information|) "],
        "appeals_IMG": "phd/appeals.png",

    };

programs.MS =
    {
        "name": ["Masters","MS", "Master of Sciences", "Master of Computer Science"],
        "information": ["the Master of Computer Sciences is one of several options for graduate study. Here(s information|are more details)"],
        "information_IMG": "phd/timeline.png",
        "degree_requirements": ["The MS (degree|) requirements are meet the number of minimum credits, and pay all fees and paperwork. Here's more information:", "There are several course requirements and examinations to complete the PHD. Here's more information"],
        "degree_requirements_IMG": "phd/ms_req.png",
        "timeline": ["Masters degrees are typically completed in two years"],
        "timeline_IMG": "phd/ms_req.png",
        "application_requirements":  ["The (application|admission) requirements for the Masters are letters of recommendation, GRE scores, official school records, and English proficiency.(Here's more information|) "],
        "application_requirements_IMG": "phd/admission.png",
        "advising":  ["Initially and by default, the graduate advisors of a student in the academic track are all the members of the Graduate Advising Committee (GAC). (Here's more information|) "],
        "advising_IMG": "phd/advising.png",
        "performance":  ["The satisfactory performance in the academic track of the graduate program in computer sciences entails adhering to the university's standards for professional conduct at all times and meeting the Graduate School enrollment requirements, and maintaining a cumulative GPA of at least 3.00 (Here's more information|) "],
        "performance_IMG": "phd/performance.png",
        "aid":  ["Many students admitted to the traditional M.S./Ph.D. track are offered a funding guarantee of four years through the Department of Computer Sciences, typically in the form of teaching assistantships.(Here's more information|) "],
        "aid_IMG": "phd/aid.png",
        "appeals":  ["If a student feels unfairly treated or aggrieved by faculty, staff or another student, the Department of Computer Sciences and the Graduate School offer several avenues to resolve the issue.(Here's more information|) "],
        "appeals_IMG": "phd/appeals.png",
    }

programs.MINOR =
    {
        "name": ["Graduate PhD minor", "Minor", "Graduate minor"],
        "information": ["The (Graduate PhD minor|Graduate minor) program in computer sciences is (designed|made) for graduate students in other PhD programs at UW-Madison. You should consult with a member of the CS Graduate Advising Committee  early in graduate program to ensure acceptance of the minor program. Here are more details.", "Here(s information|are details) on the (Graduate PhD minor|Graduate minor) program. Its (made|designed) for graduate students in other PhD programs at UW-Madison. You should consult with a member of the CS Graduate Advising Committee early in graduate program to ensure acceptance of the minor program."],
        "information_IMG": "graduate/minor.png",
        "degree_requirements": ["Here are the details on the (Graduate PhD minor|Graduate minor) program requirements.", "Here's more information on the (Graduate PhD minor|Graduate minor) program requirements"],
        "degree_requirements_IMG": "graduate/minor.png",
        "timeline": ["You can receive more information from the (CS|) Graduate Program Coordinator.", "Please consult a (CS|) Graduate Program Coordinator for more info(rmation|)."],
        "timeline_IMG": "graduate/minor.png",
        "application_requirements":  ["(CS|) Graduate Program Coordinator can provide you more info(rmation|) on this", "Please contact (CS|) Graduate Program Coordinator for more info(rmation|)."],
        "application_requirements_IMG": "graduate/minor.png",
    };


programs.PCCP =
    {
        "name": ["Professional Capstone Certificate Program"],
        "information": ["If you have obtained a bachelor's degree that is not in computer sciences, but you now want to learn the fundamentals of computer sciences so that you can transition towards a developer job, the new Professional Capstone Certificate Program is for you. Here are more details.", "Here(s information|are details) on the Professional Capstone Certificate Program. Its (made|designed) for professionals who have  bachelor's degree that is not in computer sciences, but now want to learn the fundamentals of computer sciences"],
        "information_IMG": "graduate/pccp.png",
        "degree_requirements": ["Here are the details on the Professional Capstone Certificate Program requirements.", "Here's more information on the Professional Capstone Certificate Program requirements"],
        "degree_requirements_IMG": "graduate/pccp_req.png",
        "timeline": ["The working professional taking one course per semester can complete the Professional Capstone Certificate Program in four to six semesters", "A student taking one course per semester can (finish|complete) the Professional Capstone Certificate Program in two years"],
        "timeline_IMG": "graduate/pccp_req.png",
        "application_requirements":  ["Applicants to the Professional Capstone Certificate Program must already have a bachelor's degree. Here are more details:", "Applicants must already have a bachelor's degree. Here are more details"],
        "application_requirements_IMG": "graduate/pccp_application.png",
        "international":  ["The Professional Capstone Certificate Program is now accepting international students for the Fall semester during a pilot period. These details are all outlined below."],
        "international_IMG": "graduate/pccp_international.png",
        "faq":  ["The Professional Capstone Certificate Program (faq|frequently asked questions) here", "Please check our recent (faq|frequently asked questions) below"],
        "faq_IMG": "graduate/pccp_faq.png",
    };

programs.UX =
    {
        "name": ["User Experience Design Capstone Certificate Program", "Mad UX", "Mad UX Program"],
        "information": ["The (User Experience Design Capstone Certificate Program|Mad UX Program) online capstone certificate provides you with introductory through intermediate user experience skills to plan, design and assess innovative digital user experiences via digital applications and media. Here are more details.", "The Department of Computer Sciences is partnering with the the Information School (iSchool) to offer an online capstone certificate in User Experience Design (Mad UX)"],
        "information_IMG": "graduate/ux_capstone.png",
        "degree_requirements": ["Here are the details on the (User Experience Design Capstone Certificate Program|Mad UX Program) requirements.", "Here's more information on the (User Experience Design Capstone Certificate Program|Mad UX Program) requirements"],
        "degree_requirements_IMG": "graduate/ux_capstone.png",
        "timeline": ["The (User Experience Design Capstone Certificate Program|Mad UX Program) can be completed  entirely online within one calendar year", "A student can (finish|complete) the (User Experience Design Capstone Certificate Program|Mad UX Program) in one year"],
        "timeline_IMG": "graduate/ux_capstone.png",
        "application_requirements":  ["The (User Experience Design Capstone Certificate Program|Mad UX Program) application requiremtnts can be found here:"],
        "application_requirements_IMG": "graduate/ux_capstone.png"
    };

var PROG_TYPES = ["pmp", "professional masters program","pmp program", "master of science", "master program", "masters program", "ms", "masters", "phd", "doctor of philosophy", "ph.d program", "phd program", "ph.d", "graduate phd minor", "graduate ph.d minor", "minor", "graduate minor program", "graduate minor", "professional capstone certificate program", "professional capstone certificate", "user experience design capstone certificate program", "mad ux", "mad ux program", "user experience design capstone program"];

for (var i = 0; i < PROG_TYPES.length; i++ ) {
    PROG_TYPES[i] = PROG_TYPES[i] + "~" + PROG_TYPES[i];
}
PROG_TYPES = PROG_TYPES.join('|');

var INFO_TYPES = ["application process", "admission process", "application", "admission", "application requirements", "admission requirements", "requirements", "timelines", "advising", "performance evaluation", "performance", "financial aid", "aid", "financial support", "appeals", "grievances", "grienvances and appeals", "faq", "frequently asked questions", "internations students"]

for (var i = 0; i < INFO_TYPES.length; i++ ) {
    INFO_TYPES[i] = INFO_TYPES[i] + "~" + INFO_TYPES[i];
}

INFO_TYPES = INFO_TYPES.join('|') + '|';


let video = context(()=>{
    title("video");

    follow(`stop`,
        p => {

            p.play({
                data: {commandName:'stop'},
                embeddedPage:true,
                command:"videoCommand",
                page:"wisc_university.html"
            });
        });

    follow(`(continue|play)`,
        p => {

            p.play({
                data: {commandName:'continue'},
                embeddedPage:true,
                command:"videoCommand",
                page:"wisc_university.html"
            });
        });

    follow(`(start|begining)`,
        p => {

            p.play({
                data: {url: p.type},
                embeddedPage: true,
                command: "playVideo",
                page: "wisc_university.html"
            });
        });


    intent(`(go forward|forward)`,
        p => {

            p.play({
                data: {commandName:'addSeconds',secs:30},
                embeddedPage:true,
                command:"videoCommand",
                page:"wisc_university.html"
            });
        });

    // intent(`(go forward|forward) (on|) $(DURATION)`,
    //     p => {
    //         if (p.T.label==="minutes"){
    //             p.number = p.number*60
    //         }
    //         p.play({
    //             data: {commandName:'addSeconds',secs:p.T.number},
    //             embeddedPage:true,
    //             command:"videoCommand",
    //             page:"wisc_university.html"
    //         });
    //     });


    intent(`(go back|go backward|backward)`,
        reply("",
            p => {

                p.play({
                    data: {commandName:'removeSeconds',secs:30},
                    embeddedPage:true,
                    command:"videoCommand",
                    page:"wisc_university.html"
                });
            }));

})

let play = context(() => {
    title("play")

    follow(`(yes|ok|go to|play) (the|) (video|)`, `I want to see (the|) video`,
        p=> {
            p.play({
                data: {url: 'WhyStudentsChooseWisconsinCS.mp4'},
                embeddedPage: true,
                command: "playVideo",
                page: "wisc_university.html"
            });

            // p.play({
            //     data: {commandName:'stop'},
            //     embeddedPage:true,
            //     command:"videoCommand",
            //     page:"wisc_university.html"
            // });

            //p.play("We can show you a video about studyng in the university of Wisconsin")
            //p.play("Shall i play the video")
            // p.play({
            //     data: {commandName:'continue'},
            //     embeddedPage:true,
            //     command:"videoCommand",
            //     page:"wisc_university.html"
            // });
            p.then(video, {type:'WhyStudentsChooseWisconsinCS.mp4'})
        })

    follow(`(no)`, `I don't want to see (the|) video`,
        p=> {
            p.play("Ok, maybe next time")
        })
})

intent(`(Show me|) (the|) video about (CS department|CS|Department of computer science|) (university of wisconsin|university of wisconsin madison|)`,
    `Why (student|students|i) (should|) choose (CS department|CS|Department of computer science|) (Wisconsin|university of wisconsin madison|)`,
    `Why (study|should I study) at Madison?`, `What is unique about your department?`,
    p=> {
        displayPage(p, "video.png");
        p.play("We can show you a video about studyng in the university of Wisconsin")
        p.play("Shall i play the video")
        p.then(play)
    }
)

intent(`(Show me|) (the|) preparing for the next fifty years (video|)`,
    p=> {
        p.play({
            data: {url: 'Preparing_ for_the Next_50_Years.mp4'},
            embeddedPage: true,
            command: "playVideo",
            page: "wisc_university.html"
        });
        p.then(video, {type:'Preparing_ for_the Next_50_Years.mp4'})
    }
)


let phd = context(()=> {
    title("phd");


    follow(`(show me|show me more|tell me more about (program|programs|) $(T~ ${INFO_TYPES}) (degree|)`,
        `$(T~ ${INFO_TYPES})`, `what is (the|) $(T~ ${INFO_TYPES})`,
        p => {
            if (p.T.label === null){
                p.play("Ups, I don't understand what you mean")
                return
            }
            p.T.label = test_info(p.T.label)
            var keys = Object.keys(programs[p.type])
            if (keys.indexOf(p.T.label)===-1){
                displayPage(p,"contacts.png")
                p.play ("please contact one of our advisors for more info(rmation|)")
                return
            }
            var answer = programs[p.type][p.T.label][Math.floor(Math.random()*programs[p.type][p.T.label].length)];
            var img = p.T.label + "_IMG"
            displayPage(p, programs[p.type][img]);
            p.play(answer)
            return
        }
    )

    follow(`what is (the|) current program`,
        `descripe me (the|) current program`,
        p=> {
            var answer = programs[p.type].information[Math.floor(Math.random() * programs[p.type].information.length)];
            displayPage(p, programs[p.type].information_IMG);
            p.play(answer)
        })

    follow(`Get (some|more) (info|information)`,
        `I want to learn more`, `Tell me more`,
        `tell me more about (the|) current program`,
        p => {
            p.play("We can provide you the following information about the " + p.type + " application process, requirements, timelines, advising, perfomance evaluation, financial aid and appeals")
        }
    );

    follow(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (your|) (the|) (degree|) $(R~ ${INFO_TYPES})`,
        p => {
            if (p.R.value !== null) {
                p.R.label = test_info(p.R.label)
                var keys = Object.keys(programs[p.type])
                if (keys.indexOf(p.R.label) === -1) {
                    displayPage(p, "contacts.png")
                    p.play("please contact one of our advisors for more (info|information)")
                    return
                }
                var answer = programs[p.type][p.R.label][Math.floor(Math.random() * programs[p.type][p.R.label].length)];
                var img = p.R.label + "_IMG"
                displayPage(p, programs[p.type][img]);
                p.play(answer)
            }
            else {
                p.play("I didn't (get|understand) what you meant", "I don't understand")
            }
        })

    follow(`what is the deadline`,
        `deadline`,
        `(show me|show me more|tell me more about) (program|programs|) deadline`,
        p=>{

            displayPage(p, "phd/admission.png")
            p.play("Deadline for the application is December 15th")

        })

    follow(`What are the differences in the (admission|application) processes for the (M.S.|ms|master|masters|Master of Science) (degree|) (program|) and the (Ph.D.|phd|doctor of philosophy) (degree|) (program|)`,
        reply(`None.  All applications, whether the application indicates the M.S. degree program or the Ph.D. degree program, are considered in a single pool for determining admissions.There are not different criteria used to determine admission for M.S. versus Ph.D. applicants`))

    follow(`If I apply for the (PHD|phd|doctor of philosophy) (degree|) (program|) and I am not recommended for admission, can I ask to be considered for  (M.S.|ms|master|masters|Master of Science) (degree|) (program|) (admission|application)?`,
        reply(`All decisions are final.  All applicants are reviewed in a single pool. Admission decisions are made without regard to degree goal.`))

    follow(`How are (admissions|application) decisions made`,
        reply(`All applications are reviewed by the Computer Sciences Graduate Admissions Committee. After careful review, the Graduate Admissions Committee recommends admission for the applicants they feel are most qualified for our program. The selection is made without regard to the degree goal (M.S. or Ph.D.), area of interest or financial need.`))

    follow(`When are admissions decisions made?`,
        reply(`Admissions decisions are made by early March, will have time until April 15 to decide whether to accept our offer.`))

    follow(`How are applicants notified`,
        reply(`All applicants, regardless of whether they are recommended for admission, are notified of the admission decision by email. Students who have been recommended for admission will also be sent paper copies of admission documents via post and will have until April 15 to decide whether to accept our offer.`))

    follow(`Do you have a waiting list?`,
        reply(`All offers are made at the same time to the applicants we feel are the most qualified for our program. All decisions are final.`))

    follow(`What are my chances of being admitted to your department`,
        reply(`Admission is based on many factors. Those factors include your academic record, GRE test scores, letters of recommendation and statement of purpose. International students must meet or exceed the minimum (TOEFL|toe full) requirements to be qualified for admission. (We also consider your work experience, research experience, publications and any additional information submitted on your online application|)`))

    follow(`(How|) can i evaluate my chances of successful (application|admission)`,`(How|) can i evaluate my chances of successfully (applied|admited)`,
        reply(`We cannot pre-evaluate your chances of admission before you apply.`))

    follow(`How can I add a second major in (CS|computer science)?`,
        p=>{
            displayPage(p, "pgd/second_major.png")
            p.play(`find information on adding a second master's here.`)
        })

    follow(`I'm currently enrolled in a different graduate program at UW-Madison. Can I change my major to a (Ph.D.|phd|doctor of philosophy) (degree|) (program|) in (CS|computer science)`,
        `Can I change my major to a (Ph.D.|phd|doctor of philosophy) (degree|) (program|) in (CS|computer science)`,
        p=> {
            displayPage(p, "pgd/changing_major.png")
            p.play("Find information on changing your major to the CS Ph.D. program here.")
        })

    follow(`Am I required to take the Subject (GRE|Graduate Record Examination) test (also known as the Advanced GRE|also known as the Advance Graduate Record Examination|)`,
        reply(`No.  We do not use it in evaluating applicants.`))

    follow(`How late can I take (GRE|Graduate Record Examination) general test`,
        reply(`Please plan to take the GRE general test by December 1 to ensure that your test scores are received by the time applications are reviewed in January. Missing test scores will affect your chances of admission.`))

    follow(`I am not sure my (GRE|Graduate Record Examination) score is high enough to be competitive.  Should I take the (GRE|Graduate Record Examination) again`,
        reply(`(Based on our experience, |)there is seldom a major change to GRE scores when retaken unless a significant amount of time has elapsed and a significant amount of effort has been made to improve knowledge, skills and test-taking strategies.`))

    follow(`Which (GRE|Graduate Record Examination) score will be considered if I take the test more than once`,
        reply(`The Educational Testing Service now allows applicants to choose which scores to report to an institution. The admissions committee will have access to any GRE scores that ETS sends.`))

    follow(`How recent do my (GRE|Graduate Record Examination) or (TOEFL|toe full) scores need to be`,
        reply(`GRE scores should be within five years of the scheduled first day of classes in the term for which you are admitted. toe full scores should be be within two years of the first day of classes in the term for which you are admitted.`))

    follow(`Is the (TOEFL|toe full) required for international students`,
        reply(`Yes. UW-Madison requires that all international students take the toe full exam unless they are exempt. The IELTS exam is an acceptable substitute.`))


    follow(`What is acceptable evidence of instruction in English at a non-U.S. institution`,
        reply(`Your school transcripts, if they mention the language of instruction, or a letter from a school official is needed.`))


    follow(`What is the role of the personal statement in evaluating my application`,
        reply(`The statement is your opportunity to tell us about your goals in pursuing graduate studies and about your specific interest areas. It helps us to understand the mix of interests in our pool of applicants and to learn more about your preparation for graduate work`))

    follow(`Do you have any suggestions for what I should write personal statement`,
        reply(`Avoid overly enthusiastic, very general statements that give us little insight into your accomplishments or motivation. A concise statement about your experience and future goals that is backed by other elements of the application is most effective.`))

    follow(`How important are the recommendation letters, and what should they contain?`,
        reply(`Avoid overly enthusiastic, very general statements that give us little insight into your accomplishments or motivation. A concise statement about your experience and future goals that is backed by other elements of the application is most effective.`))

    follow(`Do you have any suggestions for what I should write personal statement`,
        reply(`Avoid overly enthusiastic, very general statements that give us little insight into your accomplishments or motivation. A concise statement about your experience and future goals that is backed by other elements of the application is most effective.`))

    follow(`I have been working in industry for a number of years. Can I use work references instead of academic references`, `Can I use work references instead of academic references`,
        reply(`If you have been out of school for a few years and your work has been relevant to graduate study, you may  want to include a recommendation from a supervisor.  Because you are applying for graduate school, academic recommendations may be more helpful to us when evaluating your application.`))

    follow(`Can my recommenders mail their recommendations`,
        reply(`No.  We only accept recommendations through the Graduate School's secure, online recommendation system.  No paper recommendations are accepted.`))

    follow(`Can my recommenders submit their recommendations after December 15`,
        reply(`Yes.  Please let your recommenders know that we need the recommendations by early January in order to review your application.`))

    follow(`Where can I get information about the course requirements for the M.S. and Ph.D. degrees`,
        p=>{
            displayPage(p, "phd/timeline.png")
            p.play(`Consult the Computer Sciences Graduate Guidebook.`)
        })

    follow(`Where can I get information about the UW-Madison Graduate School, which oversees all graduate programs at the University?`,
        p=>{
            displayPage(p, "phd/guidebook.png")
            p.play(`ou can get information on the Graduate School website, which contains useful information for prospective graduate students as well as current graduate students in all departments.`)
        })

    follow(`My undergraduate degree is only a three-year degree; am I eligible to apply for your (M.S.|ms|master|masters|Master of Science) (degree|) (program|) and the (Ph.D.|phd|doctor of philosophy) (degree|) (program|)`,
        reply(`A four-year bachelor's degree or equivalent is required.  Some institutions offer three-year degrees that are equivalent  to a U.S. four-year bachelor's degree.  For countries where a three-year bachelor's is not considered equivalent to U.S. bachelor's degree, the Graduate School will accept a three-year bachelor's degree plus a master's degree from your home country.`))

    follow(`I already have an (M.S.|ms|master|masters|Master of Science) (degree|) from another institution outside the United States. Am I eligible to apply for an (M.S.|ms|master|masters|Master of Science) (degree|) (program|in your program|)`,
        reply(`Yes.`))

    follow(`My undergraduate degree was in a field other than computer sciences. Am I eligible to apply for your graduate (M.S.|ms|master|masters|Master of Science) (degree|) (program|) and the (Ph.D.|phd|doctor of philosophy) (degree|) (program|)`,
        reply(`Yes, as long as you have sufficient preparation to thrive in a rigorous graduate CS program. Courses in college-level math like calculus and computer programming are highly recommended.  Although an undergradaute degree in CS is not required, it is important to have documented course work or skills that indicate your capability to pursue a graduate degree in CS.`))

    follow(`Can I update my application`,
        reply(`Yes. You can update the uploaded items in your application by replacing the upload with another upload. For example if you recieve an additonal honor or have a paper accepted for a research journal, you can make a new version of your resume or cv to replace the old version. You can log back into your application to replace the original resume or cv.`))

})

let pmp = context(()=> {
    title("pmp")

    follow(`(show me|show me more|tell me more about (program|programs|) $(T~ ${INFO_TYPES}) (degree|)`,`$(T~ ${INFO_TYPES})`, `what is (the|) $(T~ ${INFO_TYPES})`,
        p => {
            if (p.T.label === null){
                p.play("Ups, I don't understand what you mean")
                return
            }
            p.T.label = test_info(p.T.label)
            var keys = Object.keys(programs[p.type])
            if (keys.indexOf(p.T.label)===-1){
                displayPage(p,"contacts.png")
                p.play ("please contact one of our advisors for more info(rmation|)")
                return
            }
            var answer = programs[p.type][p.T.label][Math.floor(Math.random()*programs[p.type][p.T.label].length)];
            var img = p.T.label + "_IMG"
            displayPage(p, programs[p.type][img]);
            p.play(answer)
            return
        }
    )
    follow(`what is (the|) current program`,
        `descripe me (the|) current program`,
        p=> {
            var answer = programs[p.type].information[Math.floor(Math.random() * programs[p.type].information.length)];
            displayPage(p, programs[p.type].information_IMG);
            p.play(answer)
        })

    follow(`Get (some|more) (info|information)`,
        `I want to learn more`, `Tell me more`,
        `tell me more about (the|) current program`,
        p => {
            p.play("We can provide you information about the " + "(professional masters program|PMP)" + "   application process, requirements, timelines and faq")

        });


    follow(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (the|) $(R~ ${INFO_TYPES})`,
        p => {
            if (p.R.value !== null) {
                p.R.label = test_info(p.R.label)
                var keys = Object.keys(programs[p.type])
                if (keys.indexOf(p.R.label) === -1) {
                    displayPage(p, "contacts.png")
                    p.play("please contact one of our advisors for more (info|information)")
                    return
                }
                var answer = programs[p.type][p.R.label][Math.floor(Math.random() * programs[p.type][p.R.label].length)];
                var img = p.R.label + "_IMG"
                displayPage(p, programs[p.type][img]);
                p.play(answer)
            }
            else {
                p.play("I didn't (get|understand) what you meant", "I don't understand")
            }
        })

    follow(`what is the deadline`,
        `deadline`,
        `(show me|show me more|tell me more about (program|programs|) deadline`,
        p=>{

            displayPage(p, "graduate/pmp.png")
            p.play("Deadline for the application is Marth 15th")

        })


    follow(`How many credits do (i need|the student need) to complete (pmp|professional master program)`,`How many credits do (i need|the student need) to (obtain|receive) (ms degree|master of science degree) in the (pmp|professional master program)`,
        reply(`To obtain the M.S. degree, students in the PMP should complete at least 30 credits, with an average grade of at least B`))

    follow(`Can (i |the student|student) apply (his|her|my) credits from prior courses to meet the (pmp|professional master program) requirements`, `to complete (pmp|professional master program)`,`Can (i |the student|student) apply (his|her|my) credits from prior courses to (receive|get) (the|) pmp|professional master program) degree`,
        reply(`A student may apply up to 14 credits of prior course work to meet PMP requirements and must complete at least 16 credits in the PMP (to meet the current residency requirement).`))

    follow(`Can (the|) student (enrolled in|studing|working on) (pmp|professional master program) (degree|) enroll in other departments`,
        reply(`Students enrolled in the Professional Masters Program are not allowed to enroll in courses in other departments`))

    follow(`What is the difference between the (Professional Masters Program|PMP) and the traditional (M.S.|masters) Program`,
        reply(`(Admission|application) to (the traditiona|) (M.S. Program|masters program) is highly competitive and evaluates applicants based primarily on their potential to do research and complete a Ph.D. In contrast, the (Professional Master's Program|PMP) is a terminal M.S. program PMP admission process evaluates applicants primarily on their potential to complete a challenging M.S. program at UW-Madison, not on their potential to do research leading to a Ph.D. degree`))

    follow(`What if once in the (Professional Masters Program|PMP) program, I change my mind and want to work toward a Ph.D. degree`,
        p=> {
            displayPage(p, "pmp_to_phd.png")
            p.play(`You would need to apply to the academic track in computer sciences in order to undertake a Ph.D.  Read the instructions on how to do this.`)
        })

    follow(`What kind of (ms|master|master of science) degree would (PMP|Professional Masters Program) participant receive?`,
        `What kind of (ms|master|master of science) degree (i|student) would receive after (PMP|Professional Masters Program)`,
        reply(`PMP graduates will receive the exact same M.S. degree that students in the traditional M.S. program receive`))

    follow(`Do (you|university|university of madison) provide he program (long distance|online) (programs|degrees)`,
        reply(`At the moment, our PMP does not yet support this option. You would need to be present on the Madison campus. `))

    follow(`I (study|am studying) (at|on) (PMP|PMP program|PMP degree|Professional Masters Program). May I apply for financial aid`,
        reply(`Direct financial support from the CS Professional Master's Program is not available. However, students can contact the Office of Student Financial Aid to discuss federal loan programs and other lending opportunities.`))

    follow(`Can I apply to both the traditional (M.S.|Ph.D.) program and the (PMP|Professional Masters Program)?`,
        reply(`Yes. If you are admitted into both programs, you may decide which one to attend.`))

    follow(`Can I do an internship during the (PMP|PMP program|PMP degree|Professional Masters Program)?`,
        reply(`Yes. Our students in the traditional M.S./Ph.D. program have often applied for and completed internships at numerous high-tech companies such as Google, Apple, Facebook, and Microsoft`))


    follow(`How much does the (PMP|PMP program|PMP degree|Professional Masters Program) cost?`,
        p=> {
            displayPage(p, "phd/fees.png")
            p.play(`Costs are listed on the Tuition and Fees page of the Office of the Registrar. For Academic Year 2018-2019, tuition is $796.10 per credit for Wisconsin residents and $1,629.03 per credit for non-residents (including international students).`)
        })

    follow('What should be in my personal statement for (the|) (PMP|PMP program|PMP degree|Professional Masters Program)',
        reply('We use the personal statement to better understand your background in computer sciences, and to evaluate your potential to complete the Professional Master\'s Program at UW-Madison. Any information you provide to help with the above goals is appreciated.'))

    follow(`What else should I know about GRE, (TOEFL|toe full), recommendation letters or other application requirements for (PMP|PMP program|PMP degree|Professional Masters Program)?`,
        p=> {
            displayPage("phd/graduate_faq.png")
            p.play(`See frequently asked questions about these issues in the FAQ for the traditional M.S/Ph.D. program.`)
        })

    follow(`Where can I find more information about the PMP?`,
        p=> {
            displayPage(p, "graduate/pmp.png")
            p.play(`You can find out more about the program's degree requirements and curriculum as well as the application process by reviewing our program webpages.`)
        })

    follow(`Whom should I contact if I still have questions?`,
        p=> {
            displayPage("graduate/pmp_coordinator.png")
            p.play(`We welcome further questions. Please contact our Professional Programs Coordinator Stacey Sykes`)
        })



/////////////////////

    fallback('I don\'t understand this command yet, maybe you want (to see|to know more about) our (traditional graduate programs|PMP programs|Mad UX program)',
        'I\'m not clear about what you mean, maybe you want to know (requirement|application process|something else) about one of our graduate programs')



})

let pccp = context(()=> {
    title("pccp")

    follow(`(show me|show me more|tell me more about) (program|programs|) $(T~ ${INFO_TYPES}) (degree|)`,`$(T~ ${INFO_TYPES})`, `what is (the|) $(T~ ${INFO_TYPES})`,
        p => {
            if (p.T.label === null){
                p.play("Ups, I don't understand what you mean")
                return
            }
            p.T.label = test_info(p.T.label)
            var keys = Object.keys(programs[p.type])
            if (keys.indexOf(p.T.label)===-1){
                displayPage(p,"contacts.png")
                p.play ("please contact one of our advisors for more information")
                return
            }
            var answer = programs[p.type][p.T.label][Math.floor(Math.random()*programs[p.type][p.T.label].length)];
            var img = p.T.label + "_IMG"
            displayPage(p, programs[p.type][img]);
            p.play(answer)
            return
        }
    )
    follow(`what is (the|) current program`, `descripe me (the|) current program`,
        p=> {
            var answer = programs[p.type].information[Math.floor(Math.random() * programs[p.type].information.length)];
            displayPage(p, programs[p.type].information_IMG);
            p.play(answer)
        })

    follow(`Get (some|more) (info|information)`, `I want to learn more`, `Tell me more`, `tell me more about (the|) current program`,
        p => {
            p.play("We can provide you information about the " + p.type+ "   application process, requirements, timelines, faq and information for international students")

        });

    follow(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (the|) $(R~ ${INFO_TYPES})`,
        p => {
            if (p.R.value !== null) {
                p.R.label = test_info(p.R.label)
                var keys = Object.keys(programs[p.type])
                if (keys.indexOf(p.R.label) === -1) {
                    displayPage(p, "contacts.png")
                    p.play("please contact one of our advisors for more (info|information)")
                    return
                }
                var answer = programs[p.type][p.R.label][Math.floor(Math.random() * programs[p.type][p.R.label].length)];
                var img = p.R.label + "_IMG"
                displayPage(p, programs[p.type][img]);
                p.play(answer)
            }
            else {
                p.play("I didn't (get|understand) what you meant", "I don't understand")
            }
        })

    follow(`what is the (graduate program|) deadline`,
        `deadline`,
        `(show me|show me more|tell me more about (the graduate|) (program|programs|) deadline`,

        p=>{

            displayPage(p, "graduate/pccp_application.png")
            p.play("The application deadline to be considered for Fall or Summer term is April 15. The application deadline to be considered for Spring term is November 15")

        })

    follow(`Who is this program for`,
        reply(`If you have obtained a bachelor's degree in a field other than computer sciences, but now want to learn the fundamentals of computer sciences so that you can apply for software developer jobs, the new Professional Capstone Certificate Program is for you.`))

    follow(`How is this program different from an undergraduate or graduate program?`,
        reply(`This program is not designed to provide you with an undergraduate or graduate degree. Instead, our students earn a certificate in computer sciences, and gain the training necessary to pursue a career in software development.`))

    follow(`Can I apply to both the Professional Capstone Certificate Program and the (Professional Master's Program|PMP)`,
        reply(`You cannot enroll in the Professional Capstone Certificate Program and the Professional Master's Program at the same time. Instead, a student who is about to finish the Professional Capstone Certificate Program can formally apply to the Professional Master's Program (and complete the Master's Program in an additional one to one-and-a-half years)`))

    follow(`Can international students apply?`,
        p=>{
            displayPage(p, "graduate/pccp_international.png")
            p.play(`We are now admitting a small pool of international students into the Professional Capstone Certificate Program as a pilot program.`)
        })


    follow(`How long does the program take?`,
        reply(`This depends on whether you have had an introductory background of computer sciences (equivalent to CS 200/CS 301 and CS 300 at UW-Madison). If yes, you will only have to take four courses. Otherwise, you will also have to take CS 200 OR CS 301, AND CS 300. `))

    follow(`Can I attend the program part-time or full-time?`,
        reply(`Yes. You can attend either part-time or full-time. If you attend full time, you can complete the program even faster.`))

    follow(`What is the cost?`,
        reply(`Starting with the fall 2015 semester, the Professional Capstone Certificate Program will charge $800 per credit  So a student taking a 3-credit course  would pay $2,400 plus fees (approximately $225 total).`))

    follow(`Is financial aid available?`,
        p=>{
            displayPage(p, "graduate/pccp_aid.png")
            p.play(`Please contact the Office of Student Financial Aid to explore the options. Students should also explore the possibility of seeking sponsorship through their current employer (a majority of the current students in our program receive such sponsorship). `)
        })

    follow(`Can I continue in the (M.S.|ms|master|masters|Master of Science) (degree|) (program|) or the (Ph.D.|phd|doctor of philosophy) (degree|) (program|) after completing the (Professional Capstone Certificate Program|PCP)`,
        reply(`Students interested in either of the CS Graduate Programs would need to apply and be considered within the context of the rest of the applicant pool.`))

    follow(`How many courses will I need to take`,
        p=>{
            displayPage(p, "graduate/pccp_req.png")
            p.play(`Once admitted to the certificate program, a student must complete four courses with at least a grade of C per course. Each course must also be completed with at least three credits, for a total of twelve credits.`)

        })

    follow(`What are the course offerings each term`,
        p=>{
            displayPage(p, "graduate/pccp_req.png")
            p.play(`Courses which count towards the Capstone Certificate are listed on our Requirements and Curriculum webpage.`)})

    follow(`Can I transfer prior coursework into the Professional Capstone Certificate Program`,
        reply(`Credits from prior academic coursework, either at UW-Madison or from another university, cannot be applied toward the Professional Capstone Certificate Program. All twelve required credits must be earned by taking courses at UW-Madison while being enrolled in the PCP.`))

    follow(`Will I be able to use the credits I earn in this program to receive an M.S. degree?`,
        reply(`After completing the Professional Capstone Certificate Program, you have the option to continue (part-time or full-time) in our Professional Master's Program (PMP).  You can transfer certain courses, and can obtain a M.S. degree in Computer Sciences in another one to one-and-a-half years. `))

    follow(`Are there any prerequisites for the program`,
        reply(`If you already have an introductory background in Computer Sciences that is equivalent to CS 200/CS 301 and CS 300, you will be admitted to the Professional Capstone Certificate Program and will take four courses to complete the certificate`))

    follow(`Can I satisfy the prerequisites with prior coursework`,
        reply(`The equivalent of CS 200/CS 301 and CS 300, if taken elsewhere, will be considered for fulfilling the Professional Capstone Certificate Program course prerequisites. In addition, any successful completion of CS 300 at UW-Madison will also count as a completion of CS 200/CS 301.`))

    follow(`How do I apply?`,
        reply(`You will apply with DCS (Division of Continuing Studies) For more information, please see the Application Process section.`))

    follow(`Will I be able to use the credits I earn in this program to receive an M.S. degree?`,
        reply(`After completing the Professional Capstone Certificate Program, you have the option to continue (part-time or full-time) in our Professional Master's Program (PMP).  You can transfer certain courses, and can obtain a M.S. degree in Computer Sciences in another one to one-and-a-half years. `))

    follow(`Will I be able to use the credits I earn in this program to receive an M.S. degree?`,
        reply(`After completing the Professional Capstone Certificate Program, you have the option to continue (part-time or full-time) in our Professional Master's Program (PMP).  You can transfer certain courses, and can obtain a M.S. degree in Computer Sciences in another one to one-and-a-half years. `))

})

let minor = context(()=> {
    title("minor")

    follow(`(show me|show me more|tell me more about) (program|programs|) $(T~ ${INFO_TYPES}) (degree|)`,
        `$(T~ ${INFO_TYPES})`,
        `what is (the|) $(T~ ${INFO_TYPES})`,
        p => {
            if (p.T.label === null){
                p.play("Ups, I don't understand what you mean")
                return
            }
            p.T.label = test_info(p.T.label)
            var keys = Object.keys(programs[p.type])
            if (keys.indexOf(p.T.label)===-1){
                displayPage(p,"contacts.png")
                p.play ("please contact one of our advisors for more info(rmation|)")
                return
            }
            var answer = programs[p.type][p.T.label][Math.floor(Math.random()*programs[p.type][p.T.label].length)];
            var img = p.T.label + "_IMG"
            displayPage(p, programs[p.type][img]);
            p.play(answer)
            return
        }
    )
    follow(`what is (the|) current program`, `descripe me (the|) current program`,
        p=> {
            var answer = programs[p.type].information[Math.floor(Math.random() * programs[p.type].information.length)];
            displayPage(p, programs[p.type].information_IMG);
            p.play(answer)
        })

    follow(`Get (some|more) (info|information)`,
        `I want to learn more`, `Tell me more`,
        `tell me more about (the|) current program`,
        p => {

            p.play("We can provide you information about the " + p.type+ "   application process, requirements, timelines")

        });


    follow(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (the|) $(R~ ${INFO_TYPES})`,
        p => {
            if (p.R.value !== null) {
                p.R.label = test_info(p.R.label)
                var keys = Object.keys(programs[p.type])
                if (keys.indexOf(p.R.label) === -1) {
                    displayPage(p, "contacts.png")
                    p.play("please contact one of our advisors for more (info|information)")
                    return
                }
                var answer = programs[p.type][p.R.label][Math.floor(Math.random() * programs[p.type][p.R.label].length)];
                var img = p.R.label + "_IMG"
                displayPage(p, programs[p.type][img]);
                p.play(answer)
            }
            else {
                p.play("I didn't (get|understand) what you meant", "I don't understand")
            }
        })

    follow(`what is the deadline`, `deadline`,
        `(show me|show me more|tell me more about) (the|) (program|programs|) deadline`,
        p=>{

            displayPage(p, "staff/Angela_Thorp.png")
            p.play("please contact our graduate student coordinator Angela Thorp for more information")
        })
})

let madux = context(()=> {
    title("madux")

    follow(`(show me|show me more|tell me more about) (program|programs|) $(T~ ${INFO_TYPES}) (degree|)`,
        `$(T~ ${INFO_TYPES})`, `what is (the|) $(T~ ${INFO_TYPES})`,
        p => {
            if (p.T.label === null){
                p.play("Ups, I don't understand what you mean")
                return
            }
            p.T.label = test_info(p.T.label)
            var keys = Object.keys(programs[p.type])
            if (keys.indexOf(p.T.label)===-1){
                displayPage(p,"contacts.png")
                p.play ("please contact one of our advisors for more info(rmation|)")
                return
            }
            var answer = programs[p.type][p.T.label][Math.floor(Math.random()*programs[p.type][p.T.label].length)];
            var img = p.T.label + "_IMG"
            displayPage(p, programs[p.type][img]);
            p.play(answer)
            return
        }
    )
    follow(`what is (the|) current program`,
        `descripe me (the|) current program`,
        p=> {
            var answer = programs[p.type].information[Math.floor(Math.random() * programs[p.type].information.length)];
            displayPage(p, programs[p.type].information_IMG);
            p.play(answer)
        })

    follow(`Get (some|more) (info|information)`,
        `Tell me more`, `I want to learn more`,
        `tell me more about (the|) current program`,
        p => {
            p.play("We can provide you information about the " + p.type+ "   application process, requirements, timelines")

        });


    follow(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (the|) $(R~ ${INFO_TYPES})`,
        p => {
            if (p.R.value !== null) {
                p.R.label = test_info(p.R.label)
                var keys = Object.keys(programs[p.type])
                if (keys.indexOf(p.R.label) === -1) {
                    displayPage(p, "contacts.png")
                    p.play("please contact one of our advisors for more (info|information)")
                    return
                }
                var answer = programs[p.type][p.R.label][Math.floor(Math.random() * programs[p.type][p.R.label].length)];
                var img = p.R.label + "_IMG"
                displayPage(p, programs[p.type][img]);
                p.play(answer)
            }
            else {
                p.play("I didn't (get|understand) what you meant", "I don't understand")
            }
        })

    follow(`what is the deadline`, `deadline`,`(show me|show me more|tell me more about) (program|programs|) deadline`,
        p=>{
            //displayPage(p, "contacts.png")
            p.play("please contact us at userexperience@ischool.wisc.edu")
        })
})


//Different programs intents
intent(`(Show me|What are) (your|the|) (all|) (available|current|) graduate programs (in the CS department|in the computer science department|do you have|)`,
    `(Do you have|Any|Are there|Whats the) (a|) (computer science|CS|) graduate school program(s|)`,
    `What (graduate|) programs do you (have|propose)?`,
    p => {
        displayPage(p,"graduate/grad_programs.png");
        p.play(`The (Computer Science|CS) Department offers two traditional graduate programs (Masters|MS|Masters of Science) and PHD programs and a new Professional Masterâ€™s Program (or PMP|)`)
        p.play(`In addition we also offer two non degree programs - Graduate Minor Programs, Professional Capstone Certificate Programs`)
        p.play(`Finally, we will offer  cross departmental, non-degree User Experience Design Capstone Certificate Program (or, Mad UX)`)
        p.play(`About what program do you want to know more?`);
    });


intent(`(Whats|Tell me|More information|what is|show|show me) (about|on|) (the|) $(T~ ${PROG_TYPES})`,
    `$(T~ ${PROG_TYPES})`, `Give me (more|) (the|) (details|information) about (the|) $(T~ ${PROG_TYPES})`,
    p => {
        if (p.T.label===null){
            p.play("I didn't (get|understand) what you meant", "I don't understand")
        }
        p.T.label = test_type(p.T.label)
        var answer = programs[p.T.label].information[Math.floor(Math.random()*programs[p.T.label].information.length)];
        displayPage(p, programs[p.T.label].information_IMG);
        p.play(answer)
        if (p.T.label==="MS" || p.T.label==="PHD") {
            p.then(phd, {type:p.T.label})
        }

        else if (p.T.label==="PMP") {
            p.then(pmp, {type:p.T.label})
        }

        else if (p.T.label==="PCCP") {
            p.then(pccp, {type:p.T.label})
        }
        else if (p.T.label==="MINOR"){
            p.then(minor, {type:p.T.label})
        }
        else {
            p.then(madux, {type:p.T.label})
        }
    }
);


///////////////////////////////////////////////////////////////////
//Specific intents

intent(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (the|) $(T~ ${PROG_TYPES}) $(R~ ${INFO_TYPES})`,
    `(Whats|Tell me|More information|what is|show|show me|What is|What are) (the|) $(R~ ${INFO_TYPES}) of $(T~ ${PROG_TYPES})`,
    p => {
        if (p.R.value!==null && p.T.label!==null) {
            p.T.label = test_type(p.T.label)
            p.R.label = test_info(p.R.label)
            var keys = Object.keys(programs[p.T.label])
            if (keys.indexOf(p.R.label)===-1){
                displayPage(p, "contacts.png")
                p.play ("please contact one of our advisors for more info(rmation|)")
                return
            }
            var answer = programs[p.T.label][p.R.label][Math.floor(Math.random()*programs[p.T.label][p.R.label].length)];
            var img = p.R.label + "_IMG"
            displayPage(p, programs[p.T.label][img]);
            p.play(answer)
            if (p.T.label==="PHD" || p.T.label==="MS") {
                p.then(phd, {type: p.T.label})
            }
            else if (p.T.label==="PMP") {
                p.then(pmp, {type: p.T.label})
            }
            else if (p.T.label==="MINOR") {
                p.then(minor, {type: p.T.label})
            }
            else if (p.T.label==="MUX") {
                p.then(madux, {type: p.T.label})
            }
            else if (p.T.label==="PCCP") {
                p.then(pccp, {type: p.T.label})
            }
        }
        else{
            p.play("I didn't (get|understand) what you meant", "I don't understand")
        }
    });


intent(`What is the deadline for (the|) (traditional|) (MS or PHD|MS|PHD|Masters|doctor of philosophy|graduate) applications`,
    `What's the (MS or PHD|MS|PHD|Masters|doctor of philosophy|graduate) (application|) deadline`,
    p=> {
        // var today = new Date();
        // var dd = today.getDate()
        // var dif = 15 + 30 - dd + 61
        displayPage(p, "phd/admission.png")
        p.play("The (deadline for the application|application deadline) is December 15th")
        p.then(phd, {type:"PHD"})
    })

intent(`What is the deadline for (the|) (Professional Masters Program|PMP) applications`,
    `What's the (PMP|Professional Masters Program) (application|) deadline`,
    p=> {
        // var today = new Date();
        // var dd = today.getDate()
        // var dif = 15 + 30 - dd + 61
        displayPage(p, "phd/admission.png")
        p.play("The (deadline for the application|application deadline) is March 15th")
        p.then(pmp, {type:"PMP"})
    })



//functions
function test_type(type) {
    if (type === "ms" || type === "masters" || type === "master of science"|| type === "master program"|| type === "masters program") {
        return "MS"
    }
    else if (type === "professional masters program" || type === "pmp"|| type === "pmp program") {
        return "PMP"
    }
    else if (type === "phd" || type === "doctor of philosophy"|| type === "ph.d program"|| type === "phd program"|| type === "ph.d") {
        return "PHD"
    }

    else if (type === "graduate phd minor" || type === "graduate ph.d minor"|| type === "minor"|| type === "graduate minor" || type==="graduate minor program") {
        return "MINOR"
    }

    else if (type === "professional capstone certificate program" || type === "professional capstone certificate") {
        return "PCCP"
    }

    else if (type === "user experience design capstone certificate program" || type === "mad ux"|| type === "mad ux program"|| type === "user experience design capstone program") {
        return "UX"
    }

    else if (type === null) {
        return "null"
    }

    else {
        return type
    }
}


function test_info(type) {
    if (type === "application process" || type === "admission process" || type === "application"|| type === "admission"|| type === "admission requirements"|| type === "application requirements") {
        return "application_requirements"
    }
    else if (type === "timelines" ||type === "timeline") {
        return "timeline"
    }
    else if (type === "advising") {
        return "advising"
    }

    else if (type === "performance evaluation" || type === "performance") {
        return "performance"
    }

    else if (type === "financial aid" || type === "aid"|| type ==="financial support") {
        return "aid"
    }

    else if (type === "appeals" || type === "grievances"|| type ==="grienvances and appeals") {
        return "appeals"
    }


    else if (type === "faq" || type === "frequently asked questions") {
        return "faq"
    }

    else if (type === "internations students") {
        return "international"
    }

    else if (type === "requirements") {
        return "degree_requirements"
    }

    else if (type === null) {
        return "null"
    }

    else {
        return -1
    }
}


function displayPage(p, pageImg){
    p.play({
        data: {url:pageImg},
        embeddedPage:true,
        command:"showPage",
        page:"wisc_university.html"
    });
}


//////////////////////////////////////////////////////////////////////////////////
//General intents

intent(`(Whats|Tell me|More information|what is|show|show me) (about||) (the|) (CS department|CS|Department of computer science)`,

    p=>{
        displayPage(p, "about.png")
        p.play("It is one of the oldest and most respected computer science departments in the United States, recognized as having the world's leading research groups in computer architecture, database systems, distributed and grid computing, and nonlinear optimization, among others")
    }
)

intent(`Where is it located?`, `Where is (the|) (CS department|CS|Department of computer science) located`, `What is the location (CS department|CS|Department of computer science)`,
    p=>{
        displayPage(p, "location.png")
        p.play("The Computer Science and Statistics Building is located at 1210 West Dayton Street, Madison, Wisconsin")
    }
)

intent(`Is there a number I can call?`, `What is (the|) (telephone|) number of (the|) (CS department|CS|Department of computer science)`,

    p=>{
        displayPage(p, "location.png")
        p.play("You can call the CS department at 608-262-1204. You can also send us an email at feedback@cs.wisc.edu")
    }
)

intent(`How can I get in touch with someone?`, `How can I get in touch with someone from (CS department|CS|Department of computer science)?`,
    p=>{
        displayPage(p, "contacts.png")
        p.play("You can contact any of our frequently contacted people")
    }
)

intent(`What events are there?`, `What are the events of (the|) (CS department|CS|Department of computer science)?`,
    p=>{
        displayPage(p, "events.png")
        p.play("Here are the upcoming Computer Science department events.")
    }
)


intent(`Do you have a newsletter?`, `Is there a newslette of (the|) (CS department|CS|Department of computer science)?`,
    p=>{
        displayPage(p, "newsletter.png")
        p.play("The department Newsletter Badger Bytes is sent quarterly to Alumni and friends of the CS Department.")
    }
)

intent("Are there any articles to learn more?", `Are there any articles of (the|) (CS department|CS|Department of computer science)?`,
    p=>{
        displayPage(p, "articles.png")
        p.play("Here are feature articles from the Computer Science Department.")
    }
)

intent(`What's the recent news (on|of) (the|) (CS department|CS|Department of computer science)?`,`(What's|What about) (the|) recent news`,
    p=>{
        displayPage(p, "news.png")
        p.play("Here's the recent news from the Computer Science Department.")
    }
)

intent(`What open positions are there?`, `What open positions are in (the|) (CS department|CS|Department of computer science)?`,
    p=>{
        displayPage(p, "employment.png")
        p.play("Here's information on open positions in the Computer Science Department.")
    }
)

//Some pages
intent(`(open|show|show me|take me to the) research (page|screen)`,
    p => {
        displayPage(p,"research.png");
        p.play(`Here is the "Research" (page|screen)`);
    });

intent(`(open|show|show me|take me to the) about (page|screen)`,
    p => {
        displayPage(p,"about.png");
        p.play(`Here is the "Connect" is the "About" (page|screen)`);
    });

intent(`(open|show|show me|take me to the) connect (page|screen)`,
    p => {
        displayPage(p,"connect.png");
        p.play(`Here is the "Connect" (page|screen)`);
    });

intent(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (the|) (graduate|)fellowships`, `(graduate|) fellowships`,
    p=>{
        displayPage(p, "graduate/fellowships.png")
        p.play(`Annually, the University of Wisconsin-Madison Department of Computer Sciences awards up to four graduate fellowships providing nine months of support to outstanding students pursuing the doctoral degree.`)

    })

intent(`(Whats|Tell me|More information|what is|show|show me|What is|What are) (about|on|) (the|) for the incoming students`, `for the incoming students`,
    p=>{
        displayPage(p, "graduate/for_incoming_students.png")
        p.play(`Incoming Graduate Student Information: Fall 2018`)
    })