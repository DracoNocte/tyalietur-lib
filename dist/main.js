'use strict';

function hello(name) {
    return {
        name,
        result: `Hello, ${name}!`,
    };
}

exports.hello = hello;
