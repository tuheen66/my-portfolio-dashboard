// import { authOptions } from "@/utils/authOptions";
// import { getServerSession } from "next-auth";
// import Image from "next/image";

const DashboardPage = async () => {
  // const session = await getServerSession(authOptions);
 
  return (
    <div className="">
      <div className="flex flex-col text-slate-900 dark:text-white justify-center items-center space-y-4 min-h-screen mx-auto ">
        {/* <h1 className="text-4xl">Welcome {session?.user?.name}</h1> */}
        {/* {session?.user?.email && <p className="text-xl">Email : {session?.user?.email}</p>} */}
        {/* <div>
          <Image
            src={session?.user?.image || "../../../assets/images/avatar.png"}
            width={150}
            height={150}
            alt="Monirul"
            className="rounded-full border-2 border-[#e67e22] p-2"
          />
        </div> */}
      </div>
    </div>
  );
};

export default DashboardPage;

// * call a variable 'session' and
// * import 'getServerSession' from nestAuth and add 'authOptions' as parameter'
// * create a nextAuth secret in .env
// * add this secret  in authOptions file
