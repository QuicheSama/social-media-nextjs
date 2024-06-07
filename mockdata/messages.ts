import { allusers } from "./users";
import { Message } from "@/types/message";

const messages = [
    'Hi there!',
    'Did I forget my sunglasses by your pool?',
    'u up?',
    'come over here and fight me!',
    'Did you see what happened at lunch today?',
    'Sup dweeb?',
    'Stay in school!',
    'Pokemon Go to the Polls'
]

const allmessages: Array<Message> = messages.map((message, index, list) => {
    return {
        sender: allusers[index % allusers.length].id,
        recipient: allusers[(index + 2) % allusers.length].id,
        text: message,
        date: new Date(2022, index, (index * 2 & 28))
    }
});


export { allmessages };