import {useParams,useLocation} from 'react-router-dom';
export default function Post(){
    const {id}=useParams();
    const urlstring=new URLSearchParams(useLocation().search);
    const name=urlstring.get("name");
    const surname=urlstring.get("surname");
    if(id==1) return (<>id: {id}Iphone 13</>)
    if(id==2) return (<>id: {id}Iphone 14</>)
    if(id) return (<>id: {id}no Items</>)
    if(name && surname) return (<>
    Hello {name} {surname}, How are you?
    </>);
    return (<>
        Iphone 13<br/>
        Iphone 14<br/>
    </>);
}