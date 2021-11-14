import { generatePassword, verifyPassword, GeneratedPasswordAndHash } from './Modules/Password';

async function generateAdminUser() {
  const genPasswordHashObj: GeneratedPasswordAndHash = await generatePassword('123456789');

}

// To check password.   console.log(await verifyPassword({ password: '123456789', ...genPasswordHashObj }));



(async () => {



})();
