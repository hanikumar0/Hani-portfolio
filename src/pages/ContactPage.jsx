import { PageLayout } from "../components/PageLayout";
import { ContactSection } from "../components/ContactSection";

export const ContactPage = () => {
    return (
        <PageLayout>
            <div className="pt-20">
                <ContactSection />
            </div>
        </PageLayout>
    );
};
