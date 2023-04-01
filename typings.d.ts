interface SanityBody {
    _createdAt: string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}

interface Image {
    _type: "image";
    assests: {
        _ref:string;
        _type: "reference"; 
    };
}


export interface PageInfo extends SanityBody{
    _type:"pageInfo";
    address:string;
    content: Array;
    email: string;
    role: string;
    name: string;
    phoneNumber: string;
    heroImage: Image;
    dp: Image;
}
export interface Technology extends SanityBody{
    _type:"skill";
    title:string;
    progress:number;
    image:  Image;
}
export interface Projects extends SanityBody{
    _type:"project";
    title:string;
    summary:Array;
    technologies: Technology[];
    image:  Image;
    linkToBuil: string;
}


export interface WorkExperience extends SanityBody{
    _type: "experience";
    company: "string";
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorking:boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];

}



export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url:string;
}

export type Block = {
    
}