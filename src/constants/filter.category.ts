interface IFields {
  status: string[];
  gender: string[];
}

export const categoryFields: IFields = {
  status: ['Alive', 'Dead', 'Unknown'],
  gender: ['Female', 'Male', 'Genderless', 'Unknown'],
};
