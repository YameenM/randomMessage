function getRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage(){
    const greetings = ['Hello!', 'Hey Their!', 'Greetings!', 'Hi!', 'Howdy!'];
    const subject = ['You are amazing!', 'Your potential is limitless!', 'Everyday is a new opportunity!', 'You can Achive anything!', 'Beleve in yourself!' ];
    const advice = ['Keep pushing forward', 'Stay positive and strong', 'Never stop learning', 'Hard work always pays off', 'Stay focused and determind'];

    return `${getRandomElement(greetings)}. ${getRandomElement(subject)}. ${getRandomElement(advice)}.`
}

console.log(generateMessage());