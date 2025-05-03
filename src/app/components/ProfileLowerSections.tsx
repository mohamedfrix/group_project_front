'use client'

import ProfileSectionsTab from "@/app/components/ProfileSectionsTab";
import {useEffect, useState} from "react";
import {UserApiClient} from "../../../api-client/UserApiClient";
import ProfileSubSectionContent from "@/app/components/ProfileSubSectionContent";

const sections = {
    profile: "Profile",
    posts: "Posts",
    questions: "Questions",
}



function ProfileLowerSections({pageId} : {pageId?: number;}) {

    const [editable, setEditable] = useState<boolean>(false);
    const user = UserApiClient.getUser(1);
    const [profileViewState, setProfileViewState] = useState<string>('view');

    useEffect(() => {
        if (user && user.id === pageId)
            setEditable(true);
        else
            setEditable(false);
    }, [pageId, user]);


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