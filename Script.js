// Toggle sidebar visibility
document.getElementById('toggleBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
});

// Dynamically display the current month and generate the calendar
const calendarBody = document.getElementById('calendarBody');
const currentMonthEl = document.getElementById('currentMonth');

const today = new Date();
const currentMonth = today.toLocaleString('default', { month: 'long' });
const currentYear = today.getFullYear();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

currentMonthEl.textContent = `${currentMonth} ${currentYear}`;

function generateCalendar() {
    let calendarHTML = '';
    let dayCounter = 1;
    
    for (let i = 0; i < 6; i++) {
        let row = '<tr>';
        
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                row += '<td></td>';
            } else if (dayCounter <= daysInMonth) {
                row += `<td>${dayCounter}</td>`;
                dayCounter++;
            } else {
                row += '<td></td>';
            }
        }
        row += '</tr>';
        calendarHTML += row;
    }

    calendarBody.innerHTML = calendarHTML;
}

generateCalendar();

// Dynamic actions on stats boxes
document.getElementById('employeeBox').addEventListener('click', function() {
    alert('Total Employees: 2');
});

document.getElementById('studentBox').addEventListener('click', function() {
    alert('Current Students: 1');
});

document.getElementById('roomBox').addEventListener('click', function() {
    alert('Total Rooms: 2');
});

document.getElementById('mealBox').addEventListener('click', function() {
    alert('Today\'s Meal: None');
});
