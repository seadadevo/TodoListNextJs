import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

export default async function Home() {
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Button>
      <Plus/>
        Default Button
      </Button>
    </main> 
  );
}