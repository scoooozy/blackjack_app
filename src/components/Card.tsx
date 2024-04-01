import clubs from "../assets/images/cards/clubs.png"
const Card = () => {
    const number = 10
    const suitsMiddle = []
    for(let  i = 0; i < number; i++) {
        suitsMiddle.push(
            <img className="w-6 h-6" src={clubs} alt="Card suit" />
        )
    }
    return (
        <div className="flex bg-white border rounded-md w-40 h-52 p-2">
            <div className="flex justify-start items-center flex-col">
                <h3 className="font-bold text-2xl">10</h3>
                <p><img className="w-5 h-5" src={clubs} alt="Card suit" /></p>
            </div>
            <div className="grow ">
                {suitsMiddle}
            </div>
            <div className="flex rotate-180 justify-start items-center flex-col">
                <h3 className="font-bold text-2xl">10</h3>
                <p><img className="w-5 h-5" src={clubs} alt="Card suit" /></p>
            </div>
        </div>
    )
}

export default Card