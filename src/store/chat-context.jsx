import React, { useReducer, useContext } from "react";
import { AuthContext } from "./auth-context";

export const ChatContext = React.createContext();

export const ChatContextProvider = (props) => {
    const INITIAL_STATE = {
        chatId : "null",
        user: {}
    }
    const { currentUser } = useContext(AuthContext);
    const chatReducer = (state, action) => {
        switch(action.type){
            case "CHANGE_USER":
                return {
                    chatId: currentUser.uid > action.payload.uid
                    ? currentUser.uid + action.payload.uid
                    : action.payload.uid + currentUser.uid,
                    user: action.payload
                }
                
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{data:state, dispatch}}>
            {props.children}
        </ChatContext.Provider>
    );
}