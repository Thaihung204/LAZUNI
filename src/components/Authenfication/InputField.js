export const InputField = (props) => {
    const { title, type, id, content, value, onChange } = props;

    return (
        <div className="mb-[18px] ">
            <label htmlFor={id} className="block text-[12px] font-normal text-primary mb-[5px]">
                {title}
            </label>
            <input
                type={type}
                id={id}
                placeholder={content}
                value={value} 
                onChange={onChange} 
                className="h-[56px] w-full p-[16px] text-[16px] border border-primary rounded-lg "
            />
        </div>
    );
};


