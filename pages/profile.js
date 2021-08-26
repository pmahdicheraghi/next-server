import useUser from '../library/useUser';
import Layout, { siteTitle } from '../components/layout';

export default function Profile() {
  // Fetch the user client-side
  const { user } = useUser({ redirectTo: '/login' });

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <div>Loading...</div>;
  }

  // Once the user request finishes, show the user
  return (
    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
}