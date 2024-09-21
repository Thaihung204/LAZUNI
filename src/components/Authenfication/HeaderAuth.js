export const HeaderAuth = (props) => {
    const { title, desc } = props;
    return (
        <>
            <h3 className="text-primary text-[30px] font-bold not-italic mb-[5px] ">{title}</h3>
            <p className="text-[#A4A1AA] font-normal text-[16px] mb-[32px]" >{desc}</p>
        </>

    )
}