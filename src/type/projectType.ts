export interface IProjectItem {
    id: number,
    pName: string,
    tech: string,
    link: string | null,
    introduce: string
}

export type TProjectArr = IProjectItem[];