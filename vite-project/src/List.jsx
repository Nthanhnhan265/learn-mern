import propTypes from 'prop-types'
function List(props) {
    const listItem = props.listItem; 
    const title = props.title
    let arrLi = []; 
    //do something with listItem

    //render listItem 
    if(listItem) { 
        arrLi = listItem.map(e=>{return <li className='element-list' key={e.id}>{e.name}: <b>{e.calories}</b></li>})

    }

  return(
    <>
    <h3 className='title-list'>{title}</h3>
    <ol> 
        {arrLi}
    </ol>
    </>
  )
}
List.defaultProps = { 
    listItem: [{id: 0 , name: "nothing", calories: 0}],
    title: "nothing"
}
List.propTypes = { 
    listItem: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string, 
        calories: propTypes.number
    }
    )),
    title: propTypes.string
}

export default List