import Card from "./Card"

const List = ({ services }) => {
    if (!services) {
        console.log("No array of services were provided to the List component.")
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
            {services?.map((service, idx) => (
                <Card key={idx} {...service} />
            ))}
        </div>
    )
}

export default List
