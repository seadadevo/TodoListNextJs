'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Button } from './ui/button';
import { Pen, Trash } from 'lucide-react';
import { TodoTableProps } from '@/interfaces';
import { Badge } from './ui/badge';
import { deleteTodoActions } from '@/actions/todo.actions';
import { useState } from 'react';
import Spinner from './Spinner';


export const TodoTable = ({data}: TodoTableProps) => {
  
  const [loadingId , setLoadingId] = useState<string | null>(null);
  
  const onDelete = async (id: string) => {
    setLoadingId(id);
    await deleteTodoActions(id);
    setLoadingId(null);
  }
  return (
    <div className='border rounded-md p-4'>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Body</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data.length === 0 ? 
                    <TableRow>
                        <TableCell colSpan={3} className="text-center text-gray-500">
                            No Todos Found
                        </TableCell>
                    </TableRow>
                    : (
                        data.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">{todo.id.slice(0,3)}...{todo.id.slice(-3)}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.body?.slice(0, 20)}...</TableCell>
                <TableCell>
                  {todo.completed ? (
                    <Badge variant="default" className=" font-bold">Completed</Badge>
                  ) : (
                    <Badge variant="destructive" className=" font-bold">Pending</Badge>
                  )}
                </TableCell>
                
              
                <TableCell className="text-left flex justify-end gap-2">
                  <Button size="icon" variant="ghost">
                    <Pen size={16} />
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => onDelete(todo.id)}  disabled={loadingId === todo.id}>
                  {loadingId === todo.id ? <Spinner /> : <Trash size={16} /> }
                  </Button>
                </TableCell>
              </TableRow>
            ))
                    )
                    }
            </TableBody>
        </Table>
    </div>
  )
}
