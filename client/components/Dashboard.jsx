import Sidebar from "./Sidebar";
import SheetSidebar from "./SheetSidebar";
import ThemeToggle from "./ThemeToggle";
import ResultLogs from "./ResultLogs";
import HomeDesc from "./HomeDesc";
import Output from "./Output";
import { usePrompt } from "@/layouts/PromptProvider";
import ListSubTop from "./ListSubTop";
import { UserButton } from "@clerk/nextjs";

export const Dashboard = () => {
  const { running } = usePrompt();

  return (
    <div className="w-full flex flex-row dark:bg-black bg-gray-200">
      <div className="w-1/3 hidden border-r dark:border-slate-700 border-gray-400 bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col lg:w-2/3 xl:w-2/3 sm:w-full md:w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:hidden xl:hidden">
          <SheetSidebar />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center flex-row justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">Console:</h1>
            <div className="flex flex-row items-center gap-5">
              <UserButton />
              <ThemeToggle />
            </div>
          </div>
          {!running && <HomeDesc />}
                <Output />
                <ListSubTop />

          {running && <ResultLogs />}
        </main>
      </div>
    </div>
  );
};
