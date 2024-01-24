import { DatePicker } from 'antd';
import { Layout } from 'antd';
import { calc } from 'antd/es/theme/internal';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';


export default function App() {
  return ( 
  <Layout>
   <AppHeader />
    <Layout>
     <AppSider />
      <AppContent />
    </Layout>
  </Layout>
  )
}
