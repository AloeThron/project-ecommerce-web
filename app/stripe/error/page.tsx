import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorStripe() {
  return (
    <div className="p-10 text-2xl font-bold text-red-500">
      <h2>Something went wrong....!!</h2>
      <Button asChild className="mt-5">
            <Link href="/">GO back</Link>
          </Button>
    </div>
  );
}