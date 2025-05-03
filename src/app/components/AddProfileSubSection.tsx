'use client'

import {
    Dialog, DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {SquarePlus} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";

function AddProfileSubSection({addSection} : {addSection: (sectionName: string) => void}) {

    const [inputValue, setInputValue] = useState<string>('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <div className={`row-start-1 col-start-2 cursor-pointer w-min h-min px-1.5 py-1.5 hover:bg-background rounded-full transition-all`}>
                        <SquarePlus size={20} />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <p className={`font-lexend text-[16px] font-semibold text-foreground`}>Add a profile section</p>
                        </DialogTitle>
                        {/*<DialogDescription>*/}
                            <div className={`mt-6 w-full flex justify-between items-center`}>
                                <Input type={'text'} placeholder={'Section name'} className={`w-full max-w-[70%]`}
                                       onInput={handleInputChange}
                                       value={inputValue}
                                />
                                <DialogClose asChild>
                                    <Button size={'lg'}
                                        onClick={() => {addSection(inputValue); setInputValue('');}}
                                    >
                                        <p className={'font-lexend font-semibold'}>Add</p>
                                    </Button>
                                </DialogClose>
                            </div>
                        {/*</DialogDescription>*/}
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
export default AddProfileSubSection;