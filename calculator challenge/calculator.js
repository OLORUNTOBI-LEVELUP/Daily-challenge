function areaOfaParallogram(base, height, decimalPlace) {
    const area = base * height;
    return area.toFixed(decimalPlace);
}
console.log(areaOfaParallogram(base, height, decimalPlace));

function volumeOfaCylinder(radius, height) {
    const pi = 3.142;
    const area = pi * radius * radius * height;
    return area;
}
console.log(volumeOfaCylinder(radius, height));


function areaOfaRectangle(length, breadth) {
    return length * breadth;
}
console.log(areaOfaRectangle(length, breadth));