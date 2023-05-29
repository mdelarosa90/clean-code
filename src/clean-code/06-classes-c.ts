(() => {

  // Aplicando el principio de responsabilidad única;
  // Priorizar la composición frente a la herencia
  /*-- TRATAR DE EVITAR LOS EXTENDS--*/

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
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }



  class User {
    email: string;
    lastAccess: Date;
    role: string
    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string,
    lastOpenFolder: string,
  }

  class Settings {
    workingDirectory: string;
    lastOpenFolder: string;
    constructor(
      { workingDirectory,
        lastOpenFolder,
      }: SettingsProps
    ) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    person: Person;
    user: User;
    settings: Settings;
    constructor({birthdate, name, email, gender, role, workingDirectory, lastOpenFolder}: UserSettingsProps) {
      this.person = new Person({name, gender, birthdate});
      this.user = new User({email, role});
      this.settings = new Settings({workingDirectory, lastOpenFolder})
    }
  }

  const userSettings = new UserSettings(
    {
      workingDirectory: 'usr/home',
      lastOpenFolder: '/home',
      email: 'fernando@gmail.com',
      role: 'Admin',
      name: 'Fernando',
      gender: 'M',
      birthdate: new Date('1990-10-10')
    }
  )

  console.log({ userSettings });

})();