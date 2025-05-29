'use client'

import ProfileSubTitlesTab from "@/app/components/ProfileSubTitlesTab";
import {useEffect, useState} from "react";
import {useSidebar} from "@/components/ui/sidebar";
import {UserApiClient} from "../../../api-client/UserApiClient";


// const profileSections = {
//     academic: "Academic",
//     research: "Research",
//     availability: "Availability",
//     experience: "Experience",
//     statement: "Statement",
// }

function ProfileSubSectionContent({state} : {state: string}) {

    const [profileContent, setProfileContent] = useState<{ content: Array<{ name?: string; components?: Array<{type: string; size: string; weight: string; color: string; value: string}>}> } | null>({ content: [] });
    const [profileSections, setProfileSections] = useState<string[]>([]);
    
    const sideBar = useSidebar();
    
    
    useEffect(() => {
        if (state === 'edit')
            sideBar.setOpen(false);
    }, [state, sideBar]);
    
    useEffect(() => {
        const content = UserApiClient.getUserProfileContent(1) || { content: [] };
        setProfileContent(content);
        
    }, []);
    
    useEffect(() => {
        if (profileContent && profileContent?.content.length > 0){
            const sections = profileContent.content
                .map((section) => section?.name)
                .filter((name): name is string => typeof name === 'string');
            setProfileSections(sections);
        } else {
            // If content is empty, reset sections to empty array
            setProfileSections([]);
        }
    }, [profileContent]);

    const [activeProfileSection, setActiveProfileSection] = useState<string>("");

    useEffect(() => {
        setActiveProfileSection(profileSections[0]);
    }, [profileSections]);

    return (
        <>
            {
                (() => {
                    if (state === 'view') {
                        if (profileSections.length > 0) {
                            return (
                                <ProfileSubTitlesTab sections={profileSections} activeSection={activeProfileSection} setActiveSection={setActiveProfileSection} state={state} content={profileContent} setContent={setProfileContent} />
                            );
                        }else {
                            return (
                                <div className={`w-full min-h-[200px] flex justify-center items-center`}>
                                    <p className={`font-lexend font-semibold text-font-gray-2 text-[22px]`}>Profile Is Empty ...</p>
                                </div>
                            );
                        }
                    } else if (state === 'edit') {
                        return (
                            <ProfileSubTitlesTab sections={profileSections} activeSection={activeProfileSection} setActiveSection={setActiveProfileSection} state={state} content={profileContent} setContent={setProfileContent} />
                        );
                    }
                }) ()
            }

        </>
    );
}

export default ProfileSubSectionContent;