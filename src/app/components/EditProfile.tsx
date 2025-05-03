import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

function EditProfile() {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={'sm'} variant={'outline'} className={`h-min border-foreground py-1 px-2 sm:px-6 sm:py-1.5`}>
                        <p className={`font-lexend text-[10px] sm:text-[12px] font-medium`}>Edit profile</p>
                    </Button>
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
export default EditProfile;