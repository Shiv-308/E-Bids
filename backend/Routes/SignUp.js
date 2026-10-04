import jwt from "jsonwebtoken";
import prisma from "../db/Lib/PrismaClient.js";
import "dotenv/config";

export const Signup = async (req, res) => {
  try {
    const { email, password, role, fullName, companyName } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({
        message: "Missing Required Credentials (email, password, fullName)",
      });
    }

    const data = await prisma.user.findUnique({
      where: { email },
    });

    if (data) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const createuser = await prisma.user.create({
      data: {
        name: fullName,
        email: email,
        password: password,
        role: role || "user",
        companyName: companyName || null,
      },
    });

    const token = jwt.sign(
      { id: createuser.id, email: createuser.email, role: createuser.role },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    console.log("User created:", createuser);
    return res.status(201).json({
      user: createuser,
      token: token,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

