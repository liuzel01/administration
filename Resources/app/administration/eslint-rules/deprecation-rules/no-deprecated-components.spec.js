const RuleTester = require('eslint').RuleTester
const rule = require('./no-deprecated-components');

const tester = new RuleTester({
    parser: require.resolve('vue-eslint-parser'),
    parserOptions: { ecmaVersion: 2015 }
})

tester.run('no-deprecated-components', rule, {
    valid: [
        {
            name: 'Empty file',
            filename: 'test.html.twig',
            code: ''
        },
        {
            name: '"mt-button" usage is allowed',
            filename: 'test.html.twig',
            code: `
            <template>
                <mt-button>Hello</mt-button>
            </template>`
        },
        {
            name: '"mt-icon" usage is allowed',
            filename: 'test.html.twig',
            code: `
            <template>
                <mt-icon>Hello</mt-icon>
            </template>`
        }
    ],
    invalid: [
        {
            name: '"sw-button" usage is not allowed',
            filename: 'test.html.twig',
            code: `
<template>
    <sw-button>Hello</sw-button>
</template>`,
            output: `
<template>
    <!-- TODO Codemod: Converted from sw-button - please check if everything works correctly -->
    <mt-button>Hello</mt-button>
</template>`,
            errors: [{
                message: '"sw-button" is deprecated. Please use "mt-button" instead.',
            }]
        },
        {
            name: '"sw-button" usage is not allowed [disableFix]',
            filename: 'test.html.twig',
            options: ['disableFix'],
            code: `
<template>
    <sw-button>Hello</sw-button>
</template>`,
            errors: [{
                message: '"sw-button" is deprecated. Please use "mt-button" instead.',
            }]
        },
        {
            name: '"sw-icon" usage is not allowed',
            filename: 'test.html.twig',
            code: `
<template>
    <sw-icon name="regular-times-s" />
</template>`,
            output: `
<template>
    <!-- TODO Codemod: Converted from sw-icon - please check if everything works correctly -->
    <mt-icon name="regular-times-s" />
</template>`,
            errors: [{
                message: '"sw-icon" is deprecated. Please use "mt-icon" instead.',
            }]
        },
        {
            name: '"sw-icon" usage is not allowed [disableFix]',
            filename: 'test.html.twig',
            options: ['disableFix'],
            code: `
<template>
    <sw-icon name="regular-times-s" />
</template>`,
            errors: [{
                message: '"sw-icon" is deprecated. Please use "mt-icon" instead.',
            }]
        }
    ]
})
