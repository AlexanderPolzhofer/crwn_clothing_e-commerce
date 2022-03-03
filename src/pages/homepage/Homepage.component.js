import React from "react";
import Directory from "../../components/directory/Directory.component.jsx";

import { HomePageContainer } from "./Homepage.styles.jsx";

const Homepage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
}

export default Homepage;