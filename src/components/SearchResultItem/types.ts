export type TSearchResultItem = {
  name: string;
  age: number;
  activities: string[];
  id: string;
  handleDeleteMember: (value: string) => void;
};
