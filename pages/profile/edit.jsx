import AuthGuard from '../../src/components/Authentication/authen'
import MainLayout from '../../src/components/Layout/mainLayout'
import EditProfilePage from '../../src/containers/EditProfilePage'

const Profile = props => {
  return <EditProfilePage />
}

Profile.getLayout = page => (
  <AuthGuard>
    <MainLayout>{page}</MainLayout>
  </AuthGuard>
)
export default Profile
