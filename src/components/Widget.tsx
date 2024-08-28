import { Check, Rocket, X } from "lucide-react"

export function Widget() {
    
    const data = [
        {
            id: 1,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit vero itaque incidunt consequuntur modi perferendis ut?",
            time: "Há 1 min"
        },
        {
            id: 2,
            text: "Labore debitis voluptates facilis eveniet, eos quisquam voluptatem expedita.",
            time: "Há 5 min"
        },
                {
            id: 1,
            text: "Consequuntur quis fuga rem. Libero perferendis recusandae quas magnam. Hic accusamus eum quo molestias.",
            time: "Há 8 min"
        },

    ];

    return(
        <div className="w-[448px] rounded overflow-hidden">
            
            {/* Header */}
            <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
                
                <span className="font-bold text-stone-950 dark:text-zinc-100">
                    Notificações
                </span>
                
                <button className="font-semibold text-xs
                                     text-violet-950 hover:text-violet-700
                                     dark:text-violet-500 dark:hover:text-violet-400">
                    MARCAR TODAS COMO VISTAS
                </button>
            </div>

            {/* Recent Section */}
            <div className="px-5 py-1 text-sm 
                            text-zinc-950 bg-zinc-400
                            dark:text-zinc-400 dark:bg-zinc-950">
                Recentes
            </div>
            <div className="divide-y-2 divide-zinc-400
                                       dark:divide-zinc-950">
                {data.map(item => (
                    <div key={item.id} className="px-8 py-4 flex items-start gap-6
                                                    bg-zinc-300
                                                    dark:bg-zinc-900">
                        
                        <Rocket className="h-6 w-6 text-violet-500 mt-4"/>            
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed font-medium
                                            text-zinc-950
                                            dark:text-zinc-100">
                                {item.text}
                            </p>
                            <div className="text-xxs flex items-center gap-1 
                                            text-zinc-700 
                                            dark:text-zinc-400">
                                <span>Convite</span>
                                <span>-</span>
                                <span>{item.time}</span>
                            </div>                
                        </div>


                        {/* Botoes de acão para notificações recentes */}
                        <div className="flex gap-2 self-center">
                            <button className="h-7 w-7 rounded flex items-center justify-center bg-zinc-800 hover:bg-zinc-700" >
                                <X className="w-4 h-4 text-zinc-50"/>
                            </button>
                            <button className="h-7 w-7 rounded flex items-center justify-center  bg-violet-600 hover:bg-violet-900">
                                <Check className="w-4 h-4 text-zinc-50"/>
                            </button>
                        </div>

                    </div>                
                ))}
            </div>

            {/* Old Section */}
            <div className="px-5 py-1 text-sm 
                            text-zinc-950 bg-zinc-400
                            dark:text-zinc-400 dark:bg-zinc-950">
                Antigas
            </div>

            <div className="divide-y-2 divide-zinc-400
                                       dark:divide-zinc-950">

            {/* método apenas para repetir o data 2x e popular as noticações antigas */}
            {data.flatMap(item => [item, item]).map(item => (
                    <div key={item.id} className="px-8 py-4 flex items-start gap-6
                                                    bg-zinc-300
                                                    dark:bg-zinc-900">
                        
                        <Rocket className="h-6 w-6 text-violet-500 mt-4"/>            
                        <div className="flex-1 flex flex-col gap-2">
                            <p className="text-sm leading-relaxed 
                                            text-zinc-900
                                            dark:text-zinc-400">
                                {item.text}
                            </p>
                            <div className="text-xxs flex items-center gap-1 
                                            text-zinc-700 
                                            dark:text-zinc-400">
                                <span>Convite</span>
                                <span>-</span>
                                <span>{item.time}</span>
                            </div>                
                        </div>
                    </div>                
                ))}
            </div>

        </div>      
    )
}

