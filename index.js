function calculateTotalTarget(startDate, endDate, totalAnnualTarget) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Helper function to check if a day is a Friday
    function isFriday(date) {
        return date.getDay() === 5;
    }

    // Helper function to calculate working days in a month excluding Fridays
    function getWorkingDaysInMonth(year, month) {
        let totalDays = new Date(year, month + 1, 0).getDate(); // Get total days in month
        let workingDays = 0;
        
        for (let day = 1; day <= totalDays; day++) {
            let date = new Date(year, month, day);
            if (!isFriday(date) && date.getDay() !== 0 && date.getDay() !== 6) {
                workingDays++;
            }
        }
        return workingDays;
    }

    // Helper function to calculate working days between two dates excluding Fridays
    function getWorkedDaysInRange(start, end) {
        let workedDays = 0;
        for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
            if (!isFriday(date) && date.getDay() !== 0 && date.getDay() !== 6) {
                workedDays++;
            }
        }
        return workedDays;
    }

    let daysExcludingFridays = [];
    let daysWorkedExcludingFridays = [];
    let monthlyTargets = [];
    let totalWorkingDays = 0;
    
    // Iterate over the months between the start and end date
    let currentDate = new Date(start);
    
    while (currentDate <= end) {
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        
        let startOfMonth = new Date(year, month, 1);
        let endOfMonth = new Date(year, month + 1, 0);
        
        let daysInMonth = getWorkingDaysInMonth(year, month);
        daysExcludingFridays.push(daysInMonth);
        
        let daysWorkedInMonth = getWorkedDaysInRange(
            Math.max(start, startOfMonth),
            Math.min(end, endOfMonth)
        );
        
        daysWorkedExcludingFridays.push(daysWorkedInMonth);
        totalWorkingDays += daysWorkedInMonth;
        
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    // Calculate proportional target distribution
    daysWorkedExcludingFridays.forEach((daysWorked) => {
        monthlyTargets.push((totalAnnualTarget / totalWorkingDays) * daysWorked);
    });
    
    let totalTarget = monthlyTargets.reduce((acc, curr) => acc + curr, 0);

    return {
        daysExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget
    };
}

// Example usage:
let result = calculateTotalTarget('2024-01-01', '2024-03-31', 5220);
console.log(result);
