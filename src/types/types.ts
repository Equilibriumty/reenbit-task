export type Data = {
  users: User[];
  messages: Message[];
};

export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type Message = {
  id: number;
  chatId: number;
  receiver: boolean;
  time: string;
  text: string;
};

export type DataAction = Data & {
  updateMessages: (message: Message) => void;
};
