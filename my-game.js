let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 3;
let count5 = 4;
let anh1 = document.getElementById('image1');
let anh2 = document.getElementById('image2');
let anh3 = document.getElementById('image3');
let anh4 = document.getElementById('image4');
let anh5 = document.getElementById('image5');


function check1() {
    count1++;
    if (count1 == 1) {
        anh1.src = "img/monkey_part1x1.jpg";
    } else if (count1 == 2) {
        anh1.src = "img/panda_swap_part1x1.jpg";
    } else {
        count1 = 0;
        anh1.src = "img/funny-cat1_part1x1.jpg";
    }
    check()
}

function check2() {
    // console.log(count2)
    count2++;
    if (count2 == 1) {
        anh2.src = "img/monkey_part2x1.jpg"
    } else if (count2 == 2) {
        anh2.src = "img/panda_swap_part2x1.jpg"
    } else {
        count2 = 0;
        anh2.src = "img/funny-cat1_part2x1.jpg"
    }
    check()

}

function check3() {

    count3++;
    if (count3 == 1) {
        anh3.src = "img/monkey_part3x1.jpg"
    } else if (count3 == 2) {
        anh3.src = "img/panda_swap_part3x1.jpg"
    } else {
        count3 = 0;
        anh3.src = "img/funny-cat1_part3x1.jpg"
    }
    check()
}

function check4() {
    count4++;
    if (count4 == 1) {
        anh4.src = "img/monkey_part4x1.jpg"
    } else if (count4 == 2) {
        anh4.src = "img/panda_swap_part4x1.jpg"
    } else {
        count4 = 0;
        anh4.src = "img/funny-cat1_part4x1.jpg"
    }
    check()
}

function check5() {
    count5++;
    if (count5 == 1) {
        anh5.src = "img/monkey_part5x1.jpg"
    } else if (count5 == 2) {
        anh5.src = "img/panda_swap_part5x1.jpg"
    } else {
        count5 = 0;
        anh5.src = "img/funny-cat1_part5x1.jpg"
    }
    check()
}

function check() {
    if (count1 == count2 && count2 == count3 && count3 == count4 && count4 == count5) {
        anh1.style.boxShadow = "pink 4px 4px 9px";
        anh2.style.boxShadow = "pink 4px 4px 9px";
        anh3.style.boxShadow = "pink 4px 4px 9px";
        anh4.style.boxShadow = "pink 4px 4px 9px";
        anh5.style.boxShadow = "pink 4px 4px 9px";
    }else {
        anh1.style.boxShadow = "white 4px 4px 9px";
        anh2.style.boxShadow = "white 4px 4px 9px";
        anh3.style.boxShadow = "white 4px 4px 9px";
        anh4.style.boxShadow = "white 4px 4px 9px";
        anh5.style.boxShadow = "white 4px 4px 9px";
    }
}