/**
 * @package admin
 */

import './page/index';
import './view/sw-login-login';
import './view/sw-login-recovery';
import './view/sw-login-recovery-info';
import './view/sw-login-recovery-recovery';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';
import zhCN from './snippet/zh-CN.json';

const { Module } = Shopware;

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
Module.register('sw-login', {
    type: 'core',
    name: 'login',
    title: 'sw-login.general.mainMenuItemsGeneral',
    description: 'sw-login.general.description',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#F19D12',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB,
        'zh-CN': zhCN,
    },

    routes: {
        index: {
            component: 'sw-login',
            path: '/login',
            alias: '/signin',
            coreRoute: true,
            redirect: {
                name: 'sw.login.index.login',
            },
            props: {
                default: (route) => {
                    return {
                        hash: route.params.hash,
                    };
                },
            },
            children: {
                login: {
                    component: 'sw-login-login',
                    path: '',
                },
                recovery: {
                    component: 'sw-login-recovery',
                    path: 'recovery',
                },
                recoveryInfo: {
                    component: 'sw-login-recovery-info',
                    path: 'info',
                },
                userRecovery: {
                    component: 'sw-login-recovery-recovery',
                    path: 'user-recovery/:hash',
                },
            },
        },
    },
});
