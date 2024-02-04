import { useEffect, useReducer, useRef } from 'react';
import './style.scss';

enum ACTIONS {
  UPDATE_CURSOR_POSITION = 'UPDATE_CURSOR_POSITION',
  SET_MOUSE_OVER = 'SET_MOUSE_OVER',
}
interface Action {
  type: ACTIONS;
  payload?: any;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_CURSOR_POSITION:
      return { ...state, cursorPosition: action.payload };
    case ACTIONS.SET_MOUSE_OVER:
      if (state.isMouseOver !== action.payload) {
        return { ...state, isMouseOver: action.payload };
      } else {
        return state;
      }
    default:
      return state;
  }
};
interface State {
  cursorPosition: { x: number; y: number };
  isMouseOver: boolean;
}

const MouseHighlight = () => {
  const initialState: State = {
    cursorPosition: { x: 0, y: 0 },
    isMouseOver: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const myDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      dispatch({
        type: ACTIONS.UPDATE_CURSOR_POSITION,
        payload: { x: event.clientX, y: event.clientY },
      });
    };

    const handleMouseEnter = () => {
      dispatch({ type: ACTIONS.SET_MOUSE_OVER, payload: true });
    };

    const handleMouseLeave = () => {
      dispatch({ type: ACTIONS.SET_MOUSE_OVER, payload: false });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const divPosition = {
    top: state.cursorPosition.y - 50,
    left: state.cursorPosition.x - 50,
  };

  if (myDivRef.current) {
    myDivRef.current.classList.add('dot');
    if (state.isMouseOver) {
      myDivRef.current.classList.remove('hide');
      myDivRef.current.classList.add('show');
    } else {
      myDivRef.current.classList.remove('show');
      myDivRef.current.classList.add('hide');
    }
  }
  return (
    <>
      <p>
        {state.cursorPosition.x} {state.cursorPosition.y}
      </p>
      <p>{state.isMouseOver ? 'yes' : 'no'}</p>
      <div ref={myDivRef} style={divPosition}></div>
    </>
  );
};
export default MouseHighlight;
