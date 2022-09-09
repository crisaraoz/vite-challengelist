import {Note} from "./type";

const api = {
    notes:{
      list: (): Note[] => {
        try{
         return JSON.parse(localStorage.getItem('todos') || "[]");
      }catch (error){
        return [];
       }
      },
      
      set: (notes: Note[] ) => {
        localStorage.setItem('todos', JSON.stringify(notes));
      },
    },
  };

  export default api;