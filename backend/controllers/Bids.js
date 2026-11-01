const createBids = (req, res) => {
    const { requirementId, amount, deliveryDate, terms } = req.body;
    // TODO: Save to database
    res.json({ requirementId, amount, deliveryDate, terms });
};

export { createBids };