export function Header() {
    

    return( 
        <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
                
            <span className="font-bold text-stone-950 dark:text-zinc-100">
                Notificações
            </span>
                    
            <button className="font-semibold text-xs text-violet-950 hover:text-violet-700 dark:text-violet-500 dark:hover:text-violet-400">
                MARCAR TODAS COMO VISTAS
            </button>
        </div>
    
    )


}