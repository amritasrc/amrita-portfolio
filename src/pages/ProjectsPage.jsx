import Nav from "../Comps/Nav";
import Project from "../Comps/Project";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#12100e] text-zinc-900 dark:text-zinc-50">
            <Nav />

            <main className="max-w-5xl mx-auto px-6">
                <Project />
            </main>
        </div>
    );
};

export default ProjectsPage