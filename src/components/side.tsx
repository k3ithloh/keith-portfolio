import SideElementLeft from "./sideElementLeft";
import SideElementRight from "./sideElementRight";

const Side = () => {
    return (
        <div className="relative h-screen">
            <div className="fixed bottom-0 left-2 w-32 h-58">
                <SideElementLeft />
            </div>
            <div className="fixed bottom-0 right-2 w-32 h-58">
                <SideElementRight />
            </div>
        </div>
        

    )
};

export default Side;