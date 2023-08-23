export interface UserAccount {
    id : string,
    objectId : string,
    username : string,
    name : string,
    bio : string
    image : string
   }

   
export interface AccountProfileProps {
 user : UserAccount, btnTitle : string
}

