import { expect } from 'chai'
import 'mocha'
import * as td from 'testdouble'

import { Env } from '@base63/common-js'

import { AppConfig, newPublicContentRouter, newPrivateContentRouter } from './content-router'
import { Repository } from './repository'


describe('PublicContentRouter', () => {
    const localAppConfig: AppConfig = {
        env: Env.Local,
        name: 'identity',
        clients: ['core'],
        forceDisableLogging: true,
        logglyToken: null,
        logglySubdomain: null,
        rollbarToken: null
    };

    const stagingAppConfig: AppConfig = {
        env: Env.Staging,
        name: 'identity',
        clients: ['core'],
        forceDisableLogging: true,
        logglyToken: 'A FAKE TOKEN',
        logglySubdomain: 'a-fake-subdomain',
        rollbarToken: null
    };

    const repository = td.object({
    });

    afterEach('reset test doubles', () => {
        td.reset();
    });

    it('can be constructed', () => {
        const identityRouter = newPublicContentRouter(localAppConfig, repository as Repository);

        expect(identityRouter).is.not.null;
    });

    it('can be constructed with prod settings', () => {
        const identityRouter = newPublicContentRouter(stagingAppConfig, repository as Repository);

        expect(identityRouter).is.not.null;
    });
});


describe('PrivateContentRouter', () => {
    const localAppConfig: AppConfig = {
        env: Env.Local,
        name: 'identity',
        clients: ['core'],
        forceDisableLogging: true,
        logglyToken: null,
        logglySubdomain: null,
        rollbarToken: null
    };

    const stagingAppConfig: AppConfig = {
        env: Env.Staging,
        name: 'identity',
        clients: ['core'],
        forceDisableLogging: true,
        logglyToken: 'A FAKE TOKEN',
        logglySubdomain: 'a-fake-subdomain',
        rollbarToken: null
    };

    const repository = td.object({
    });

    afterEach('reset test doubles', () => {
        td.reset();
    });

    it('can be constructed', () => {
        const identityRouter = newPrivateContentRouter(localAppConfig, repository as Repository);

        expect(identityRouter).is.not.null;
    });

    it('can be constructed with prod settings', () => {
        const identityRouter = newPrivateContentRouter(stagingAppConfig, repository as Repository);

        expect(identityRouter).is.not.null;
    });
});
