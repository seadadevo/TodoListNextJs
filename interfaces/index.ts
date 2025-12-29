export interface ITodo{
        id: string;
        title: string;
        body?: string | null;
        completed: boolean;
        createdAt?: Date | string; 
        user_Id?: string; 
}

export interface TodoTableProps{
    data: ITodo[] 
}