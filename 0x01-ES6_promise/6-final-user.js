import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userResult = await signUpUser(firstName, lastName);
    const photoResult = await uploadPhoto(fileName);

    return [
      { status: 'fulfilled', value: userResult },
      { status: 'fulfilled', value: photoResult },
    ];
  } catch (error) {
    return [
      { status: 'rejected', reason: 'Signup system offline' },
      { status: 'rejected', reason: 'Photo upload failed' },
    ];
  }
}
