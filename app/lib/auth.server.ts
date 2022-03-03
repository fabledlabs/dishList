import { User } from '@prisma/client';
import { Authenticator } from 'remix-auth';

import { sessionStorage } from '~/lib/session.server';

export let authenticator = new Authenticator<User>(sessionStorage, {
	sessionErrorKey: 'fabled-session-error'
});

export async function login(request: Request, redirectTo: string): Promise<void> {
	await authenticator.authenticate('twitter', request, {
		successRedirect: redirectTo,
		failureRedirect: '/',
	});
}

export async function logout(request: Request, redirectTo: string): Promise<void> {
	await authenticator.logout(request, {
		redirectTo,
	});
}