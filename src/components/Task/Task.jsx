import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import { useDispatch } from "react-redux";


export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id))

  return (
    <div className={css.wrapper}>
      <div class="checkbox">
        <input onTouchMove={handleToggle} onChange={handleToggle} defaultChecked={task.completed} type="checkbox" id="check7" className={css.check} />
        <label for="check7" className={css.label}>
          <svg viewBox="0 0 100 100" height="50" width="50">
            <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
            <g transform="translate(0,-952.36216)" id="layer1">
              <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" strokeWidth="3" className={css.path1} />
            </g>
          </svg>
        </label>
      </div>
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
