const bubble_sort = (array, key) => {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < array.length-1; i++) {

            if (array[i][key] > array[i+1][key]) {
                var cached_index = array[i];
                array[i] = array[i+1];
                array[i+1] = cached_index;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

export default bubble_sort;