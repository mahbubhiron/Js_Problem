

// জজ্ঞলের কতদুর পর্যন্ত গেছি, তার ভিতরে কতোগুলো এনিমেল আছে, ধরেনিলাম প্রথম ১০মাইল পর্যন্ত প্রতি মাইলে ৫০টি করে এনিমেল আছে পরের ১০ থেকে ২০ পর্যন্ত আছে ১০০টি করে এবং ২০ থকে পরের গভির জজ্ঞল প্রতি মাইলে আছে ৩০০টি করে |

function depthOfAnimal(depth) {
    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
        // return animal;
    } else if (depth <= 20) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
        // return animal;
    } else {
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
        // return animal;
    }
    return animal;
}
var depth = 17;

console.log(depthOfAnimal(depth));