"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Send } from "lucide-react"

interface ContactFormProps {
  children: React.ReactNode
}

export function ContactForm({ children }: ContactFormProps) {
  const [open, setOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const formData = new FormData(e.currentTarget)

      // Web3Forms endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        // Reset form
        e.currentTarget.reset()
        // Close modal after 2 seconds
        setTimeout(() => {
          setOpen(false)
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get in Touch</DialogTitle>
          <DialogDescription>
            Have a question or want to discuss an opportunity? Send me a message.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""}
          />

          {/* Optional: Redirect after submission (for non-AJAX) */}
          <input type="hidden" name="redirect" value="false" />

          {/* Optional: Custom subject */}
          <input type="hidden" name="subject" value="New Contact from zach7.dev" />

          {/* Optional: Send to specific email */}
          <input type="hidden" name="from_name" value="zach7.dev Contact Form" />

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="What would you like to discuss?"
              rows={5}
              required
              disabled={isSubmitting}
              className="resize-none"
            />
          </div>

          {submitStatus === "success" && (
            <div className="rounded-lg bg-primary/10 p-3 text-sm text-primary">
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              ✗ Something went wrong. Please try again or email hello@zach7.dev directly.
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
