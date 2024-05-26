function Info_text (){
    return(
        <div className="w-1/3 ml-20 mt-40">
            <h>CITTIC LOGO</h>
            <p>
                CITTIC CUSAT provide a springboard to budding
                entreprenurs who wish to launch themselves
                into the world of technology based business
                carrers. In CITTIC, bright ideas can be developed
                to a product or service using advanced
                technology solutions. This innovation centre is
                designed to provide all the support to make
                business ventures successful.
            </p>
        </div>
    )
}

export default function Page(){
    return (
        <div className="flex ">
            <Info_text />
        </div>
    )
}