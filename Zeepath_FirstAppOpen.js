// {Name: Zeepath_FirstAppOpen}
// {Description: Zeepath first application}
// {Visibility: Admin}

title("Zeepath First App");

intent("(please|can you|) (create|open|start|) a new account (for me|)", p => {
    p.play("I would love to. My name is Alan, by the way, and welcome to the Zeepath App. " +
        "I'm going to help you get the most out of Zeepath. " +
        "Here's your first question: are you a Guide, or a Youth? " +
        "If you're not sure which one to pick, just ask me about them.");

    p.play({command: "playText", text: "Ask me: 'what is a Youth?' or tell me 'I am a Guide'."})
});

intent("(what is|am I) a Youth?", p => {
    p.play("A Youth is a young person who wants to improve themselves and get rewarded for it. " +
        "They are supervised and rewarded by their Guide.");
    p.play({command: "playText", text: "Are you a guide or a youth?"})
});

intent("(what is|am I) a Guide?", p => {
    p.play("A Guide is an adult who supervises a youth on Zeepath. A guide is responsible for checking a youth's work, " +
        "giving them advice on how to improve, and rewarding them when they achieve their goals. " +
        "A Guide is usually a teacher, parent, or coach.");
    p.play({command: "playText", text: "Are you a guide or a youth?"})
});

intent("what are they?", p => {
    p.play("A Guide is an adult who supervises a youth on Zeepath. A guide is responsible for checking a youth's work, " +
        "giving them advice on how to improve, and rewarding them when they achieve their goals. " +
        "A Guide is usually a teacher, parents, or coach. On the other hand, a Youth is a young person who wants " +
        "to improve themselves and get rewarded for it. They are supervised and rewarded by their Guide.");
    p.play({command: "playText", text: "Are you a guide or a youth?"});
});

intent("(I am a|) $(W youth|guide)", p => {
    p.play(`Great, let's get your ${p.W} account set up. Fill out this form and tap 'next' when you're done. ` +
        "If you think you're in the wrong place, tap the back arrow.");

    p.play({command: "navigate", page: "SignUp"});
});
