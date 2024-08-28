import { Header } from "./sections/header";
import { Recents } from "./sections/recents";
import { Olders } from "./sections/olders";

export function Widget() {

    return(
        <div className="w-[448px] rounded overflow-hidden">
            <Header/>
            <Recents/>
            <Olders/>
        </div>      
    )
}

