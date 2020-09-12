import React from "react";
import { Provider } from "react-redux";
import App from "./app";

//import, add configureStore in parameter here, and remove store={store} from entry file ln:16
const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
