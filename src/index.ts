import { generatePassword, verifyPassword, GeneratedPasswordAndHash } from './Modules/Password';

async function generateAdminUser() {
  const genPasswordHashObj: GeneratedPasswordAndHash = await generatePassword('123456789');

}

// To check password.   console.log(await verifyPassword({ password: '123456789', ...genPasswordHashObj }));



(async () => {
  // Todo: Check Login as ADM with hash.

  /**
   * todo: Try/Catch
   * !STEP 1: Saving a new user.
   * * Cyphers with the private key the private fields;
   * * Generate a public key to read that fields
   * * Populate the KeyStorage relation mappings for every ADM user with a new assymetric key by the ADMUser 
   */

  /**
   * !STEP 2.
   * Todo: (try/catch)  
   * * Uncypher the public key to read the fields with private key (Salted Password from the ADMuser);  
  */


})();
