import React from "react";
import SideBar from "../Sidebar";
import { PageContent } from "../shared/CustomPage";

const index = () => {
    return (
        <div className="CustomPageWrapper" title="Home">
            <SideBar />
            <PageContent>
                <h1>Home</h1>
            </PageContent>
        </div>
    );
};

export default index;
