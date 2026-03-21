import './Alert.css';

/* INLINE STYLE
export const Alert = ({children, type='success'}) => {
    return <div className='alert' style={{
        backgroundColor: type==='success' ? "#10b981": 'red',
        color:'black',
        padding:'16px',
        borderRadius:'8px',
        marginBottom: '16px',
    }}>{ children }</div>
};
*/

export const Alert = ({children, type='success'}) => {
    return <div className={`alert ${type}`}>{ children }</div>
};