import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";

const Calendar = () => {
const concertDay = new Date(2023, 8, 1); // month는 0부터 시작
const [selectedDate, setSelectedDate] = useState(concertDay);

const monthStart = startOfMonth(selectedDate);
const monthEnd = endOfMonth(monthStart);
const startDate = startOfWeek(monthStart);
const endDate = endOfWeek(monthEnd);

const rows = [];
let days = [];
let day = startDate;

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
    days.push(day);
    day = addDays(day, 1);
    }
    rows.push(days);
    days = [];
}

const isConcertMonth = (date: Date) => {
    return isSameMonth(date, selectedDate);
};

const isConcertDay = (date: Date) => {
    return isSameDay(date, new Date(concertDay));
};

const handleDateClick = (date: Date) => {
    setSelectedDate(date);
};

return (
    <div className="w-[236px] h-[208px]">
    <div className="w-[236px] h-[208px] flex-shrink-0 rounded-[30px] border-solid border-[#6C6C6C] border text-center text-[12px] font-[600] pt-[8px] px-[20px]">
        {format(selectedDate, "yyyy년 M월")}
        <div className="w-[100%] h-[100%] mt-[4px]">
            <div className="flex font-[400] text-[12px]">
                {dayNames.map((dayName) => (
                <div key={dayName} className="w-[20px] h-[20px] flex-shrink-0 mb-[4px] mx-[4px]">
                    <div className="w-[20px] h-[20px] text-[4px] font-[500] flex items-center justify-center">
                    {dayName}
                    </div>
                </div>
                ))}
            </div>
            {rows.map((week, weekIndex) => (
                <div key={weekIndex} className={`flex ${weekIndex > 0 ? "mt-2 mb-2" : ""}`}>
                    {week.map((date, dayIndex) => (
                    <div
                        key={dayIndex}
                        className={`w-[20px] h-[20px] flex-shrink-0 my-[1px] mx-[4px] 
                        ${
                            isConcertDay(date) && !isSameDay(selectedDate, concertDay)
                            ? "border border-solid border-[#c6c6c6] rounded-full flex items-center"
                            : ""
                        } ${
                            isConcertDay(date) && isSameDay(selectedDate, concertDay)
                            ? "bg-[#0047FF] text-[#FFF] rounded-full text-white cursor-pointer "
                            : "cursor-pointer"
                        }`}
                        onClick={() => handleDateClick(date)}
                    >
                        <div className="w-[20px] h-[20px] font-[400] text-[10px] flex items-center justify-center text-center">
                        {format(date, "d")}
                        </div>
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
        {isSameMonth(selectedDate, concertDay) && isSameDay(selectedDate, concertDay) ? (
        <div className="mt-[8px] text-[12px] text-center rounded-[30px] border-b border-[#C6C6C6]">{format(concertDay, "yyyy년 M월 d일")}</div>) 
        : ( <div className="mt-[8px] text-[12px] text-center rounded-[30px] border-b border-[#C6C6C6]">날짜를 선택해주세요.</div> )}
    </div>
);
};

export default Calendar;