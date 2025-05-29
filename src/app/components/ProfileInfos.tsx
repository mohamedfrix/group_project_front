'use client'

import EditProfile from "./EditProfile";
import {useUser} from "../../../context/UserContext";
import {useEffect, useState} from "react";
import User from "../../../model/UserModel";


function ProfileInfos({editable} : {editable?: boolean;}) {

    const {user} = useUser();
    const [userData, setUserData] = useState<User | null>(null);

    useEffect(() => {
        setUserData(user)
    }, [user]);

    return (
        <>
            <div className={`row-start-2 col-start-3 justify-self-end mt-2 sm:mt-4 w-full h-min flex flex-col items-end gap-y-4 lg:hidden`}>
                <div className={`h-min w-min rounded-2xl bg-primary px-6 py-1.5 sm:px-10 sm:py-2 flex justify-center items-center`}>
                    <p className={`text-primary-foreground font-lexend font-medium text-[10px] sm:text-[12px]`}>{userData?.schoolAbbr}</p>
                </div>

                {
                    editable ? (
                        <div className={`z-10`}>
                            <EditProfile />
                        </div>

                    ) : null
                }

            </div>


            <div className={`row-start-3 col-start-1 col-span-3 max-w-[500px] sm:max-w-[600px] lg:max-w-[2000px] justify-self-center w-full flex justify-between mt-4 lg:row-start-2 lg:col-start-2 lg:col-span-1`}>
                <div className={`flex flex-col gap-y-3 max-w-[60%] lg:max-w-[1000px]`}>
                    <div className={`w-full flex gap-x-20 xl:gap-x-32`}>
                        <p className={`text-font-primary font-lexend font-semibold text-[22px] sm:text-[26px]`}>{`${userData?.firstName} ${userData?.lastName}`}</p>
                        <div className={`hidden lg:flex h-min w-min rounded-2xl bg-primary px-6 py-1.5 sm:px-10 sm:py-2 justify-center items-center`}>
                            <p className={`text-primary-foreground font-lexend font-medium text-[10px] sm:text-[12px]`}>{userData?.schoolAbbr}</p>
                        </div>
                    </div>
                    <p className={`text-font-gray text-[8px] sm:text-[10px] font-lexend font-medium`}>{userData?.school}</p>
                    <p className={`text-font-gray text-[8px] sm:text-[10px] font-lexend font-medium`}>{`Expected Graduation year: ${userData?.expectedGraduationYear}`}</p>
                </div>
                <div className={`flex flex-col gap-y-2 mt-6 lg:mt-2 lg:gap-y-4`}>
                    {
                        editable ? (
                            <div className={`hidden lg:block self-end`}>
                                <EditProfile />
                            </div>
                        ) : null
                    }
                    <p className={`text-font-gray text-[10px] sm:text-[12px] font-lexend font-medium`}>{userData?.email}</p>
                    <p className={`text-font-gray text-[10px] sm:text-[12px] font-lexend font-medium`}>{userData?.wilaya}</p>
                </div>
            </div>

        </>
    );
}
export default ProfileInfos;