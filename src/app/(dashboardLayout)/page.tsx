import Dashboard from "@/components/Dashboard/Dashboard";


const DashboardPage = async () => {
  return (
    <div className="">
      <div className=" text-slate-900 dark:text-white justify-center items-center space-y-4 min-h-screen mx-auto ">

        <Dashboard/>
      </div>
    </div>
  );
};

export default DashboardPage;

// * call a variable 'session' and
// * import 'getServerSession' from nestAuth and add 'authOptions' as parameter'
// * create a nextAuth secret in .env
// * add this secret  in authOptions file
