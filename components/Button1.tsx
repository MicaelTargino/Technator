interface Button1Props {
    title: string
}

export const Button1 = ({title}: Button1Props) => {
    return (
        <button className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
                {title}
            </span>
        </button>
    )
}
