
import ProjectsHeader from "./components/ProjectHeader"
import ProjectsSubHeader from "./components/ProjectSubHeadder"
function AllProjects(){
    return(
        <div className="bg-slate-50 w-full min-h-screen flex">
            <AllProjectsArea/>
            {}
        </div>
    );

    function AllProjectsArea(){
        return(
            <div className=" w-[78%] p-10 flex flex-col gap-3">
                {}
                <ProjectsHeader/>
                {}
                <ProjectsSubHeader/>
            </div>
        ); 
    }
}
export default AllProjects;