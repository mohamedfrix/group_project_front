'use client'

import ProfileSectionsTab from "@/app/components/ProfileSectionsTab";
import {useState} from "react";
import ProfileSubSectionContent from "@/app/components/ProfileSubSectionContent";

const sections = {
    profile: "Profile",
    posts: "Posts",
    questions: "Questions",
}



function ProfileLowerSections({editable} : {editable?: boolean;}) {

    const [profileViewState, setProfileViewState] = useState<string>('view');
    const [activeSection, setActiveSection] = useState<string>(Object.keys(sections)[0]);

    return (
        <>
            <ProfileSectionsTab sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} editable={editable} profileViewState={profileViewState} setProfileViewState={setProfileViewState} />
            <div className={`mt-8 lg:px-8 w-full`}>
                {
                    activeSection === 'profile' ? (
                        <ProfileSubSectionContent state={profileViewState} />
                    ) : null
                }
            </div>
        </>
    );
}
export default ProfileLowerSections;