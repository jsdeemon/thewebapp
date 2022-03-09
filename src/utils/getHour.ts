export function getHour() {
    let Data = new Date()
    let hour = Data.getHours()
    if(+hour == 23 || +hour == 0 || +hour == 1 || +hour == 2 || +hour == 3 || +hour == 4 || +hour == 5 || +hour == 6) {
        return 'moon'
    } else {
        return 'sun'
    }
}