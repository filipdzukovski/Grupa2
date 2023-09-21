
export const FruitList = ({listaNaOvosje}) => {

    return(
        <div id="fruit-list">
            <h2>FruitList</h2>
            <ul>
                {/* {listaNaOvosje.map((ovosje,i)=>{
                    return(
                        <li key={i}>{ovosje}</li>
                    )
                })}
                 */}
                 {listaNaOvosje.map((ovosje,i)=>(
                    <li key={i}>{ovosje}</li>
                 ))}
            </ul>
        </div>
    )
}