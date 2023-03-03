import { Request, Response } from 'express';

export async function getProfile(req: Request, res: Response) {
	return res.status(200).json({
		message: 'Teacher Profile fetched successfully!',
	});
}

export async function updateProfile(req: Request, res: Response) {
	return res.status(200).json({
		message: 'Teacher Profile updated successfully!',
	});
}