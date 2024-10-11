"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/action";
import {  SyntheticEvent, useState } from "react";
import SubmitButton from "@/components/SubmitButton";
import Form from "next/form"
import Container from "@/components/Container";
 
const page =  () => {
const[state,setState]=  useState('ready')
  const handleOnSubmit =async (event: SyntheticEvent) => {
    
    if (state === 'pending') {
      event.preventDefault()
      return
    }
    setState('pending')
    
    
}

  return (
    <main className=" my-12 h-full ">
      <Container>
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>
     
      <Form action={createAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
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
          <SubmitButton/>
        </div>
        </Form>
        </Container>
    </main>
  );
};

export default page;
