type Eye = {
  shape: string;
  color: string;
}

type User = {
  name: string;
  age: number;
  living: boolean;
  eye: Eye;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: 'Justine',
  age: 17,
  living: true,
  eye: {
    shape: 'round',
    color: 'brown'
  }
};

const isJustineAnAdult: boolean = isAdult(justine);
console.log("Justine is an adult" + (isJustineAnAdult ? " yes"  : " no"))