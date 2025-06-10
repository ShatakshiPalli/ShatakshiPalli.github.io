"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Clock, Send, Linkedin, Github, Twitter, MessageCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/shatakshi",
      color: "hover:text-blue-400"
    },
    {
      platform: "GitHub",
      icon: Github,
      url: "https://github.com/shatakshi",
      color: "hover:text-gray-300"
    },
    {
      platform: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/shatakshi",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative ML projects and explore new opportunities. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  Let's Connect
                </CardTitle>
                <CardDescription>
                  Ready to discuss your next ML project or explore collaboration opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">shatakshi@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Availability</p>
                    <Badge variant="outline" className="text-green-500 border-green-500/30 bg-green-500/10">
                      Open to opportunities
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-3">Follow me on</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-secondary/50 hover:bg-secondary rounded-lg transition-all duration-300 ${social.color} transform hover:scale-105`}
                        aria-label={`Follow on ${social.platform}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Looking for ML Engineering Talent?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I specialize in building scalable machine learning systems and would love to contribute to your team's success.
                </p>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  View Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>
                  Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                          errors.name ? "border-destructive focus:border-destructive" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive animate-in slide-in-from-left-1 duration-300">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                          errors.email ? "border-destructive focus:border-destructive" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive animate-in slide-in-from-left-1 duration-300">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                        errors.subject ? "border-destructive focus:border-destructive" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive animate-in slide-in-from-left-1 duration-300">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project, goals, or how we can collaborate..."
                      rows={6}
                      className={`resize-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 ${
                        errors.message ? "border-destructive focus:border-destructive" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive animate-in slide-in-from-left-1 duration-300">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-in slide-in-from-bottom-1 duration-300">
                      <p className="text-sm text-green-600 dark:text-green-400">
                        ✅ Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg animate-in slide-in-from-bottom-1 duration-300">
                      <p className="text-sm text-destructive">
                        ❌ Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};