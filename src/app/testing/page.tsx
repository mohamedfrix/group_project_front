'use client'

import {Input} from "@/components/ui/input";
import {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";

type FormData = {
    email: string
}

function Test () {

    const [formData, setFormData] = useState<FormData>({
        email: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev : FormData) => {return {...prev, [name]:value}})
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className={`w-full grid grid-rows-1 grid-cols-[fit-content(100%)_auto]`}>
                    <div className={`col-start-1 row-start-1`}>
                        <SidebarTrigger />
                    </div>
                    <div className={`row-start-1 col-start-2 w-full h-[100vh] flex flex-col justify-center items-center gap-y-6`}>
                        <div className={`w-full max-w-[350px]`}>
                            <Input type={'email'} placeholder={'Email'} name={'email'} value={formData.email} onInput={handleChange} onChange={handleChange} className={``} />
                        </div>
                        <Button size={'lg'} type={'submit'} className={`font-lexend px-12 text-md hover:bg-primary-light hover:text-primary-light-foreground `} onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>

            </SidebarProvider>

        </>
    );
}
export default Test;