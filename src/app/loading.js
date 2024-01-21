
import { Spinner } from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner label="Loading..." color="warning" size="lg" />
        </div>
    );
}
