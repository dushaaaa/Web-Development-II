const router = require('express').Router()
const items = [];

router.get("/", async (request, response) => {
    return response.status(200).json({ data: items });
});
  
router.get("/:id", async (request, response) => {
    const foundItem = items.find((obj) => obj.id === Number(request.params.id));
  
    if (!foundItem) {
        return response.status(404).json({ message: "Item not found" });
    }
    return response.status(200).json({ data: foundItem });
});
  
router.post("/", async (request, response) => {
    const obj = {
        id: items.length + 1,
        name: request.body.name,
    };
    
    items.push(obj);
    return response.status(201).json({ message: "Successfully added new item" });
});

router.put("/:id", async (request, response) => {
    const itemId = Number(request.params.id);
    const updatedName = request.body.name;

    const itemIndex = items.findIndex((obj) => obj.id === itemId);

    if (itemIndex === -1) {
        return response.status(404).json({ message: "Item not found" });
    }

    items[itemIndex].name = updatedName;

    return response.status(200).json({ message: "Successfully updated item" });
});

router.delete("/:id", async (request, response) => {
    const itemId = Number(request.params.id);

    const itemIndex = items.findIndex((obj) => obj.id === itemId);

    if (itemIndex === -1) {
        return response.status(404).json({ message: "Item not found" });
    }

    items.splice(itemIndex, 1);

    return response.status(200).json({ message: "Successfully deleted item" });
});

module.exports = router