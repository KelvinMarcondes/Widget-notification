import { Rocket } from "lucide-react";
import { dataNotification } from "./dataNotification";

export function Olders() {

    return(

        <div>
            <div className="px-5 py-1 text-sm  text-zinc-950 bg-zinc-400 dark:text-zinc-400 dark:bg-zinc-950">
                Antigas
            </div>

            <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">

                {/* método apenas para repetir o data 2x e popular as noticações antigas */}
                {dataNotification.flatMap(item => [item, item]).map(item => (
                    
                    <div key={item.id} className="px-8 py-4 flex items-start gap-6 bg-zinc-300 dark:bg-zinc-900">
                        
                        
                        <Rocket className="h-6 w-6 text-violet-500 mt-4"/> 

                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed   text-zinc-900 dark:text-zinc-400">
                                {item.text}
                            </p>
                            <div className="text-xxs flex items-center gap-1  text-zinc-700  dark:text-zinc-400">
                                <span>Convite</span>
                                <span>-</span>
                                <span>{item.time}</span>
                            </div>                
                        </div>

                    </div>                
                ))}
            </div>
        </div>


        
    )}