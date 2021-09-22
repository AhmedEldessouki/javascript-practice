function solution(numbers) {
    var max = Math.max.apply(Math, numbers);
    var min = Math.min.apply(Math, numbers);
    if (min === max)
        return min * numbers.length;
    for (var i = numbers.length - 1; i > -1; i--) {
        if (min < numbers[i]) {
            numbers[i] -= min;
        }
        for (var j = i - 1; j > -1; j--) {
            if (min < numbers[j]) {
                numbers[j] -= min;
            }
            if (numbers[j] > numbers[i]) {
                numbers[j] -= numbers[i];
            }
            if (numbers[j] < numbers[i]) {
                numbers[i] -= numbers[j];
            }
        }
    }
    console.log(min, max, numbers.length, numbers);
    return solution(numbers);
}
console.log(solution([6, 9, 21]), 9);
console.log(solution([
    4718134032, 6102933513, 10220829828, 11898348297, 2045581593, 8138629113,
    11428207908, 11120045712, 13309763913, 13590257028, 505940553, 943498113,
    412754832, 7965010017, 6722533737, 6922300992, 1097930193, 203628057,
    539108352, 1387314852, 7793262825, 1959006033, 12163632192, 8270071872,
    6370323300, 1146541200, 10417379748, 6762253200, 3094491300, 14102515257,
    2729236032, 7836024132, 8446966800, 9881371737, 10916944128, 11069094825,
]), 2105892);
