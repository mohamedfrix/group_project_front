'use client';

import Image, {StaticImageData} from "next/image";
import {useAuth} from "../../../context/AuthContext";
import { CircleFadingPlus } from 'lucide-react';
import EditProfileSecondPicture from "@/app/components/EditProfileSecondPicture";


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
                            <EditProfileSecondPicture />
                        </div>
                    ) : null
                }
            </div>
        </>
    );
}
export default ProfileSecondPicture;