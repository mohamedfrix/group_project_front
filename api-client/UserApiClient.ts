import User from "../model/UserModel";


const userProfileContent = {
    "content" : [
        {
            "name" : "Academic",
            "components" : [
                {
                    "type" : "text",
                    "size" : "18",
                    "weight": "bold",
                    "color" : "black",
                    "value": "University Of Algiers"
                }
            ]
        },
        {
            "name" : "Research",
            "components" : [
                {
                    "type" : "text",
                    "size" : "18",
                    "weight": "bold",
                    "color" : "black",
                    "value": "University Of Algiers"
                }
            ]
        },
        {
            "name" : "Statement",
            "components" : [
                {
                    "type" : "text",
                    "size" : "18",
                    "weight": "bold",
                    "color" : "black",
                    "value": "University Of Algiers"
                }
            ]
        }
    ]
};


export class UserApiClient {
    static getUser(id: number) {
        return new User(
            id,
            'Moulay',
            'Bouabdelli',
            'moulay.bouabdelli@ensia.edu.dz',
            'Tiaret-Algeria',
            '2027',
            'National higher school of artificial intelligence',
            'ENSIA'
        );
    }

    static getUserProfileContent(id: number) {
        if (id === 1)
            // return {"content" : []};
            return userProfileContent;
    }
}

