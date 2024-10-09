import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sql } from "drizzle-orm";
import { db } from "@/DB";
 
const page = async () => {
  const res = await db.execute(sql`SELECT current_database()`)
  return (
    <main className="flex flex-col my-12 h-screen gap-6  max-w-5xl mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      {JSON.stringify(res)}
      <form className="grid gap-4 max-w-xs">
        <div>
          <Label htmlFor="name" className="block mb-2 font-semibold text-sm">Billing Name</Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-2 font-semibold text-sm">Billing Email</Label>
          <Input id="email" name="email" type="text" />
        </div>
        <div>
          <Label htmlFor="value" className="block mb-2 font-semibold text-sm">Value</Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label htmlFor="description" className="block mb-2 font-semibold text-sm">Description</Label>
          <Textarea id="description" name="description" />
        </div>
        <div>
          <Button className="w-full font-semibold">
            Submit
          </Button>
        </div>
      </form>
    </main>
  );
};

export default page;
