import Hero from "./Hero"
import TextAndImage from "./TextAndImage"
import CenteredText from "./CenteredText"
import Services from "./Services"
import FAQ from "./Faq"
import Reviews from "./Reviews"

export default function PageModules({ modules }) {
    if (!modules) {
        throw new Error("No Page modules were provided.")
        return null
    }

    return modules?.map((module, idx) => {
        switch (module._type) {
            case "hero":
                return <Hero key={idx} idx={idx} {...module} />
            case "textAndImage":
                return <TextAndImage key={idx} idx={idx} {...module} />
            case "centeredText":
                return <CenteredText key={idx} idx={idx} {...module} />
            case "services":
                return <Services key={idx} idx={idx} {...module} />
            case "faq":
                return <FAQ key={idx} idx={idx} {...module} />
            case "reviews":
                return <Reviews key={idx} idx={idx} {...module} />
            default:
                return <div>default</div>
        }
    })
}
