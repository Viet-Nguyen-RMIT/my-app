export type User = {
    id: string;
    username: string;
    password: string;
    role: string;
}

export const DEFAULT_USERS : User[] = 
[{id: "1", username: "lecturer", password: "123", role:"Lecturer"},
 {id: "2", username: "tutor", password: "456", role:"Tutor"}
];