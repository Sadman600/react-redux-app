import React, { useRef, useState } from 'react';

import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method
import { Toast } from 'primereact/toast';
const PopupModal = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }
    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };
    const confirmPosition = (position) => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Proceed Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };
    return (
        <div >
            <Toast ref={toast} />
            <div className='card'>
                <ConfirmDialog />
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning"></Button>
                <Button onClick={() => confirmPosition('up')} icon="pi pi-arrow-up" label="Down" className="p-button-warning"></Button>
                

            </div>
        </div>
    );
};

export default PopupModal;