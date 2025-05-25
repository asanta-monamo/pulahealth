  document.getElementById('navToggle').addEventListener('click', function () {
      const nav = document.getElementById('mainNav');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });


        function cancelAppointment() {
      alert("Appointment canceled.");
    }

    function rescheduleAppointment() {
      alert("Appointment rescheduled.");
    }