import ContactForm from "@/components/features/contacts-feat/ContactForm"
import ContactLinks from "@/components/features/contacts-feat/ContactLinks"
import ContactLocation from "@/components/features/contacts-feat/ContactLocation"

export default function Contact() {
    return (
        <div className="container mx-auto px-5 md:px-0 py-20 mt-5 space-y-10">
            <div className="flex flex-col md:flex-row items-stretch gap-7">
                <ContactForm />
                <div className="flex flex-col gap-7 lg:w-max">
                    <ContactLinks />
                    <ContactLocation />
                </div>
            </div>
        </div>
    )
}