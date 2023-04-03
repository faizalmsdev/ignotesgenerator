const notes = [
    "\"A Lot of feeling but nothing to say\"",
    "\"No expectations no disappointments\"",
    "\"Tears are words the heart can't say\"",
    "\"We may not talk,but I still care\"",
    "\"A lot of feelings for one person only\"",
    "\"Your smile melts my heart\"",
    "\"It only hurts,if you care\"",
    "\"Your eyes stole all my words Away\"",
    "\"I'm wearing the smile you gave me\"",
    "\"I carry you in my heart\"",
    "\"Good things come to those who hustle.\"",
    "\"Don't watch the clock; do what it does. Keep going.\"",
    "\"Be the energy you want to attract.\"",
    "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" ",
    "\"Believe you can and you're halfway there.\" ",
    "\"The only way to have a good day is to start it with a positive attitude.\"",
    "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\" ",
    "\"Life is like a camera, focus on the good times, develop from the negatives, and if things don't work out, take another shot.\"",
    "\"If you don't like something, change it. If you can't change it, change your attitude.\" ",
    "\"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.\"",
    "\"Life is short, make it sweet.\"",
    "\"The best way to predict your future is to create it.\" ",
    "\"Be the change you wish to see in the world.\" ",
    "\"Dreams don't work unless you do.\"",
    "\"You miss 100% of the shots you don't take.\" ",
    "\"The secret of getting ahead is getting started.\" ",
    "\"Be yourself, everyone else is already taken.\" ",
    "\"Happiness is not something ready made. It comes from your own actions.\" ",
    "\"You are never too old to set another goal or to dream a new dream.\" ",
    "\"The future belongs to those who believe in the beauty of their dreams.\" ",
    "\"Do what you love and you'll never have a problem with Monday.\"",
    "\"You have within you right now, everything you need to deal with whatever the world can throw at you.\"",
    "\"Don't stop when you're tired. Stop when you're done.\"",
    "\"Believe you deserve it and the universe will serve it.\"",
    "\"Live each day as if your life had just begun.\" ",
    "\"Be the reason someone smiles today.\"",
    "\"The difference between try and triumph is a little umph.\"",
    "\"You can't spell awesome without me.\"",
    "\"Every day may not be good, but there is something good in every day.\"",
    "\"It's not what we have in life, but who we have in our life that matters.\"",
    "\"The best time for new beginnings is now.\"",
    "\"Don't let yesterday take up too much of today.\"",
    "\"Every day is a second chance.\"",
    "\"You never know how strong you are until being strong is your only choice.\"",
    "\"You are not a drop in the ocean. You are the entire ocean in a drop.\" ",
    "\"If it scares you, it might be a good thing to try.\"",
    "\"Life is 10% what happens to us and 90% how we react to it.\" ",
    "\"Do what is right, not what is easy.\"",
    "\"Life is a journey, not a destination.\" ",
    "\"We rise by lifting others.\""
    
]

const motivationalNotes = [
    "\"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.\"",
    "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"",
    "\"You are never too old to set another goal or to dream a new dream.\"",
    "\"Believe you can and you're halfway there.\"",
    "\"Don't watch the clock; do what it does. Keep going.\"",
    "\"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.\"",
    "\"You miss 100% of the shots you don't take.\"",
    "\"You are the only one who can limit your greatness.\"",
    "\"It's not the years in your life that count. It's the life in your years.\"",
    "\"The future belongs to those who believe in the beauty of their dreams.\"",
    "\"It does not matter how slowly you go as long as you do not stop.\"",
    "\"You don't have to be great to start, but you have to start to be great.\"",
    "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"",
    "\"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.\"",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\"",
    "\"Believe you can and you're halfway there.\"",
    "\"Be the change that you wish to see in the world.\"",
    "\"You can't build a reputation on what you are going to do.\"",
    "\"The only way to do great work is to love what you do.\"",
    "\"The best way to predict the future is to create it.\"",
    "\"Don't let yesterday take up too much of today.\"",
    "\"I have not failed. I've just found 10,000 ways that won't work.\"",
    "\"If you want to achieve greatness stop asking for permission.\"",
    "\"The only thing we have to fear is fear itself.\"",
    "\"If you can dream it, you can achieve it.\"",
    "\"The only person you are destined to become is the person you decide to be.\"",
    "\"If you're going through hell, keep going.\"",
    "\"I attribute my success to this: I never gave or took any excuse.\"",
    "\"Happiness is not something ready made. It comes from your own actions.\"",
    "\"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\"",
    "\"No one can make you feel inferior without your consent.\"",
    "\"A goal is not always meant to be reached; it often serves simply as something to aim at.\"",
    "\"The true test of leadership is how well you function in a crisis.\"",
    "\"There are no shortcuts to any place worth going.\"",
    "\"If you're offered a seat on a rocket ship, don't ask what seat! Just get on.\"",
    "\"We may encounter many defeats but we must not be defeated.\"",
    "\"Believe in the power of your dreams and the strength of your spirit.\"",
    "\"Our greatest glory is not in never falling, but in rising every time we fall.\"",
    "\"I am not a product of my circumstances. I am a product of my decisions.\""
];


const pickupLines = [
    "\"Excuse me, but I think you dropped something: my jaw.\"", 
    "\"I must be a snowflake because I've fallen for you.\"", 
    "\"Are you a magician? Every time I look at you, everyone else disappears.\"", 
    "\"Can I follow you where you go? Because my parents always told me to follow my dreams.\"", 
    "\"Do you have a map? Because I just got lost in your eyes.\"", 
    "\"I'm not a photographer, but I can definitely picture us together.\"", 
    "\"Excuse me, I think you dropped something - my jaw.\"", 
    "\"Do you have a Band-Aid? Because I just scraped my knee falling for you.\"", 
    "\"Is your name Google? Because you've got everything I'm searching for.\"", 
    "\"I'm no mathematician, but I think we're a perfect equation.\"", 
    "\"You must be a ninja because you snuck up and stole my heart.\"", 
    "\"Are you an alien? Because you just abducted my heart.\"", 
    "\"Excuse me, do you have a name? Or can I call you mine?\"", 
    "\"Are you a bank loan? Because you have my interest.\"", 
    "\"Do you believe in love at first sight or should I walk by again?\"", 
    "\"I'm not saying you're the best catch out there, but you're definitely a catch worth keeping.\"", 
    "\"If I were a cat I'd spend all nine lives with you.\"", 
    "\"Excuse me, but I think we're destined to do great things together.\"", 
    "\"You must be a mermaid because I'm drowning in your beauty.\"", 
    "\"Do you have a sunburn or are you always this hot?\"", 
    "\"Are you a camera? Because every time I look at you, I smile.\"", 
    "\"Do you have a twin? Because you're twice as nice as anyone else I've met.\"", 
    "\"If you were a vegetable, you'd be a cute-cumber.\"", 
    "\"You must be a Snickers bar because you satisfy me.\"", 
    "\"Do you know what my shirt is made of? Boyfriend material.\"", 
    "\"If I could rearrange the alphabet, I'd put 'U' and 'I' together.\"", 
    "\"Do you have a name or can I call you mine?\"", 
    "\"Do you have a pencil? Because I want to erase your past and write our future.\"", 
    "\"Is your dad an alien? Because you are out of this world.\"", 
    "\"If you were a vegetable, you'd be a cutecumber.\"", 
    "\"Can I borrow a kiss? I promise I'll give it back.\"", 
    "\"If nothing lasts forever, can I be your nothing?\"", 
    "\"Do you like Star Wars? Because Yoda only one for me!\"", 
    "\"You must be made of chocolate because you're sweet and delicious.\"", 
    "\"If I were a stop light, I'd turn red every time you passed by, just so I could stare at you a little longer.\"", 
    "\"Do you have a Band-Aid? Because I just hurt myself falling for you.\"", 
    "\"Is your name Ariel? Because we mermaid for each other.\"", 
    "\"Can I borrow a map? Because I just got lost in your eyes.\"", 
    "\"Do you have a name or can i call you as mine\""
]




$(".generateBtn").click(()=>{
    var randomNum = Math.floor(Math.random() * 40) + 1;
    $(".heading").text(notes [randomNum]);
})


const actions = Array.from(document.querySelectorAll('[data-action]'));

actions.forEach(action =>{
    $(action).click(()=>{
        const type = action.dataset.action;

        switch(type){
            case 'notes':
                $(".pickup").stop().css("opacity", "");
                $(".motivational").stop().css("opacity", "");
                $(".notes").animate({opacity:0.5});
                $(".generateBtn").click(()=>{
                    
                    var randomNum = Math.floor(Math.random() * 50) + 1;
                    $(".heading").text(notes[randomNum]);
                    // console.log("notes clicked");
                })
                break;
            
            case 'motivational':
                $(".notes").stop().css("opacity", "");
                $(".pickup").stop().css("opacity", "");
                $(".motivational").animate({opacity:0.5});
                $(".generateBtn").click(()=>{
                    var randomNum = Math.floor(Math.random() * 40) + 1;
                    $(".heading").text(motivationalNotes[randomNum]);
                    // console.log(randomNum);
                    // console.log("motivational notes clicked");
                })
                break;

            case 'pickup':
                $(".notes").stop().css("opacity", "");
                $(".motivational").stop().css("opacity", "");
                $(".pickup").animate({opacity:0.5});
                $(".generateBtn").click(()=>{
                        var randomNum = Math.floor(Math.random() * 45) + 1;
                        $(".heading").text(motivationalNotes[randomNum]);
                        // console.log(randomNum);
                        // console.log("pickup notes clicked");
                })
                break;
        }
    })
})





