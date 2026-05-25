import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center gap-12 p-6">
      <Alert className="max-w-2xl border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This website is still in <strong>alpha version</strong>. Things might
          break!
        </AlertDescription>
      </Alert>

      <div className="mt-10 flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          The Next Big osu! Application
        </h1>
        <p className="max-w-150 text-lg text-muted-foreground">
          Chat, add friends, express your opinion and stay in touch with the
          community !
        </p>

        <Button size="lg" className="rounded-xl bg-[#ff66aa] ...">
          <a href="temp">Connect with osu!</a>
        </Button>
      </div>
    </div>
  );
}
