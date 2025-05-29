'use client'

import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

type FormData = {
    user_id: number;
    school_id: number;
    graduation_year: string;
    wilaya: string;
}

function Test() {
    const [formData, setFormData] = useState<FormData>({
        user_id: 1,
        school_id: 1,
        graduation_year: "2024",
        wilaya: "Algiers"
    });

    const [profilePicture, setProfilePicture] = useState<File | null>(null);
    const [secondaryPicture, setSecondaryPicture] = useState<File | null>(null);
    const [token, setToken] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>, type: 'profile' | 'secondary') => {
        const file = e.target.files?.[0];
        if (file) {
            if (type === 'profile') {
                setProfilePicture(file);
            } else {
                setSecondaryPicture(file);
            }
        }
    };

    const handleSubmit = async () => {
        const formDataToSend = new FormData();
        formDataToSend.append('data', JSON.stringify(formData));

        if (profilePicture) {
            formDataToSend.append('profile_picture', profilePicture, profilePicture.name); // Note the filename
        }
        if (secondaryPicture) {
            formDataToSend.append('secondary_picture', secondaryPicture, secondaryPicture.name);
        }

        try {
            const response = await fetch('/api/students', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formDataToSend
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className={`w-full grid grid-rows-1 grid-cols-[fit-content(100%)_auto]`}>
                <div className={`col-start-1 row-start-1`}>
                    <SidebarTrigger />
                </div>
                <div className={`row-start-1 col-start-2 w-full h-[100vh] flex flex-col justify-center items-center gap-y-6`}>
                    <div className={`w-full max-w-[350px] space-y-4`}>
                        <Input
                            type="text"
                            placeholder="Bearer Token"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            className="mb-4"
                        />

                        <Input
                            type="number"
                            placeholder="User ID"
                            name="user_id"
                            value={formData.user_id}
                            onChange={handleChange}
                        />

                        <Input
                            type="number"
                            placeholder="School ID"
                            name="school_id"
                            value={formData.school_id}
                            onChange={handleChange}
                        />

                        <Input
                            type="text"
                            placeholder="Graduation Year"
                            name="graduation_year"
                            value={formData.graduation_year}
                            onChange={handleChange}
                        />

                        <Input
                            type="text"
                            placeholder="Wilaya"
                            name="wilaya"
                            value={formData.wilaya}
                            onChange={handleChange}
                        />

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Profile Picture</label>
                            <Input
                                type="file"
                                onChange={(e) => handleFileChange(e, 'profile')}
                                accept="image/*"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Secondary Picture</label>
                            <Input
                                type="file"
                                onChange={(e) => handleFileChange(e, 'secondary')}
                                accept="image/*"
                            />
                        </div>
                    </div>

                    <Button
                        size={'lg'}
                        type={'submit'}
                        className={`font-lexend px-12 text-md hover:bg-primary-light hover:text-primary-light-foreground`}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </SidebarProvider>
    );
}

export default Test;