import Card from "./Card"

const List = ({ reviews }) => {
    if (!reviews) {
        console.log("No array of reviews were provided to the List component.")
        return null
    }

    return (
        <div
            className="
                grid
                grid-cols-1

                gap-4

                md:grid-cols-2

                lg:grid-cols-3
                lg:gap-6
            "
        >
            {reviews?.map((service, idx) => (
                <Card key={idx} {...service} />
            ))}
        </div>
    )
}

export default List
