import { User } from "@prisma/client";
import { Request } from "express";

declare global {
	namespace Express {
		export interface Request {
			user: User;
		}
	}
}

export interface SignUpRequestParam extends Request {
	body: {
		email: string;
		username: string;
		password: string;
	};
}

export interface SignInRequestParam extends Request {
	body: {
		email: string;
		password: string;
	};
}
