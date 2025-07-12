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
        "password": "securePassword1",
        "identity": "case_creator"
    },
    {
        "username": "case_creator2",
        "password": "securePassword2",
        "identity": "case_creator"
    },
    {
        "username": "case_reviewer1",
        "password": "securePassword3",
        "identity": "case_reviewer"
    },
    {
        "username": "case_reviewer2",
        "password": "securePassword4",
        "identity": "case_reviewer"
    }
]