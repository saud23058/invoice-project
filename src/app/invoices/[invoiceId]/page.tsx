import { Badge } from "@/components/ui/badge";
import { db } from "@/DB";
import { invoices } from "@/DB/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";

const Page = async ({ params }: { params: { invoiceId: string } }) => {
  const invoiceId = Number(params.invoiceId);
  const [result] = await db.select().from(invoices).where(eq(invoices.id, invoiceId)).limit(1);
  
  return (
    <main className="h-full max-w-5xl mx-auto my-12">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between mb-8">
          <h1 className="flex items-center gap-4 text-3xl font-semibold">
            Invoice {invoiceId}
            <Badge
              className={cn(
                "rounded-full capitalize",
                result.status === "open" && "bg-blue-500",
                result.status === "paid" && "bg-green-600",
                result.status === "void" && "bg-zinc-700",
                result.status === "uncollectible" && "bg-red-600"
              )}
            >
              {result.status}
            </Badge>
          </h1>
        </div>

        <p className="text-3xl">${(result.value / 100).toFixed(2)}</p>
        <p className="text-lg">{result.description}</p>
        
        <h2 className="font-bold text-lg mt-8">Billing Details</h2>
        <ul className="grid gap-2">
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice ID</strong>
            <span>{result.id}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Invoice Date</strong>
            <span>{new Date(result.createTs).toLocaleDateString()}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Name</strong>
            <span>{/* Add billing name here */}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Billing Email</strong>
            <span>{/* Add billing email here */}</span>
          </li>
          <li className="flex gap-4">
            <strong className="block w-28 flex-shrink-0 font-medium text-sm">Amount</strong>
            <span>${(result.value / 100).toFixed(2)}</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Page;
