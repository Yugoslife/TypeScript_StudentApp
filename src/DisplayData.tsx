
interface Item {
    id: number;

}

interface DisplayDataItem<T>{
    items: Array<T>
}

export const DisplayData = <T extends Item>({items} : DisplayDataItem<T>) => {
return (
    <ul>
        {items.map(item=>(
            <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
    </ul>
)
}