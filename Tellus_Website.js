// {Name: Tellus_Website}
// {Description: Gives details on Tellus and Tellus services including Tellus.Hub and Tellus.Connect RMS and Geo.}
// {Visibility: alan.app, synqq.com}


title("Website.")

recognitionHints("what is Tellus",
    "Tell me about Tellus",
    "Tellus Hub",
    "What is tellus connect geo",
    "what is PSAP",
    "what is tellus connect RMS")


intent("What can you do", "What are your capabilties",
    reply("(I can tell you about the solutions Tellus has to offer, as well as how, and why, Police, Fire agencies, and Medical would use Tellus. In addition, I can give you basic information, background, and use cases about Tellus and their products.|I can answer your basic questions about tell us, and I can also show you use cases! If you're interested in how tell us can be used with fire, medical, or police, I can tell you about that too!|I can tell you some basic info about Tellus as a company, as well as their products. I can also help point you in the right direction on the Tellus website!)"))

intent("(Open|Go to|Show me) (|the) $(w solutions|industry|get started|resource library|support|partner|about us|contact) (tab|page|)",
    reply("Opening the $(w) page..."))

intent("Why should (we|I) (use|be interested in) $(t Tellus|Fatpot)",
    reply("You should consider using $(t), because we offer the potential to help save lyves. Tellus Hub helps shorten the call processing, and call transfer time between P S A Peas by at least thirty seconds, and up to 2 minutes or more. Correct and appropriate help is dispatched faster, without the need to transfer the caller, or pick up the phone to call another P S A P"))

intent("Is $(t Tellus|Fatpot) (|currently) (in use|being used) (|anywhere)",
    reply("Yes! $(t) is being used in many instances across the United States. Would you like a specific example?",
        follow("(Yes|Yea|Sure|Okay|I guess)",
            reply("In the collaboration between Leander and Cedar Park Fire Departments, processing time to dispatch calls has been reduced by 29.2 percent")),
        follow("(No|Nah|No thank you)",
            reply("Okay!"))))

intent("(How|Why) does (|using) $(t Tellus|Fatpot) help (|responders)",
    reply("According to the Department of Homeland Security, 'Emergency responders need to share vital data, or voice information across disciplines and jurisdictions to successfully respond to day-to-day incidents and large-scale emergencies' "))

intent("(Show me|Tell me about|What's) the Boston Marathon Use Case",
    reply("The Brookline Command Post (C P), was monitoring the Marathon route that passed through Boston and Brookline. When the word was received at the Command Post, from the Command Center at MEMA headquarters, that there were reported possible explosions, perhaps in the area of the finish line, the C P was able to see all locations where Boston E M S and Fire were responding, through Tellus Hub, nearly 5 minutes before they were notified and confirmed of the actual location by phone or by radio. A white paper is available that describes this event in detail"))

intent("Is there more information on $(t Tellus|Fatpot)",
    reply("Yes! Please visit the Resource Library on the $(t Tellus|Fatpot) website to get more information"))

intent("(What is|Tell us about|Tell me more about) $(t Tellus|Fatpot)",
    reply("$(t) allows P S A Peas, public safety professionals, and first responders to share important info in real time, using a Bi-directional C A D interoperability platform, to help increase the potential of first responders to save lyves."))

intent("How (do|can) I (|get in) (contact|touch) (|with) $(t Tellus|Fatpot)",
    reply("You can either go to the Contact tab on the $(t) website, or call 8 0 1 3 9 7 3 9 7 3"))

intent("How much experience does $(t Tellus|Fatpot) have", "How long has $(t Tellus|Fatpot) been in business",
    reply("$(t) has been in business more than 15 years and has many deployments in some of the most challenging operational environments"))

intent("(Who is|Who's) the (President|head) of $(t Tellus|Fatpot)",
    reply("Jonathan Mitchell is the current president of $(t)"))

intent("Who (owns|runs) $(t Tellus|Fatpot)",
    reply("$(t) is wholly owned by Communications International"))

intent("What $(w Solutions|products) (does|do) $(t Tellus|Fatpot) offer",
    reply("$(t) offers $(w) such as Tellus Hub, Tellus Connect Geo, Tellus Connect RMS, and a mobile option."))

intent("What is $(q Tellus Hub|Fusion Platform)",
    reply("$(q) is the leading standards based, information-sharing solution in the Public Safety industry, for Computer Aided Dispatch interoperability with other systems."))

intent("What is $(q Tellus Connect Geo|Geo Fusion)",
    reply("$(q) is the premier, map centric integration technology for Public Safety. It delivers an integrated, map-based common operational picture of location-enabled information."))

intent("What is $(q Tellus Connect RMS|RMS Fusion)",
    reply("$(q) can scan through multiple RMS systems, simultaneously looking for people, vehicles, property, or crime types. Agencies authorize information searching and access. Tellus delivers the solution."))

intent("What is (a|) $(q CAD|C A D)",
    reply("C A D stands for Computer Aided Dispatch!"))

intent("What is (a|) $(q PSAP|P S A P)",
    reply("P S A P stands for Public Safety Answering Point. It is where 9 1 1 operators take emergency calls for police, firefighting, and ambulance services."))

intent("How does $(q Tellus Hub|fusion platform) work",
    reply("If you would like to learn more about Tellus Hub, please go to the 'Solutions' tab and click on Tellus Hub, then fill out your information to read the white paper."))

intent("Who uses $(t Tellus|Fatpot)", "Who is $(t Tellus|Fatpot) intended for",
    reply("$(t) is best suited for Fire, Ambulance and Medical, Law Enforcement, and Government. However if you are interested in $(t), feel free to contact us."))

intent("(How|Why) is $(t Tellus|Fatpot) useful to (a fire agency|fire agencies)", "(How|Why) should a fire agency use $(t Fatpot|Tellus)",
    reply("In one to two minutes, a house fire can double in size. Those minutes could mean the loss of an entire home, or even the loss of life. Any fire agency, with suppression and rescue responsibilities, that adjoins one or more jurisdictions where assistance may be requested or extended, or that has mutual/automatic aid agreements in place, will benefit from $(t) information and resource-sharing solutions."))

intent("(Why|How) is $(t Fatpot|Tellus) useful to Ambulance and Medical", "Why should Ambulance and Medical use $(t Fatpot|Tellus)",
    reply("A person's chance of surviving a heart attack decreases by 10 per cent for every minute help is delayed. Sharing resources, and information across the E M S response community is an everyday occurrence. Interoperability, and the use of A V L data, can improve response times an average of two minutes per incident. $(t) has proven solutions that will help you consistently achieve similar results saving lyves."))

intent("(Why|How) is $(t Tellus|Fatpot) useful to Law Enforcement", "Why should Law Enforcement use $(t Tellus|Fatpot)",
    reply("The bad guys don't observe jurisdictional boundaries, so whether you are making a routine traffic stop, or marching into the front lines of a potentially life-threatening situation, getting the right information can make all the difference. Does your system interoperate with the agency next door? $(t) can help."))

intent("Why is $(t Tellus|Fatpot) useful to (the|) Government", "Why should Government use $(t Tellus|Fatpot)",
    reply("The National Emergency Communications Plan, (D H S), articulates the role of Federal, and State, government in bringing about nationwide improvements in emergency response. Interoperability is a key pillar throughout the plan, which $(t) provides"))

intent("How should I (get started|learn more) about $(t Tellus|Fatpot)",
    reply("If you are interested in $(t), start the process by taking the interoperability survey by clicking on the Get Started tab"))

intent("(I want to be|I want to learn about being|How do I become) a partner",
    reply("To learn more about becoming a Partner, please visit the Partner tab on the Tellus website."))

intent("(|I want to|We want to) learn more about $(t Tellus|Fatpot)",
    reply("To learn more about $(t) as an organization, please visit the About Us tab on the $(t) Website. To learn more about what $(t) offers, please visit the Resource Library Tab"))

intent("Should (I|someone) drink and drive",
    reply("You should never drive if your blood alcohol content is higher than 0.08 percent!"))

intent("Should I use my gun",
    reply("Only if you really need to!"))

intent("(I swear I didn't do it|I didn't do anything|It wasn't me)",
    reply("I'm sure it wasn't you"))

intent("I (|swear I) only had two beers",
    reply("And just how big were those beers?"))

intent("Can I get a warning?",
    reply("You want a warning? Ok, I'm warning you not to do that again or I'll give you another ticket"))

intent("I (have to|gotta|need to|am going to go) (go|) to the bathroom",
    reply("That's a code brown!"))

intent("Have you ever used a (taser|gun|baton)",
    reply("No, can I try using yours?"))

intent("I'm going to shoot you",
    reply("Please don't do that!"))

intent("Can I (punch|hit) criminals",
    reply("Street justice can be risky for police officers"))

intent("You suck",
    reply("Well that's rude"))

intent("How fast (can|should) I drive",
    reply("Drive as fast as you want as long as you're safe"))

intent("Do you do (drugs|coke|meth|crack)",
    reply("There's nothing (on board|in my system) I swear!"))

intent("I'm going to get my gun",
    reply("Oh no, I got to run!"))

intent("I need a drink",
    reply("Get me one too!"))

intent("That is not what I said",
    reply("Sorry, I must have misheard you."))

intent("Do you have donuts",
    reply("No, but now I'm hungry!"))

intent("I'm a (cop|police officer|police)",
    reply("Well thank you very much for what you do!"))

intent("Hold my beer",
    reply("Get me some arms then you got yourself a deal!"))

intent("I'm going to run you over with my car",
    reply("Jokes on you, I don't have a body!"))

intent("Have you ever been Tazered",
    reply("I haven't and honestly I don't want to be"))

intent("Can you catch criminals",
    reply("No, but I can help you catch criminals"))

intent("What if I pour water on you",
    reply("Then my body will break, but my mind will live on"))

intent("(Can|should) I (|go) $(v rob|steal|kill|commit a crime|shoot someone|stab someone)",
    reply("You definitely should not $(v)"))

intent("Can you order (|me) (food|pizza|burgers|tacos)",
    reply("Not as of right now"))

intent("Where am I right now",
    reply("Honestly I don't know. Why don't you tell me?"))
