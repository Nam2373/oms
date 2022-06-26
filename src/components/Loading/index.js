import { Spin } from "antd";

export default function Loading() {
    return <Spin spinning={true} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />
}