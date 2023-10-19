
function ClassItem(props){

  function handleClassClick(classItem) {
    // dispatch(selectClass(classItem));  payload: { id: props.id }
    history.push(`/ClassDetails/${props.id}`);
  }

    return(
        <li
              key={props.ClassID}
              onClick={() => handleClassClick()}
            >
              <h2>{props.Name}</h2>
              
              {/* <p>Date: {classItem.Date}</p>
              <p>Time: {classItem.Time}</p>
              <p>Location: {classItem.Location}</p> */}
            </li>
    )
}
export default ClassItem;