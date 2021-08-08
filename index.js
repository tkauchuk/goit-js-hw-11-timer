class CountdownTimer {
    constructor(completionDate = new Date('Jan 1, 2022')) {
        this.countdownTimerId = null;
        this.startingDate = null;
        this.completionDate = completionDate;
        this.timeLeft = null;
        this.daysReference = document.querySelector('[data-value = "days"]');
        this.hoursReference = document.querySelector('[data-value = "hours"]');
        this.minutesReference = document.querySelector('[data-value = "mins"]');
        this.secondsReference = document.querySelector('[data-value = "secs"]');


        this.startCountdown = this.startCountdown.bind(this);
        this.stopCountdown = this.stopCountdown.bind(this);
        this.timeLeftCount = this.timeLeftCount.bind(this);
    }

    startCountdown() {
        this.countdownTimerId = setInterval(this.timeLeftCount, 1000);
    }

    timeLeftCount() {
        this.startingDate = new Date();
        this.timeLeft = Math.floor(this.completionDate - this.startingDate);

        let result = this.timeLeft;

        let days = this.daysLeft(result);
        let hours = this.hoursLeft(result);
        let minutes = this.minutesLeft(result);
        let seconds = this.secondsLeft(result);

        this.daysReference.textContent = days;
        this.hoursReference.textContent = hours;
        this.minutesReference.textContent = minutes;
        this.secondsReference.textContent = seconds;
    }

    daysLeft(time) {
        return Math.floor(time / (1000 * 60 * 60 * 24));
    }

    hoursLeft(time) {
        return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    minutesLeft(time) {
        return  Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    }

    secondsLeft(time) {
        return Math.floor((time % (1000 * 60)) / 1000);
    }

    stopCountdown() {
        clearInterval(this.countdownTimerId);
        
    }
}


const countdown = new CountdownTimer(new Date('Jan 1, 2022'));
countdown.startCountdown();

