// const gcd = (a:number,b:number):number=>a?gcd(b%a,a):b
// function solution(numbers:number[]) {
//   return numbers.reduce(gcd)*numbers.length
// }
function solution(numbers) {
    numbers.sort(function (a, b) { return a - b; });
    var len = numbers.length;
    if (numbers[0] === numbers[len - 1])
        return numbers[0] * len;
    var min = numbers[0];
    var i = len - 1;
    while (i >= 0) {
        if (numbers[i] > numbers[len - 1]) {
            numbers[i] -= numbers[len - 1];
            if (i !== 0) {
                if (numbers[i] > numbers[i - 1]) {
                    numbers[i] -= numbers[i - 1];
                }
                else if (numbers[i] < numbers[i - 1]) {
                    numbers[i - 1] -= numbers[i];
                }
            }
        }
        else if (numbers[i] < numbers[len - 1]) {
            numbers[len - 1] -= numbers[i];
        }
        if (numbers[i] > numbers[0]) {
            numbers[i] -= numbers[0];
        }
        else if (numbers[i] < numbers[0]) {
            numbers[0] -= numbers[i];
        }
        if (min > numbers[len - 1]) {
            min = numbers[len - 1];
        }
        else if (min < numbers[len - 1]) {
            min = numbers[i];
        }
        i--;
    }
    if (len > 3 && numbers.filter(function (num) { return num === numbers[0]; }).length > len / 10)
        return numbers[0] * len;
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
console.log(solution([
    28561, 180625, 57121, 190969, 136900, 181476, 60516, 188356, 8464, 17689,
    154449, 21025, 84681, 139876, 96721, 12996, 35344, 76176, 12100, 127449,
    26569, 2500, 109561, 38809, 132496, 27889, 44521, 3249, 156816, 76729,
    118336, 191844, 226576, 9604, 36481, 82944, 6724, 203401, 163216, 52441,
    51076, 88209, 7225, 180625, 4624, 240100, 206116, 67600, 103684, 30276,
    6561, 200704, 27556, 206116, 35721, 13689, 38809, 145161, 14400, 160801,
    47961, 30276, 51076, 193600, 112896, 214369, 2704, 29929, 134689, 44521,
    94249, 11025, 3721, 16129, 9025, 6889, 141376, 16641, 68644, 229441, 114921,
    217156, 23409, 188356, 204304, 85264, 150544, 239121, 28224, 24649,
]), 90);
