import React from "react";

const UserContext = React.createContext("Mantsha"); //mantsha is a default value

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
