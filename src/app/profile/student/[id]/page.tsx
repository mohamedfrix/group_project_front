'use client';

import ProfilePicture from "@/app/components/ProfilePicture";
import ProfileSecondPicture from "@/app/components/ProfileSecondPicture";
import {useParams} from "next/navigation";
import {Button} from "@/components/ui/button";
import ProfileSectionsTab from "@/components/ProfileSectionsTab";
import {useEffect, useState} from "react";

const sections = {
    profile: "Profile",
    posts: "Posts",
    questions: "Questions",
}

function StudentProfile(){

    const params = useParams();
    const pageId = params.id?.toString() || '';
    const [activeSection, setActiveSection] = useState<string>(Object.keys(sections)[0]);

    useEffect(() => {
        console.log(activeSection);
    }, [activeSection]);

    return (
        <>
            <div className={`w-full flex flex-col items-center`}>

                <div className={`w-full px-4 py-6 grid grid-rows-[auto_auto_auto] grid-cols-3 lg:grid-rows-[auto_auto] lg:grid-cols-[20%_auto] lg:gap-x-12 lg:max-w-[1200px]`}>
                    <div className={`row-start-1 col-start-1 col-span-3 lg:col-span-2`}>
                        <ProfileSecondPicture pageId={parseInt(pageId)} />
                    </div>



                    <div className={`lg:hidden relative w-full max-w-[500px] sm:max-w-[600px] justify-self-center row-start-2 col-start-1 col-span-3 grid grid-rows-1 grid-cols-1 lg:row-start-2 lg:col-start-1 lg:ml-[10%] lg:col-span-1`}>
                        <div className={`absolute row-start-1 z-10 col-start-1  justify-self-center -translate-y-[40%]`}>
                            <ProfilePicture pageId={parseInt(pageId)} />
                        </div>
                    </div>

                    <div className={`hidden lg:flex justify-end row-start-2 col-start-1`}>
                        <div className={`-translate-y-[40%]`}>
                            <ProfilePicture pageId={parseInt(pageId)} />
                        </div>
                    </div>



                    <div className={`row-start-2 col-start-3 justify-self-end mt-2 sm:mt-4 w-full h-min flex flex-col items-end gap-y-4 lg:hidden`}>
                        <div className={`h-min w-min rounded-2xl bg-primary px-6 py-1.5 sm:px-10 sm:py-2 flex justify-center items-center`}>
                            <p className={`text-primary-foreground font-lexend font-medium text-[10px] sm:text-[12px]`}>ENSIA</p>
                        </div>

                        <Button size={'sm'} variant={'outline'} className={`h-min border-foreground py-1 px-2 sm:px-6 sm:py-1.5`}>
                            <p className={`font-lexend text-[10px] sm:text-[12px] font-medium`}>Edit profile</p>
                        </Button>
                    </div>



                    <div className={`row-start-3 col-start-1 col-span-3 max-w-[500px] sm:max-w-[600px] lg:max-w-[2000px] justify-self-center w-full flex justify-between mt-4 lg:row-start-2 lg:col-start-2 lg:col-span-1`}>
                        <div className={`flex flex-col gap-y-3 max-w-[60%] lg:max-w-[1000px]`}>
                            <div className={`w-full flex gap-x-20 xl:gap-x-32`}>
                                <p className={`text-font-primary font-lexend font-semibold text-[22px] sm:text-[26px]`}>Moulay Bouabdelli</p>
                                <div className={`hidden lg:flex h-min w-min rounded-2xl bg-primary px-6 py-1.5 sm:px-10 sm:py-2 justify-center items-center`}>
                                    <p className={`text-primary-foreground font-lexend font-medium text-[10px] sm:text-[12px]`}>ENSIA</p>
                                </div>
                            </div>
                            <p className={`text-font-gray text-[8px] sm:text-[10px] font-lexend font-medium`}>National higher school of artificial intelligence</p>
                            <p className={`text-font-gray text-[8px] sm:text-[10px] font-lexend font-medium`}>Expected Graduation year: 2027</p>
                        </div>
                        <div className={`flex flex-col gap-y-2 mt-6 lg:mt-2 lg:gap-y-4`}>
                            <Button size={'sm'} variant={'outline'} className={`hidden lg:block h-min border-foreground py-1 px-2 sm:px-6 sm:py-1.5`}>
                                <p className={`font-lexend text-[10px] sm:text-[12px] font-medium`}>Edit profile</p>
                            </Button>
                            <p className={`text-font-gray text-[10px] sm:text-[12px] font-lexend font-medium`}>moulayhh@gmail.com</p>
                            <p className={`text-font-gray text-[10px] sm:text-[12px] font-lexend font-medium`}>Tiaret-Algeria</p>
                        </div>
                    </div>
                </div>

                <div className={`w-full flex flex-col mt-8 lg:mt-0`}>
                    <ProfileSectionsTab sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
                </div>
            </div>
        </>
    );
}

export default StudentProfile;