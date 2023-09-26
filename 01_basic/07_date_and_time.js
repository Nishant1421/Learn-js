// Create a new Date object for demonstration
const date = new Date('2023-09-26T14:30:00Z');

// 1. getDate(): Returns the day of the month (1-31)
const dayOfMonth = date.getDate();
console.log(dayOfMonth); // Outputs: 26

// 2. getDay(): Returns the day of the week (0-6, 0=Sunday, 6=Saturday)
const dayOfWeek = date.getDay();
console.log(dayOfWeek); // Outputs: 2 (Tuesday)

// 3. getFullYear(): Returns the year (4 digits)
const year = date.getFullYear();
console.log(year); // Outputs: 2023

// 4. getMonth(): Returns the month (0-11, 0=January, 11=December)
const month = date.getMonth();
console.log(month); // Outputs: 8 (September)

// 5. getHours(): Returns the hour (0-23)
const hours = date.getHours();
console.log(hours); // Outputs: 14

// 6. getMinutes(): Returns the minutes (0-59)
const minutes = date.getMinutes();
console.log(minutes); // Outputs: 30

// 7. getSeconds(): Returns the seconds (0-59)
const seconds = date.getSeconds();
console.log(seconds); // Outputs: 0

// 8. getMilliseconds(): Returns the milliseconds (0-999)
const milliseconds = date.getMilliseconds();
console.log(milliseconds); // Outputs: 0

// 9. toDateString(): Converts the date to a human-readable string without time information
const dateString = date.toDateString();
console.log(dateString); // Outputs: "Tue Sep 26 2023"

// 10. toLocaleString(): Converts the date to a string in a locale-specific format
const localeString = date.toLocaleString();
console.log(localeString);

// 11. toTimeString(): Converts the time portion of the date to a string
const timeString = date.toTimeString();
console.log(timeString); // Outputs: "14:30:00 GMT+0000 (Coordinated Universal Time)"

// 12. toJSON(): Converts the date to a JSON-formatted string
const jsonDate = date.toJSON();
console.log(jsonDate); // Outputs: "2023-09-26T14:30:00.000Z"

// 13. getTime(): Returns the timestamp (milliseconds since January 1, 1970, UTC)
const timestamp = date.getTime();
console.log(timestamp); // Outputs: 1693212600000

// 14. setDate(day): Sets the day of the month (1-31)
date.setDate(20);
console.log(date);

// 15. setFullYear(year): Sets the year (4 digits)
date.setFullYear(2024);
console.log(date);

// 16. setMonth(month): Sets the month (0-11)
date.setMonth(11); // December (0-based)
console.log(date);

// 17. setHours(hours): Sets the hour (0-23)
date.setHours(12);
console.log(date);

// 18. setMinutes(minutes): Sets the minutes (0-59)
date.setMinutes(45);
console.log(date);

// 19. setSeconds(seconds): Sets the seconds (0-59)
date.setSeconds(15);
console.log(date);

// 20. setMilliseconds(milliseconds): Sets the milliseconds (0-999)
date.setMilliseconds(500);
console.log(date);

// 21. toLocaleDateString(): Converts the date to a locale-specific date string
const localDateString = date.toLocaleDateString();
console.log(localDateString);

// 22. toLocaleTimeString(): Converts the time portion to a locale-specific time string
const localTimeString = date.toLocaleTimeString();
console.log(localTimeString);

// 23. getTimezoneOffset(): Returns the time zone offset in minutes between the local time zone and UTC
const timezoneOffset = date.getTimezoneOffset();
console.log(timezoneOffset);

// 24. toString(): Converts the date to a string representation
const stringDate = date.toString();
console.log(stringDate);

// 25. valueOf(): Returns the primitive value of the Date object (same as .getTime())
const value = date.valueOf();
console.log(value);

// 26. toISOString(): Converts the date to an ISO 8601 formatted string
const isoDate = date.toISOString();
console.log(isoDate);

// 27. toUTCString(): Converts the date to a UTC string representation
const utcString = date.toUTCString();
console.log(utcString);

// 28. toISOString(): Converts the date to an ISO 8601 formatted string
const isoDateString = date.toISOString();
console.log(isoDateString);

// 29. toLocaleDateString(): Converts the date to a locale-specific date string
const localeDate = date.toLocaleDateString();
console.log(localeDate);

// 30. toLocaleTimeString(): Converts the time portion to a locale-specific time string
const localeTime = date.toLocaleTimeString();
console.log(localeTime);

// 31. toISOString(): Converts the date to an ISO 8601 formatted string
const isoTimeString = date.toISOString();
console.log(isoTimeString);