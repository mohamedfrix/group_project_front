
import EditProfilePicture from "@/app/components/EditProfilePicture";


interface ProfilePictureProps {
    editable?: boolean,
}

function ProfilePicture ({editable} : ProfilePictureProps) {

    return (
        <>
            <div className={`relative h-[140px] w-[140px] lg:h-[180px] lg:w-[180px]`}>
                <div className={`relative bg-light-primary rounded-full h-full w-full px-1 py-1 overflow-clip`}>
                    <div className={`bg-gray-primary w-full h-full rounded-full flex justify-center items-center`}>
                        {
                            editable ? (
                                <EditProfilePicture />
                            ) : null
                        }
                    </div>
                </div>
                <div className={`absolute  w-[fit-content(100%)] h-[fit-content(100%)] px-1.5 py-1.5 hover:bg-primary-light-lg  rounded-full transition-all`}>
                </div>
            </div>

        </>
    );
}
export default ProfilePicture