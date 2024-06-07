import { User } from "./user";

type Message = {
    sender: User['id'];
    recipient: User['id'];
    date: Date;
    text: string;
}

export type { Message }
