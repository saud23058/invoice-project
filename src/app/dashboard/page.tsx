import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { db } from "@/DB";
import { invoices } from "@/DB/schema";
import { cn } from "@/lib/utils";

const page = async() => {
  const result = await db.select().from(invoices)
  
  
  return (
    <main className="flex flex-col my-12 h-screen gap-6 text-center max-w-5xl mx-auto">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button className="inline-flex gap-2" variant='ghost' asChild>
            <Link href="invoices/new">
            <CirclePlus className="h-4 w-4"/>
            Create invoice
            </Link>  
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>

            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {result.map(res => {
            return (<TableRow key={res.id}>
              <TableCell className="font-medium text-left p-4">
                <Link href={`/invoices/${res.id}`} className="font-semibold">{new Date(res.createTs).toLocaleDateString()}</Link>
              </TableCell>
              <TableCell className="text-left p-4">
                <Link href={`/invoices/${res.id}`} className="font-semibold">Saud</Link>
              </TableCell>
              <TableCell className="text-left p-4">
                <Link href={`/invoices/${res.id}`} className="">saud@gmail.com</Link>
              </TableCell>
              <TableCell className="text-center p-4">
                <Link href={`/invoices/${res.id}`}><Badge className={cn(
                "rounded-full capitalize",
                res.status === "open" && "bg-blue-500",
                res.status  === "paid" && "bg-green-600",
                res.status  === "void" && "bg-zinc-700",
                res.status  === "uncollectible" && "bg-red-600",
              )}>{res.status }</Badge></Link>
              </TableCell>
  
              <TableCell className="text-right p-4">
                <Link href={`/invoices/${res.id}`} className="font-semibold">{(res.value/100).toFixed(2) }</Link>
              </TableCell>
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </main>
  );
};

export default page;
