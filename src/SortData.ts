import { Student } from "./interfaces"



export const sortByName = (items: Array<Student>) => {
items.sort((a,b) =>{
    if(a.name > b.name){
        return 1;
    }
    if(a.name < b.name){
        return -1;
    }
    return 0;
})
}

export const GenericSort = <T,>(items: Array<T>, key: keyof T) => {
    items.sort ((a,b) => {
        if(a[key]>b[key])
            return 1;
        if(a[key]<b[key])
            return -1;
        return 0;
    })
    return items;
}