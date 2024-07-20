const characters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

const character_weights = [
    7.8,
    2.0,
    4.0,
    3.8,
    11.0,
    1.4,
    3.0,
    2.3,
    8.6,
    0.21,
    0.97,
    5.3,
    2.7,
    7.2,
    6.1,
    2.8,
    0.19,
    7.3,
    8.7,
    6.7,
    3.3,
    1.0,
    0.91,
    0.27,
    1.6,
    0.44
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function weighted_random(items, weights) {
    const new_items = [];

    for (let i = 0; i < items.length; i += 1) {
        for (let j = 0; j < weights[i] * 100; j += 1) {
            new_items.push(items[i]);
        }
    }

    return new_items[Math.floor(Math.random() * new_items.length)];
}

async function generate() {
    output_box.innerHTML = "";
    generate_button.disabled = true;
    generate_button.innerHTML = "Generateing...";
    for (let i = 0; i < getRandomInt(min_length_input.value, max_length_input.value); i++) {
        output_box.innerHTML += weighted_random(characters, character_weights);
        await sleep(25);
    }
    generate_button.disabled = false;
    generate_button.innerHTML = "Generate";
}

var output_box = document.getElementById("output_box");
var generate_button = document.getElementById("generate_button");
var min_length_input = document.getElementById("min_length_input");
var max_length_input = document.getElementById("max_length_input");

min_length_input.value = 1
max_length_input.value = 24
