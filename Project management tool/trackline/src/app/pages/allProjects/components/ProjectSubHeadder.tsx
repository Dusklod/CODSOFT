import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ProjectsSubHeader() {
    return(
        <div className="mt-20 flex justify-between font-bold items-center">
            <MyProjectsText /> 
            <SortByButton />
        </div>
    );

    function MyProjectsText() {
        return <p className="text-[26px] font-bold">My Projects</p>;
    }


}