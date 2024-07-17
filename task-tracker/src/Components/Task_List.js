import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { LuBadge, LuClipboardEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

function Task_List({ task, description, date, index, deleteTask, editTask, handleComplete, isCompleted }) {
    return (
        <div className="w-full mt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div
                    className="flex flex-col md:flex-row items-center justify-between bg-gray-800 bg-opacity-50 py-2 px-4 rounded-lg w-full md:w-[80%] cursor-pointer"
                    onClick={() => handleComplete(index)}
                >
                    <div className="flex flex-row md:flex-row md:items-center md:gap-4">
                        <h2 className="text-white text-[1.5rem] mr-4 md:mr-0">{index + 1}.</h2>
                        <div className="flex flex-col justify-start">
                            <h1 className="text-white text-[1.2rem]" style={{ lineHeight: '1.12rem' }}>{task}</h1>
                            <p className="text-white text-xs text-start">{description}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                        <p className="text-white text-sm mt-2 md:mt-0">{date}</p>
                        {
                            isCompleted ? (
                                <HiBadgeCheck className="text-[#7DCFB6] text-2xl" />
                            ) : (
                                <LuBadge size={23} className="text-[#EBF4F6] text-2xl" />
                            )
                        }
                    </div>
                </div>
                <div className="flex w-full md:w-[30%] gap-2">
                    <div className="bg-gray-800 bg-opacity-50 px-2 py-3 rounded-lg w-full md:w-[100%]">
                        {
                            isCompleted ? (
                                <button className="text-[#D6BD98] w-full text-[1.12rem] flex items-center justify-center gap-2" onClick={editTask} disabled={isCompleted}>
                                    <LuClipboardEdit className="text-[#D6BD98]" />
                                    Update
                                </button>
                            ) : (
                                <button className="text-[#D6BD98] w-full text-[1.12rem] flex items-center justify-center gap-2" onClick={editTask}>
                                    <LuClipboardEdit className="text-[#D6BD98]" />
                                    Update
                                </button>
                            )
                        }
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 px-2 py-3 rounded-lg w-full md:w-[100%]">
                        <button className="text-[#FF7777] w-full text-[1.12rem] flex items-center justify-center gap-2" onClick={() => deleteTask(index)}>
                            <MdDelete size={20} className="text-[#FF7777]" />
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task_List;
