import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Tabs from 'react-responsive-tabs';
import { useParams } from "react-router-dom";
import { Spinner } from "../../component/forms";
import { apiPostCall } from "../../helper/API";
import ToastMessage from "../../toast";
import MyLocalStorage from "../../util/mylocalStorage";
import GeneralPanel from "./general";
import MenuPanel from "./menu";
import TeamPanel from "./team";
import FocusPanel from "./focus";
import AchievementPanel from "./achievement";
import CustcommentPanel from "./custcomment";
import GalleryPanel from "./gallery";
import SchedulePanel from "./schedule";

const EventTabs = React.memo(() => {
    const [ui, uiRefresh] = useState(-1);
    const pageData = useRef({ init: false, _id: '' });
    const generalAddedList = useRef([]);
    const menuAddedList = useRef([]);
    const teamAddedList = useRef([]);
    const focusAddedList = useRef([]);
    const achievementAddedList = useRef([]);
    const custcommentAddedList = useRef([]);
    const galleryAddedList = useRef([]);
    const scheduleAddedList = useRef([]);
    
    const { tabid } = useParams();
    useEffect(() => {
        (async () => {
            let search = [{ _modal: 'EventList', _find: { userid: MyLocalStorage.getUserId() }, _mode: 'single', _select: 'general menu team focus achievement custcomment gallery schedule' }];
            const res = await apiPostCall('/api/common/common_search', { _list: search });
            if (res.isError) {
                ToastMessage({ type: "error", message: res.Error.response.data.message, timeout: 2000 });
                return;
            } else {
                if (res && res.length === 0) {
                    const newrecord = await apiPostCall('/api/common/common_mutiple_insert', { _list: [{ _modal: 'EventList', _condition: 'new', _data: { userid: MyLocalStorage.getUserId(), general: [], menu: [], team: [], focus: [], achievement: [], custcomment: [], gallery: [], schedule: [] } }] });
                    pageData.current._id = newrecord.upsertedId;
                } else {
                    pageData.current._id = res._id;
                    generalAddedList.current = res.general || [];
                    menuAddedList.current = res.menu || [];
                    teamAddedList.current = res.team || [];
                    focusAddedList.current = res.focus || [];
                    achievementAddedList.current = res.achievement || []; 
                    custcommentAddedList.current = res.custcomment || []; 
                    galleryAddedList.current = res.gallery || []; 
                    scheduleAddedList.current = res.schedule || []; 
                }
                pageData.current.init = true;
                uiRefresh(Date.now());
            }
        })();
        return () => null;
    }, []);
    if (!pageData.current.init) return <div className="flex w-full h-full justify-center items-center"><Spinner size="60" /></div>
    else return (
        <div className="flex px-6 w-full container justify-center mx-auto pb-5">
            <div className="sm:w-full md:w-full xl:w-3/5 mt-20">
                <Tabs
                    selectedTabKey={tabid === 'general' ? 0 : tabid === 'menu' ? 1 : tabid === 'team' ? 2 : tabid === 'focus' ? 3 : tabid === 'achievement' ? 4 : tabid === 'custcomment' ? 5 : tabid === 'gallery' ? 6 : tabid === 'schedule' ? 7 : 0} 
                    transformWidth={600}
                    tabClassName="bg-red-100"
                    items={[{
                        title: 'General',
                        tabClassName: 'customtab',
                        panelClassName: 'custompanel',
                        getContent: () => {
                            return <GeneralPanel generalAddedList={generalAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                        }
                    }, {
                        title: 'Menu',
                        tabClassName: 'customtab',
                        panelClassName: 'custompanel',
                        getContent: () => {
                            return <MenuPanel  menuAddedList={menuAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                        }
                    
                        },{
                            title: 'Team',
                            tabClassName: 'customtab',
                            panelClassName: 'custompanel',
                            getContent: () => {
                                return <TeamPanel  teamAddedList={teamAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                            }
                        
                        },{
                            title: 'Focus',
                            tabClassName: 'customtab',
                            panelClassName: 'custompanel',
                            getContent: () => {
                                return <FocusPanel  focusAddedList={focusAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                            }
                        
                        },{
                            title: 'Achievement',
                            tabClassName: 'customtab',
                            panelClassName: 'custompanel',
                            getContent: () => {
                                return <AchievementPanel  achievementAddedList={achievementAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                            }
                        
                        },{
                            title: 'Customers-comments',
                            tabClassName: 'customtab',
                            panelClassName: 'custompanel',
                            getContent: () => {
                                return <CustcommentPanel  custcommentAddedList={custcommentAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                            }
                        
                        },{
                            title: 'Gallery',
                            tabClassName: 'customtab',
                            panelClassName: 'custompanel',
                            getContent: () => {
                                return <GalleryPanel  galleryAddedList={galleryAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                            }
                        
                        },{
                            title: 'Schedule',
                            tabClassName: 'customtab',
                            panelClassName: 'custompanel',
                            getContent: () => {
                                return <SchedulePanel  scheduleAddedList={scheduleAddedList} pageData={pageData} ui={ui} uiRefresh={uiRefresh} />
                            }
                        
                        }]} />
            </div>
        </div>
    );
});

export default EventTabs;
