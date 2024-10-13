# Working Days Target Calculator

This project provides a function to calculate the total target based on the working days between two dates, excluding Fridays, Saturdays, and Sundays. The main purpose is to distribute a total annual target proportionally across months based on the number of working days.


## Project Overview

The **Working Days Target Calculator** is a JavaScript function that helps distribute an annual target across months based on the number of actual working days in each month. It excludes Fridays, weekends (Saturdays and Sundays), and calculates the target proportionally based on the days worked within a specified date range.

## Features


- Calculate working days between two dates, excluding Fridays and weekends.
- Distribute an annual target across months, proportionally based on working days.
- Useful for scenarios where certain weekdays are non-working days, and targets need to be adjusted accordingly.

## Function Details

## `calculateTotalTarget(startDate, endDate, totalAnnualTarget)`

This function takes three parameters:
1. **startDate**: The starting date for the calculation (format: `YYYY-MM-DD`).
2. **endDate**: The ending date for the calculation (format: `YYYY-MM-DD`).
3. **totalAnnualTarget**: The total target for the year.

## Functionality:

- It calculates the number of working days in each month between the start and end dates, excluding Fridays, Saturdays, and Sundays.
- The total target is then distributed proportionally across the months based on the working days.
- The result includes the number of working days in each month, the number of days worked between the start and end dates, the monthly target for each period, and the overall total target.

## Usage

1. **Clone the repository** or download the file containing the function.
2. Include the `calculateTotalTarget` function in your JavaScript project.
3. Call the function by passing the required parameters.

