const PromptSync = require("prompt-sync"); //dari npm
const greattings = require("./hello.js"); //dari projet
// const { greattings } = require("./hello.js"); //masih error

const prompt = PromptSync();
const n = prompt("siapa namamu? ");
greattings(n);
