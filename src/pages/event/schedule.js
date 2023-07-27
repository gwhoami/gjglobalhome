import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { useContext } from "react";
import AlertDialog from "../../helper/alertDialog";
import ToastMessage from "../../toast";
import { UserContext } from "../../util/maincontext";
import { formList } from "./formLists";
import ScheduleForm from "./scheduleForm";

const SchedulePanel = React.memo(({ scheduleAddedList, pageData, ui, uiRefresh }) => {
    const alertRef = useRef();
    const { scrollRef } = useContext(UserContext);
    const addSchedule = () => {
        let idx = scheduleAddedList.current.findIndex(rec => typeof rec.saved !== 'undefined');
        if (idx !== -1) {
            ToastMessage({ type: 'error', message: 'Please save schedule details!', timeout: 1000 });
            return;
        }
        scheduleAddedList.current.push({ ...formList.schedule, id: nanoid() });
        uiRefresh(Date.now());
        setTimeout(() => scrollRef.current.scrollToBottom(), 200);
    }

    return (
        <div className="w-full">
            <AlertDialog ref={alertRef} title={"Confirm to Delete?"} />
             <div className="flex justify-end">
             <div className="w-3/4 justify-center">
                    <h1>schedule Event Details</h1>
                </div>
                <button
                    className="bg-dodge-d px-3 py-1.5 text-white text-sm shadow-md flex items-center hover:bg-dodge-b"
                    onClick={addSchedule}         
                ><i className='bx bx-plus mr-1 text-lg'></i> Add schedule Event Details</button>
            </div>
            {scheduleAddedList.current.map((item, idx) => (
                <div className="mt-5" key={item.id}>
                    <ScheduleForm
                        form={item}
                        ui={ui}
                        uiRefresh={uiRefresh}
                        alertRef={alertRef}
                        pageData={pageData}
                        recordIndex={idx}
                        scheduleAddedList={scheduleAddedList}
                    />
                </div>
            ))}
        </div>
    );
});

export default SchedulePanel;