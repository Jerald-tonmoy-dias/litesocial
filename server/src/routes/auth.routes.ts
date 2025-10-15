import { Router, Request, Response } from "express";

const router = Router();

// POST /api/auth/register
router.post("/register", async (req: Request, res: Response) => {
  // TODO: Add register logic
  res.status(201).json({ message: "Register route works!" });
});

// POST /api/auth/login
router.post("/login", async (req: Request, res: Response) => {
  // TODO: Add login logic
  res.status(200).json({ message: "Login route works!" });
});

// POST /api/auth/forgot-password
router.post("/forgot-password", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Forgot password route works!" });
});

// POST /api/auth/reset-password
router.post("/reset-password", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Reset password route works!" });
});

export default router;
