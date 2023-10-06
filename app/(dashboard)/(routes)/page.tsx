import { UserButton } from "@clerk/nextjs";

const Dashboard = () => {
    return ( 
        <div className="h-full text-sky-400">
            <UserButton 
                afterSignOutUrl="/"
            />
        </div>
     );
}
 
export default Dashboard;