import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {CircleFadingPlus} from "lucide-react";

function EditProfilePicture() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <div className={`cursor-pointer hover:bg-primary-light-foreground px-1 py-1 rounded-full transition-all translate-x-[2px]`}>
                        <CircleFadingPlus strokeWidth={2} size={25} color={"var(--color-foreground)"} className={``} />
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

export default EditProfilePicture;