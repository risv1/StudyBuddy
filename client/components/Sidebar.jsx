import { Input } from "./ui/input";
import { Home,  Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";

const Sidebar = () => {
    return (
        <div className="w-full flex h-full max-h-screen flex-col items-center gap-2">
            <div className="w-4/5 h-full mt-5">
              <div className="w-full h-[40%] flex flex-col gap-3">
                <Card>
                  <CardHeader>
                    <Package className="h-6 w-6" />
                    <CardTitle>StudyBuddy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Enter subject and topics to search</CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Home className="h-6 w-6" />
                    <CardTitle>Fields</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2">
                      <Label className="text-lg">Subject</Label>
                      <Input type="text" placeholder="Enter subject" className="border border-black focus:outline-none" />
                      <Label className="text-lg">Topic</Label>
                      <Input type="text" placeholder="Enter topics" className="border border-black focus:outline-none" />
                  </CardContent>
                </Card>
                <Card>
                  <div className="w-full h-full flex flex-col">
                    <ul className="">

                    </ul>
                  </div>
                </Card>
              </div>
            </div>
        </div>
    )
}

export default Sidebar;