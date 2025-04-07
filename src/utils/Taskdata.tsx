export type Status= 'todo' | 'in-progress' | 'done'
export type Priority= 'low' | 'mediam' | 'high'
export type Task = {
    title: string,
    id:string,
    status:Status ,
    priority:Priority,
    points?:number
   }

  export const statuses:Status[]=['todo' ,'in-progress','done']
  export const prioritys:Priority[]=['low','mediam','high']


 export const tasks:Array<Task>=[
    {
      title:"Hello",
      id:"BUS-1",
      priority:'low',
      status:'todo',

     points:4,
    },
    {
      title:"Hlllllo",
      id:"BUS-2",
      status:'done',
      priority:'high',
     points:60,
    },
    {
        title:"llo",
        id:"BUS-3",
        status:'in-progress',
        priority:'mediam',
       points:9,
      },
      {
        title:"llo",
        id:"BUS-4",
        status:'in-progress',
        priority:'mediam',
       points:9,
      },
      ]