import './style.css'
export const Order = ({listCount}) => {
    return (
        <div className="center">
            <div className="list-page">
                <h1>Todos os imóveis</h1>
                <h5>{listCount}</h5>
            </div>
        </div>

    )

}