import { SET_OPEN } from "./"

export default function(string){
    return {
        type: SET_OPEN,
        payload:string
    }
}