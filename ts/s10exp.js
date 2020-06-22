"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodbye = exports.hello = void 0;
function hello() {
    console.log('hello export');
}
exports.hello = hello;
function local() {
    console.log('hello local');
}
function bye() {
    console.log('bye');
}
exports.goodbye = bye;
