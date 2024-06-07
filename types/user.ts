type User = {
    id: string;
    firstName: string;
    lastName: string;
    // Date of birth is optional since it's for demonstration purposes. 
    dob?: Date;
    profile?: Profile
};

type Profile = {
    // Assuming text fields similar to MySpace 👴
    location?: string;
    blurb?: string;
}

export type { User, Profile };