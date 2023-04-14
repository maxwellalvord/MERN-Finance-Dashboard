import DashboardBox from '@/components/DashboardBox'
import { useGetProductsQuery } from '@/state/api'


type Props = {}

const Row2 = (props: Props) => {
  const { data } = useGetProductsQuery();
  console.log("🚀 ~ file: Row2.tsx:9 ~ Row2 ~ data:", data)
  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>
    </>
  )
}

export default Row2