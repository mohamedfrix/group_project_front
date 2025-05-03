'use client';

import ProfilePicture from "@/app/components/ProfilePicture";
import ProfileSecondPicture from "@/app/components/ProfileSecondPicture";
import {useParams} from "next/navigation";
import ProfileInfos from "@/app/components/ProfileInfos";
import ProfileLowerSections from "@/app/components/ProfileLowerSections";



function StudentProfile(){

    const params = useParams();
    const pageId = params.id?.toString() || '';


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

                    <ProfileInfos pageId={parseInt(pageId)} />

                </div>

                <div className={`w-full flex flex-col mt-8 lg:mt-0`}>
                    <ProfileLowerSections pageId={parseInt(pageId)} />
                </div>
            </div>
        </>
    );
}

export default StudentProfile;