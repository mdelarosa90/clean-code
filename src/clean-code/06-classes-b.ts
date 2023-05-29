(() => {

  // No aplicando el principio de responsabilidad única;

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    name: string;
    gender: Gender;
    birthdate: Date;
    constructor({name, gender, birthdate}: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }



  class User extends Person {
    email: string;
    lastAccess: Date;
    role: string
    constructor({email, role, name, gender, birthdate}: UserProps) {
      super({name, gender, birthdate});
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string,
    lastOpenFolder: string,
  }

  class UserSettings extends User {
    workingDirectory: string;
    lastOpenFolder: string;
    constructor(
      {workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate}: UserSettingsProps
    ){
      super({email, role, name, gender, birthdate})
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory
    }
  }

  const userSettings = new UserSettings(
   { workingDirectory: 'usr/home',
    lastOpenFolder: '/home',
    email: 'fernando@gmail.com',
    role: 'Admin',
    name: 'Fernando',
    gender: 'M',
    birthdate: new Date('1990-19-10')}
  )

  console.log({userSettings});

})();