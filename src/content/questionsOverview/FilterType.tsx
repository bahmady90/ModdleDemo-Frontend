
type FormFilterTypProps = {
    filterByType: string,
    setFilterByType: (e: string) => void,
}


export default function FilterType({filterByType, setFilterByType} : FormFilterTypProps){

         
    return(
        <div 
            className="w-[10%] text-start font-semibold text-[1rem] gap-x-1 flex items-center justify-center">  
            <label>
                Typ:
            </label>
            <select  
                value={(filterByType)}
                onChange={e => setFilterByType(e.target.value)}
                className={`text-[0.9rem] text-center px-2 py-2 rounded-lg outline-none border-[1px]  font-normal focus:border-2 focus:border-gray-verydark`}
            >   
                <option value={""}>*</option>
                <option value="mc">mc</option>
                <option value="matching" >matching</option>
                <option value="number" >number</option>
                <option value="text" >text</option>
            </select>
        </div>
    )

}