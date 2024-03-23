
export interface ButtonInterface {
    text: string;
    type: string;
    href: string;
    filled?: boolean;
    icon?: JSX.Element;
  }
  
  export interface CardInterface {
    indicator?: string,
    image?: string,
    title: string,
    subtitle?: string,
    body: string,
    btn: ButtonInterface,
    id: number
  }