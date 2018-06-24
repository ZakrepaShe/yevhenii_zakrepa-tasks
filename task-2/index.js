/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  let array1 =  Array.from(arr1);
  let array2 =  Array.from(arr2);
    array2.sort((a, b) => a - b);
    for(let i=0;i<array1.length;i++){
        if (array1[i] !== array2[i]){
            return false
        }
    }
    return true
}

export default haveSameItems;
