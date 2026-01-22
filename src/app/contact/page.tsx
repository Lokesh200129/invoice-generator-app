import ChildPage from './ChildPage'
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Support",
    description: "Have questions about Easy Invoice? Reach out to our team for help with your professional invoicing needs.",
};

const Main = () => {
    return (<ChildPage />)
}
export default Main