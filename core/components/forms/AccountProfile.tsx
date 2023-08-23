"use client"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { userValidation } from '@/lib/validations/user'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { AccountProfileProps } from './types'
const AccountProfile = ({ user , btnTitle  }:AccountProfileProps) => {
    const [files, setFiles] = useState<File[]>([])
    const form = useForm({
        resolver:zodResolver(userValidation),
        defaultValues : {
            profile_photo : user?.image ||'',
            name : user?.name || '',
            username : user?.username || '',
            bio : user?.bio || '',
        }
    })
    function onSubmit(values: z.infer<typeof userValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    const handleImage =(e : ChangeEvent<HTMLInputElement> , fieldChange : (value : string )=> void) =>{
        e.preventDefault();
        const fileReader = new FileReader();
        
        if(e.target.files && e.target.files.length > 0){
         const file = e.target.files[0];
         setFiles(Array.from(e.target.files))
         if(!file.type.includes('image')) return;
         fileReader.onload = async (event) => {
            const imageDataUrl = event?.target?.result?.toString() || ''
            fieldChange(imageDataUrl)
        }
        fileReader.readAsDataURL(file)
        }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10">
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex items-center gap-4">
              <FormLabel className="account-form_image-label">
                {
                 field.value ? <Image className="rounded-full object-contain" src={field.value} alt={user.username || 'profile pic'} width={96} height={96} priority />
                : <Image className="object-contain" src={"/assets/profile.svg"} alt={user.username || 'profilepic'} width={24} height={24}  />}
              </FormLabel>
              <FormControl className="flex-1 text-base-semibold text-gray-200">
                <Input type="file" accept="image/*" placeholder="Upload a photo" className="account-form_image-input" onChange={(e) => handleImage(e, field.onChange)} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Name 
          </FormLabel>
              <FormControl>
                <Input {...field} className="account-form_input no-focus border-none" type="text"  />
              </FormControl>
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                UserName 
          </FormLabel>
              <FormControl>
                <Input {...field} className="account-form_input no-focus border-none" type="text"  />
              </FormControl>
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Bio 
          </FormLabel>
          <FormControl>
                <Textarea {...field} className="account-form_input no-focus border-none" rows={10}  />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="" type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AccountProfile