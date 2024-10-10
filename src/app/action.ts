"use server"

import { db } from "@/DB"
import { invoices } from "@/DB/schema"
import { redirect } from "next/navigation"


export async function createAction(formData: FormData) {
  const value = Math.floor(
    Number.parseFloat(String(formData.get("value"))) * 100,
  );
const description = formData.get('description') as string
 
  
const result=  await db.insert(invoices).values({
    value,
    description,
    status:'open'
  })
    .returning({
    id:invoices.id
    })
  redirect(`/invoices/${result[0].id}`)
  
}