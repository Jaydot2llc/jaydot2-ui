import { useRef, useState, useEffect, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function ComingSoonModal({ref}: {ref: React.RefObject<HTMLDialogElement | null>}) {
    const [dialogElementContent, setDialogElementContent] = useState<HTMLElement | null>(null);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const comingSoonElement: HTMLElement = document.body!;
        setDialogElementContent(comingSoonElement);
    }, [dialogRef]);

    // useImperativeHandle(ref, () => {
    //     return {
    //       open: () => {
    //         dialogRef.current?.showModal();
    //       },
    //       close: () => {
    //         dialogRef.current?.close();
    //     }
    //   }
    // });
    

    return createPortal(
        <dialog ref={dialogRef} className="flex flex-col mx-auto mt-20 p-4 items-center justify-center bg-slate-200 rounded=md z-40">
            <h2 className="text-4xl text-cyan-900 font-bold">
                Coming Soon!
            </h2>
            <form method="dialog" id="modal-actions">
                <button className="px-4 py-2 mt-4 bg-gray-600 text-white rounded-full hover:bg-gray-800">Close</button>
            </form>
        </dialog>,
        dialogElementContent!
    );
}