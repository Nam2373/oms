import AuthGuard from '../../src/components/Authentication/authen'
import MainLayout from '../../src/components/Layout/mainLayout'
import ProfilePage from '../../src/containers/ProfilePage'

const Profile = props => {
  return <ProfilePage />
}

Profile.getLayout = page => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
)
export default Profile
