import ChildPage from './ChildPage'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read our commitment to your data security. We explain how Easy Invoice handles your information with total transparency.",
};

const Main = () => {
    return (<ChildPage />)
}
export default Main