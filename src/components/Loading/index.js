import { Spin } from "antd";
import { Loading3QuartersOutlined } from '@ant-design/icons';

export default function Loading() {
    const loadingIcon = <Loading3QuartersOutlined style={{ fontSize: 40, color: '#ff6600' }} spin />;

    return <Spin spinning={true} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }} indicator={loadingIcon} />
}