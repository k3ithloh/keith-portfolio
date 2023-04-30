import Link from 'next/link';
import SideElementLeft from "./sideElementLeft";
import SideElementRight from "./sideElementRight";

const Side = () => {
    return (
        <div className="relative h-screen">
            <div className="fixed bottom-0 left-6">
                <SideElementLeft />
            </div>
            <div className="fixed bottom-0 right-6">
                <SideElementRight />
            </div>
        </div>
        

    )
};

export default Side;