'use client';

import {X} from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import AddProfileSubSection from "@/app/components/AddProfileSubSection";



interface ProfileSubTitlesTabProps {
    sections: string[],
    activeSection : string,
    setActiveSection: (section: string) => void
    state: string;
    content: { content: { name?: string }[] } | null;
    setContent: (content: { content: { name?: string }[] } | null) => void;
}

function ProfileSubTitlesTab({sections, activeSection, setActiveSection, state, content, setContent} : ProfileSubTitlesTabProps) {

    const deleteSection = (section: string) => {
        if (content) {
            const newContent = content.content.filter((item) => item.name !== section);
            setContent({ content: newContent });
        }
    }

    const addSection = (section: string) => {
        if (content) {
            const newContent = content.content.concat({ name: section });
            setContent({ content: newContent });
        }
    }




    return (
        <>
            <div className="w-full flex justify-center ">
                <div className={`min-w-[300px] grid grid-rows-1 grid-cols-[auto_auto] items-center bg-gray-primary-2 rounded-lg pr-6 gap-x-4`}>
                    <div className={`row-start-1 col-start-1 min-h-[40px] w-full max-w-[90vw] md:max-w-[50vw] lg:max-w-[70vw] overflow-x-auto scrollbar-hidden [scrollbar-width:thin] rounded-lg bg-gray-primary-2 px-2 py-2 grid grid-rows-1 grid-cols-${sections.length}`}>
                        {
                            sections.map((section, index) => (
                                <div
                                    key={index}
                                    className={`min-w-[150px] lg:min-w-[200px] row-start-1 cursor-pointer rounded-md flex items-center justify-center gap-x-2 py-1 ${section === activeSection ? "bg-background" : ""}`}
                                    onClick={() => setActiveSection(section)}
                                >
                                    <p className={`font-lexend text-[14px] ${section === activeSection ? "text-foreground" : "text-font-gray"}`}>
                                        {section}
                                    </p>
                                    {
                                        state === 'edit' && section === activeSection ? (
                                            <div className={`cursor-pointer w-[fit-content(100%)] h-[fit-content(100%)] px-1.5 py-1.5 hover:bg-gray-primary-2  rounded-full transition-all`}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent triggering parent onClick
                                                    deleteSection(section);
                                                }}
                                            >
                                                <X size={16} />
                                            </div>
                                        ) : null
                                    }
                                </div>
                            ))
                        }

                    </div>

                    {
                        state === 'edit' ? (
                            <AddProfileSubSection addSection={addSection} />
                        ) : null
                    }

                </div>

            </div>

        </>
    );
}

export default ProfileSubTitlesTab;