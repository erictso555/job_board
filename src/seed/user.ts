export interface User {
    username: string;
    password: string;
    identity: "case_reviewer" | "case_creator";
}

export interface UserConfig{
    username: string;
    password: string;
}

export const users: User[] = [
    {
        "username": "case_creator1",
        "password": "123",
        "identity": "case_creator"
    },
    {
        "username": "case_creator2",
        "password": "123",
        "identity": "case_creator"
    },
    {
        "username": "case_reviewer1",
        "password": "123",
        "identity": "case_reviewer"
    },
    {
        "username": "case_reviewer2",
        "password": "123",
        "identity": "case_reviewer"
    }
]