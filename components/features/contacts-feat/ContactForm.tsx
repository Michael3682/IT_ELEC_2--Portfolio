"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { motion } from "motion/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import ContactHeroSection from "@/components/features/contacts-feat/ContactHeroSection"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet
} from "@/components/ui/field"

function useContactForm() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [statusMessage, setStatusMessage] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            setStatus("success")
            setStatusMessage("Message sent! I'll get back to you soon.")
            setForm({ name: "", email: "", subject: "", message: "" })
        } catch {
            setStatus("error")
            setStatusMessage("Something went wrong. Please try again.")
        }
    }

    return { form, status, statusMessage, handleChange, handleSubmit }
}

export default function ContactForm() {
    const { form, status, statusMessage, handleChange, handleSubmit } = useContactForm()

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="w-full flex flex-col gap-10"
        >
            <ContactHeroSection />
            <form className="flex-1 flex flex-col gap-5 p-5 bg-secondary/50 rounded-md backdrop-blur-xl border shadow-lg" onSubmit={handleSubmit}>
                <h1 className="text-xl font-medium pb-3 border-b text-primary w-full">
                    Send a Message
                </h1>
                <FieldSet className="flex-1 flex flex-col">
                    <FieldGroup className="flex-1 flex flex-col gap-5">
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Field className="w-full">
                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                <Input id="name" name="name" type="text" required placeholder="Michael Josh" value={form.name} onChange={handleChange} />
                            </Field>
                            <Field className="w-full">
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" name="email" type="email" required placeholder="michael@email.com" value={form.email} onChange={handleChange} />
                            </Field>
                        </div>
                        <Field>
                            <FieldLabel htmlFor="subject">Subject</FieldLabel>
                            <Input id="subject" name="subject" type="text" required placeholder="Project Inquiry" value={form.subject} onChange={handleChange} />
                        </Field>
                        <Field className="flex-1 flex flex-col">
                            <FieldLabel htmlFor="message">Message</FieldLabel>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Tell me about your project or just say hi..."
                                value={form.message}
                                onChange={handleChange}
                                className="resize-none flex-1"
                            />
                        </Field>
                        {statusMessage && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-sm font-medium ${status === "success" ? "text-green-500" : "text-red-500"}`}
                            >
                                {statusMessage}
                            </motion.p>
                        )}
                        <Button type="submit" disabled={status === "loading"} className="w-full cursor-pointer text-secondary gap-2">
                            {status === "loading" ? "Sending..." : <><Send size={16} /> Send Message</>}
                        </Button>
                    </FieldGroup>
                </FieldSet>
            </form>
        </motion.section>
    )
}