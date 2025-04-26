'use client';

interface ProfileSectionsTabProps {
    sections: {[key: string] : string},
    activeSection : string,
    setActiveSection: (section: string) => void
}

function ProfileSectionsTab ({sections, activeSection, setActiveSection} : ProfileSectionsTabProps) {

    return (
        <>
            <div className={`w-full grid grid-rows-[auto_auto] gap-y-1 grid-cols-${Object.keys(sections).length} justify-items-center`}>
                <div className={`row-start-2 col-span-full w-full h-[3px] bg-gray-primary-2`}></div>
                {
                    Object.keys(sections).map((objectKey, index) => {
                        return (
                            <div key={index} className={`row-start-1 w-full cursor-pointer flex justify-center`}
                                onClick={() => {
                                    setActiveSection(objectKey)
                                }}
                            >
                                <p className={`font-lexend font-medium ${objectKey === activeSection ? 'text-foreground' : 'text-gray-primary-3'}`}>{sections[objectKey]}</p>
                            </div>
                        );
                    })
                }

                {
                    Object.keys(sections).map((objectKey, index) => {
                        return (
                            <div key={index} className={`row-start-2 col-start-${index + 1} z-10 w-full h-[3px] ${objectKey === activeSection ? 'bg-primary' : ''}`}></div>
                        );
                    })
                }

            </div>
        </>
    );
}
export default ProfileSectionsTab;