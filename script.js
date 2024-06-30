document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const additionalInfo = document.getElementById('additional-info');

    learnMoreBtn.addEventListener('click', function() {
        additionalInfo.classList.toggle('hidden');
        learnMoreBtn.textContent = additionalInfo.classList.contains('hidden') ? 'Learn More' : 'Show Less';
    });
  
});
