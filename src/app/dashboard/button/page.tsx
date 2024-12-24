"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, MailOpen } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button onClick={() => console.log("Default")}>default</Button>
      <Button disabled>default disabled</Button>
      <Button
        variant={"destructive"}
        onClick={() => console.log("Destructive")}
      >
        destructive
      </Button>
      <Button variant={"ghost"} onClick={() => console.log("Ghost")}>
        ghost
      </Button>
      <Button variant={"outline"} onClick={() => console.log("Outline")}>
        outline
      </Button>
      <Button variant={"secondary"} onClick={() => console.log("Secondary")}>
        secondary
      </Button>
      <Button variant={"success"} onClick={() => console.log("Success")}>
        success
      </Button>
      <Button onClick={() => console.log("capitalize: false")}>
        capitalize: false
      </Button>
      <Button onClick={() => console.log("capitalize: true")} capitalize>
        capitalize: true
      </Button>
      <Button asChild variant={"link"}>
        <Link href="/alert">link</Link>
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
      <Button>
        <MailOpen /> Sign in with Shadcn/ui
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Loading...
      </Button>
    </div>
  );
}
