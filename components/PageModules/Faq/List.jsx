import Item from "./Item"

const List = ({ questions }) => {
    if (!questions) {
        console.log(
            "No array of questions were provided to the List component."
        )
        return null
    }

    return (
        <div
            className="
                w-full
                flex flex-col

                overflow-hidden
            "
        >
            {questions?.map((service, idx) => (
                <Item key={idx} {...service} />
            ))}
        </div>
    )
}

export default List
