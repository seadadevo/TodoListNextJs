import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import Image from "next/image";

export default async function Home() {
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Button>
      <Plus/>
        Default Button
      </Button>

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant={"outline"}>Open Dialog</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            
            <DialogHeader>
              <DialogTitle>Create A New Todo</DialogTitle>
              <DialogDescription>
                Create a New Todo as you Like... 
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="grid gap-3 mt-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="" />
              </div>
              <div className="grid gap-3 ">
              <Label htmlFor="age-1">age</Label>
              <Input id="age-1" name="age" defaultValue="" />
              </div>
              <div className="grid gap-3 ">
              <Label htmlFor="title-1">title</Label>
              <Input id="title-1" name="title" defaultValue="" />
              </div>
            </div>

             <DialogFooter className="mt-4">
            <DialogClose   asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    
    </main> 
  );
}