export async function getUser(id: string) {
  const user = await fetch('/api/user');
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

export async function createUser(user: { name: string; email: string }) {
  const response = await fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return responseData.message;
}