import {ITodo} from "./ITodo.ts";

export interface ITodosObject {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}