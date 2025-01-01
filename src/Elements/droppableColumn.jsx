import { useDrop } from "react-dnd";

const DroppableContainer = ({ tasks, key }) => {

  const [{ canDrop, isOver }, dropref] = useDrop({
    accept: 'TASK',
    drop: () => ({
      "hello": "world",
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={dropref} className="tasks" key={key}>
      {isOver && canDrop && <hr style={{height: "5px", borderRadius: "10px", backgroundColor: "var(--color-light-purple)"}}></hr>}
      {tasks}
    </div>
  );
}

export default DroppableContainer;