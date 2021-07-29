import React, {Fragment} from "react"
import Header from "../Header";
import Slider from "../Slider";

const Page: React.FC = () => {

    return(
        <div className="page">
            <Fragment>
                <Header />
                <Slider />
            </Fragment>
        </div>
    )
}

export default Page