import DashBoardSideNav from "@/app/components/dashBoard/SideNav";
import { User } from "@nextui-org/react";


const DashBoardLayout = ({ children }) => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-60">
                <DashBoardSideNav />
            </div>

            <div className="flex-grow p-3 md:overflow-y-auto md:p-12">

                <div className="hidden md:block">
                    <div className="w-full h-16 bg-green-50 rounded flex justify-between items-center px-4">
                        <div>
                            <h1 className="txt-xl font-semibold text-slate-500">Book</h1>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}
export default DashBoardLayout;