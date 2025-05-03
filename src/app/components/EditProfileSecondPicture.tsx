import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {CircleFadingPlus} from "lucide-react";

function EditProfileSecondPicture(){
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <div className={`cursor-pointer -translate-x-[10px] -translate-y-[10px] w-[fit-content(100%)] h-[fit-content(100%)] px-1.5 py-1.5 hover:bg-primary-light-lg  rounded-full transition-all`}>
                        <CircleFadingPlus strokeWidth={3} size={20} color={"var(--color-foreground)"} className={``} />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default EditProfileSecondPicture;