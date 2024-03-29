import Image from "next/image";
import Login from "@/components/Login";

const LoginForm = () => {
  return (
    <div className="w-screen bg-slate-950 h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <Login />
      </div>
      <div className="h-full w-full hidden bg-muted lg:block">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className=" object-cover w-3/5 h-3/5 border border-white dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
