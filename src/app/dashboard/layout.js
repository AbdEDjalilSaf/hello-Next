"use client";


export default function dashboardLayout({children,notification,renviue,users}){


return (
<div>
<div>{children}</div>
<div style={{display:"flex"}}>
<div style={{display:"flex", flexDirection:"column"}}>
    {renviue}
    {users}
    </div>
    <div style={{display:"flex", flex:1}}>{notification}</div>
</div>






</div>

)
}

