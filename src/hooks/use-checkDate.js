function useCheckDate(dateToCompare) {
    const realTime = new Date();
    const userSelectedToday =
        realTime.getDate() === dateToCompare.getDate() &&
        realTime.getMonth() === dateToCompare.getMonth() &&
        realTime.getFullYear() === dateToCompare.getFullYear();
    const userSelectedTomorrow =
        realTime.getDate() + 1 === dateToCompare.getDate() &&
        realTime.getMonth() === dateToCompare.getMonth() &&
        realTime.getFullYear() === dateToCompare.getFullYear();
    const isDateThisYear =
        new Date().getFullYear() === dateToCompare.getFullYear();

    return { userSelectedToday, userSelectedTomorrow, isDateThisYear };
}

export default useCheckDate;
