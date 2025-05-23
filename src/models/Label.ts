export class Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;

  constructor(
    id: number, 
    node_id: string, 
    url: string, 
    name: string, 
    color: string, 
    is_default: boolean, 
    description: string
) {
    this.id = id
    this.node_id = node_id
    this.url = url
    this.name = name
    this.color = color
    this.default = is_default
    this.description = description
  }  
}
