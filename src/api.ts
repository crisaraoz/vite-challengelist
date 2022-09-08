import {Note} from "./type";

const api = {
    notes:{
      list: (): Note[] => [
        {
          id: "nota1",
          title: "First title",
          date: "10/10/22",
          archived: false,
          content: "A comment",
          category: ["random"],
          },
          {
            id: "nota2",
            title: "Second title",
            date: "10/10/22",
            archived: false,
            content: "A comment",
            category: ["random"],
            }
      ]
    }
  };

  export default api;