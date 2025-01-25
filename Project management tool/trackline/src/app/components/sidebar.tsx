import React from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import SplitscreenIcon from '@mui/icons-material/Splitscreen'
import LogoutIcon from '@mui/icons-material/Logout'

function Sidebar(){
    return (
        <div className="w-[97px] h-screen py-8 bg-background flex flex-col items-center justify-between border-r">
            <Logo/>
            <Menu />
            <Profile/>
        </div>
    );
    function Logo(){
       return <div className="flex items-center justify-center">
            <TaskAltIcon 
            sx={{fontSize:"41px"}}
            className="text-primary font-bolt cursor-pointer"
            />
        </div>
    };
    function Menu(){
        return(
            <div className="flex flex-col gap-6 items-center">
                <BorderAllIcon 
                sx={{fontSize:"27px"}}
                className="text-primary cursor-pointer"/>
                <SplitscreenIcon 
                sx={{fontSize:"25px"}}
                className="text-slate-300 cursor-pointer"/>
                <LogoutIcon 
                sx={{fontSize:"25px"}}
                className="text-slate-300 cursor-pointer"/>
            </div>
        )
    }
    function Profile(){
        return <div className="w-7 h-7 bg-primary rounded-md"></div>
    }

}

export default Sidebar;
