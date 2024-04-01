import clubs from "../assets/images/cards/clubs.png"
const Card = () => {
    const number = 10
    const suitsMiddle = [[], [], []]
    for (let i = 0; i < 4; i++) {
        suitsMiddle[0].push(
            0
        )
    }
    for (let i = 0; i < 2; i++) {
        suitsMiddle[1].push(
            0
        )
    }
    for (let i = 0; i < 4; i++) {
        suitsMiddle[2].push(
            0
        )
    }
    return (
        <div className="flex bg-white border rounded-md w-40 h-52 p-2">
            <div className="flex justify-start items-center flex-col">
                <h3 className="font-bold text-2xl">10</h3>
                <p><img className="w-5 h-5" src={clubs} alt="Card suit" /></p>
            </div>
            <div className="grow flex items-center justify-between content-between">
                <div>
                    {suitsMiddle[0].map(pack => (
                        <img className="w-7 h-7 mt-3" src={clubs} alt="Card suit" />
                    ))}
                </div>
                <div className="flex flex-col justify-between gap-10">
                    {suitsMiddle[1].map(pack => (
                        <img className="w-7 h-7" src={clubs} alt="Card suit" />
                    ))}
                </div>
                <div>
                    {suitsMiddle[2].map(pack => (
                        <img className="w-7 h-7  mt-3" src={clubs} alt="Card suit" />
                    ))}
                </div>
            </div>
            <div className="flex rotate-180 justify-start items-center flex-col">
                <h3 className="font-bold text-2xl">10</h3>
                <p><img className="w-5 h-5" src={clubs} alt="Card suit" /></p>
            </div>
        </div>
    )
}

export default Card