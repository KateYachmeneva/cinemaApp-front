/* eslint-disable react/prop-types */
import {logout} from "../../../reducers/authSlice";
import  {useSelector, connect} from 'react-redux';



const Exit = (props) => {
    const {token} = useSelector((state) => state.auth);
    console.log (token);
    const handleClick = () =>  props.logout();
    
  return (
    <>
            {token &&
            <div className="page-header__exit" onClick={handleClick}>
                Выход
            </div>
            }
        </>
  )
}

const mapStateToProps = (state) => {
    const { token } = state.auth;
     return { token };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
  });  

export default connect(mapStateToProps, mapDispatchToProps)(Exit);  

