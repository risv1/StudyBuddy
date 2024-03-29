import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import SheetSidebar from "./SheetSidebar";
import { Card, CardHeader, CardContent, CardDescription } from "./ui/card";

export const Dashboard = () => {
  return (
    <div className="min-h-screen w-screen flex flex-row">
      <div className="w-1/3 hidden border-r bg-muted/40 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-col lg:w-2/3 xl:w-2/3 sm:w-full md:w-full">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:hidden xl:hidden">
          <SheetSidebar />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Results:</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <Card>
                <CardHeader></CardHeader>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

{/* <DropdownMenu>
<DropdownMenuTrigger asChild>
  <Button variant="secondary" size="icon" className="rounded-full">
    <CircleUser className="h-5 w-5" />
    <span className="sr-only">Toggle user menu</span>
  </Button>
</DropdownMenuTrigger>
<DropdownMenuContent align="end">
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Settings</DropdownMenuItem>
  <DropdownMenuItem>Support</DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Logout</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu> */}