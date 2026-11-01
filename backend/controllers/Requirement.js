import prisma from "../db/Lib/PrismaClient.js";

const postRequirement = (req, res) => {
    const { title, description, category, quantity, unit, budget, deliveryDate } = req.body;
    // TODO: Save to database
    res.json({ title, description, category, quantity, unit, budget, deliveryDate });
};

export { postRequirement };