import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../db/Lib/PrismaClient.js";
import "dotenv/config";

export const Signup = async (req, res) => {
  try {
    const { email, password, role, fullName, companyName } = req.body;

    if (!email || !password || !fullName || !role) {
      return res.status(400).json({
        message: "Missing Required Credentials (email, password, fullName, role)",
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const createuser = await prisma.user.create({
      data: {
        name: fullName,
        email: email,
        password: hashedPassword,
        role: role,
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

export const Login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Missing Required Credentials (email, password, role)",
      });
    }

    const data = await prisma.user.findUnique({
      where: { email, role },
    });

    if (!data) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, data.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: data.id, email: data.email, role: data.role },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    console.log("User logged in:", data);
    return res.status(200).json({
      user: data,
      token: token,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
