'use client';

import ProfilePicture from "@/app/components/ProfilePicture";
import ProfileSecondPicture from "@/app/components/ProfileSecondPicture";
import {useParams} from "next/navigation";
import ProfileInfos from "@/app/components/ProfileInfos";
import ProfileLowerSections from "@/app/components/ProfileLowerSections";
import { useUser } from "../../../../../context/UserContext";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import {useEffect, useState} from "react";
import {useAuth} from "../../../../../context/AuthContext";



function StudentProfile(){

    const params = useParams();
    const pageId = params.id?.toString() || '';

    const [editable, setEditable] = useState<boolean>(false);
    const {user, loading} = useUser();
    const {authUser, authLoading} = useAuth();


    useEffect(() => {
        if (user && authUser && user.id == authUser.id){
            setEditable(true);
        }else {
            setEditable(false);
        }
    }, [user, authUser]);

    return (
        <>
            {
                !loading && !authLoading ? (
                    <div className={`w-full flex flex-col items-center`}>

                        <div className={`w-full px-4 py-6 grid grid-rows-[auto_auto_auto] grid-cols-3 lg:grid-rows-[auto_auto] lg:grid-cols-[20%_auto] lg:gap-x-12 lg:max-w-[1200px]`}>
                            <div className={`row-start-1 col-start-1 col-span-3 lg:col-span-2`}>
                                <ProfileSecondPicture editable={editable} />
                            </div>



                            <div className={`lg:hidden relative w-full max-w-[500px] sm:max-w-[600px] justify-self-center row-start-2 col-start-1 col-span-3 grid grid-rows-1 grid-cols-1 lg:row-start-2 lg:col-start-1 lg:ml-[10%] lg:col-span-1`}>
                                <div className={`absolute row-start-1 z-10 col-start-1  justify-self-center -translate-y-[40%]`}>
                                    <ProfilePicture editable={editable} />
                                </div>
                            </div>

                            <div className={`hidden lg:flex justify-end row-start-2 col-start-1`}>
                                <div className={`-translate-y-[40%]`}>
                                    <ProfilePicture editable={editable} />
                                </div>
                            </div>

                            <ProfileInfos editable={editable} />

                        </div>

                        <div className={`w-full flex flex-col mt-8 lg:mt-0`}>
                            <ProfileLowerSections editable={editable} />
                        </div>
                    </div>
                ) : (
                    <div className={`w-full h-[100vh] flex items-center justify-center`}>
                        <LoadingSpinner size="lg" color="primary" />
                    </div>
                )
            }


        </>
    );
}

export default StudentProfile;