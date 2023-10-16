const ViewItem = ({ item, handleDelete, handleUpdate }) => {
    
    const onDeleteClick = () => {
        handleDelete(item.id);
    };

    const onUpdateClick = () => {
        handleUpdate(item.id);
    }

    return (
        <div key={item.id}>
            <hr />
            <div>
                <span>ID: {item.id}</span>
                <br />
                <span>Title: {item.title}</span>
            </div>
            <div>
                <button
                    style={{ margin: "10px" }}
                    onClick={onDeleteClick}
                >
                    Delete
                </button>
                <button
                    style={{ margin: "10px" }}
                    onClick={onUpdateClick}
                >
                    Update
                </button>
            </div>
        </div>
    )
}

export default ViewItem;
