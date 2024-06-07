type User = {
    id: string;
    firstName: string;
    lastName: string;
    // Date of birth is optional since it's for demonstration purposes. 
    dob?: Date;
    // Profile info is also optional for demonstration purposes
    profile?: Profile
};

type Profile = {
    // Assuming text fields similar to MySpace 👴
    location?: string;
    blurb?: string;
}

export type { User, Profile };