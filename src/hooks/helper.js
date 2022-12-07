const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

/**
 *
 * @param startTime
 * @param endTime
 * @param duration
 * @param current_timer
 * @returns {number}
 */
export function pageLoad(startTime, endTime, duration, current_timer) {

    const performanceTiming = window.performance.timing,
        time = ((((performanceTiming.loadEventEnd - performanceTiming.navigationStart) * -1) / 1000) % 50) * 10;

    let current = startTime,
        increment = endTime > startTime ? 1 : -1,
        stepTime = Math.abs(Math.floor((time + duration) / 100));

    const timer = setInterval(function () {
        current += increment;
        current_timer(current);
        if (current >= endTime) {
            clearInterval(timer);
        }
    }, stepTime);

    return timer;
}


export function dsnCN(...args:string) {
    return args.join(' ').trim();
}