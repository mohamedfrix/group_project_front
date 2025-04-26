'use client';

import Image, {StaticImageData} from "next/image";
import {useAuth} from "../../../context/AuthContext";
import { CircleFadingPlus } from 'lucide-react';


interface ProfileSecondPictureProps {
    color?: ColorVariant,
    image?: StaticImageData,
    pageId?: number,
}

enum ColorVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

const colorVariantsClasses = {
    [ColorVariant.PRIMARY]: 'bg-primary-light-lg',
    [ColorVariant.SECONDARY]: 'bg-secondary-light-lg'
}

function ProfileSecondPicture({color, image, pageId} : ProfileSecondPictureProps) {

    const {user, loading} = useAuth();

    return (
        <>
            <div className={`relative w-full h-[100vh] max-h-[200px] lg:max-h-[300px]`}>
                <div className={`w-full h-full rounded-3xl overflow-clip ${colorVariantsClasses[color || ColorVariant.PRIMARY]}`}>
                    {
                        image && (<Image src={image} alt={''} className={`w-full h-full`}/>)
                    }
                </div>
                {
                    user && user.id === pageId ? (
                        <div className={`absolute bottom-0 right-0`}>
                            <div className={`-translate-x-[10px] -translate-y-[10px] w-[fit-content(100%)] h-[fit-content(100%)] px-1.5 py-1.5 hover:bg-primary-light-lg  rounded-full transition-all`}>
                                <CircleFadingPlus strokeWidth={3} size={20} color={"var(--color-foreground)"} className={``} />
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </>
    );
}
export default ProfileSecondPicture;