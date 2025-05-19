document.addEventListener('DOMContentLoaded', function() {
    const seats = document.querySelectorAll('.seat:not(.rowLegend):not(.reserved)');
    
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            this.classList.toggle('selected');
            updatePriceSummary();
        });
    });
    
    function updatePriceSummary() {
        const selectedSeats = document.querySelectorAll('.seat.selected').length;
        const ticketType = document.getElementById('ticketType');
        let pricePerTicket = 15;
        let ticketTypeName = 'Стандартный';
        
        if (ticketType.value === 'vip') {
            pricePerTicket = 20;
            ticketTypeName = 'VIP';
        } else if (ticketType.value === 'student') {
            pricePerTicket = 10;
            ticketTypeName = 'Студенческий';
        }
        
        const serviceFee = 3; 
        const totalPrice = selectedSeats * pricePerTicket + serviceFee;
        
        const ticketSummaryElement = document.querySelector('.priceRow:nth-child(1)');
        ticketSummaryElement.innerHTML = `
            <span>${selectedSeats} x ${ticketTypeName} билет</span>
            <span>${selectedSeats * pricePerTicket} руб.</span>
        `;
        
        document.querySelector('.totalPrice span:last-child').textContent = 
            `${totalPrice} руб.`;
    }
    
    
    document.getElementById('ticketType').addEventListener('change', updatePriceSummary);
    
    updatePriceSummary();
});