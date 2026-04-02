"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
    Zap,
    Wrench,
    Wind,
    Sparkles,
    Scissors,
    GraduationCap,
    Star,
    CheckCircle2,
    ChevronDown,
    ChevronRight,
    Upload,
    Calendar,
    DollarSign,
    Shield,
    PhoneCall,
    Award,
    ArrowRight,
    Users,
    Clock,
    TrendingUp,
    FileText,
    CreditCard,
    MapPin,
    User,
    Mail,
    Phone,
    Briefcase,
    Layers,
    Heart,
    Hammer,
    Bug,
    Truck,
    Shirt,
    Dumbbell,
    Paintbrush,
    Settings,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const WHO_CAN_JOIN = [
    { label: "Tutoring", icon: GraduationCap, color: "#FEF3C7", accent: "#D97706" },
    { label: "Cleaning", icon: Sparkles, color: "#EDE9FE", accent: "#8B5CF6" },
    { label: "Salon", icon: Scissors, color: "#FCE7F3", accent: "#EC4899" },
    { label: "Bulk Ordering", icon: Layers, color: "#DBEAFE", accent: "#3B82F6" },
    { label: "Loans / EMI", icon: CreditCard, color: "#D1FAE5", accent: "#10B981" },
    { label: "AC Repair", icon: Wind, color: "#DBEAFE", accent: "#3B82F6" },
    { label: "Electrical", icon: Zap, color: "#FFF3CD", accent: "#F59E0B" },
    { label: "Plumbing", icon: Wrench, color: "#D1FAE5", accent: "#10B981" },
    { label: "Painting", icon: Paintbrush, color: "#FCE7F3", accent: "#EC4899" },
    { label: "Carpentry", icon: Hammer, color: "#FEF3C7", accent: "#D97706" },
    { label: "Pest Control", icon: Bug, color: "#DCFCE7", accent: "#16A34A" },
    { label: "Appliance Repair", icon: Settings, color: "#E0F2FE", accent: "#0284C7" },
    { label: "Beauty & Spa", icon: Heart, color: "#FCE7F3", accent: "#DB2777" },
    { label: "Fitness", icon: Dumbbell, color: "#FEF3C7", accent: "#D97706" },
    { label: "Packers & Movers", icon: Truck, color: "#DBEAFE", accent: "#2563EB" },
    { label: "Laundry", icon: Shirt, color: "#EDE9FE", accent: "#7C3AED" },
];

const STEPS = [
    {
        title: "Sign Up",
        desc: "Create your free account with basic details in under 2 minutes.",
        icon: User,
    },
    {
        title: "Upload Documents",
        desc: "Submit your ID, address proof, and certifications securely.",
        icon: Upload,
    },
    {
        title: "Verification",
        desc: "Our team verifies your profile within 24–48 hours.",
        icon: Shield,
    },
    {
        title: "Training",
        desc: "Complete a quick onboarding session to get platform-ready.",
        icon: Award,
    },
    {
        title: "Start Working",
        desc: "Go live, accept bookings and start earning immediately.",
        icon: TrendingUp,
    },
];

const BENEFITS = [
    {
        icon: Calendar,
        title: "Flexible Schedule",
        desc: "Work on your own terms — pick hours that suit your lifestyle.",
        color: "#EDE9FE",
        accent: "#7C3AED",
    },
    {
        icon: DollarSign,
        title: "High Earnings",
        desc: "Earn up to ₹50,000/month with performance-based bonuses.",
        color: "#D1FAE5",
        accent: "#059669",
    },
    {
        icon: Star,
        title: "Regular Bookings",
        desc: "Get a steady stream of pre-vetted customer bookings.",
        color: "#DBEAFE",
        accent: "#2563EB",
    },
    {
        icon: PhoneCall,
        title: "24/7 Support",
        desc: "Our partner support team is always a call or chat away.",
        color: "#FCE7F3",
        accent: "#DB2777",
    },
];

const DOCUMENTS = [
    { label: "Government ID Proof", icon: User, desc: "Aadhaar / Passport / Voter ID" },
    { label: "Address Proof", icon: MapPin, desc: "Utility bill / Rental agreement" },
    { label: "Bank Details", icon: CreditCard, desc: "Account number & IFSC code" },
    { label: "Certifications", icon: Award, desc: "Trade / Skill / Degree certificates" },
];

const TESTIMONIALS = [
    {
        name: "Ramesh Kumar",
        role: "Electrician · Mumbai",
        rating: 5,
        review:
            "Joining was the best decision I made. I now earn 3x more than before, and the bookings keep coming. The platform is super easy to use.",
        initials: "RK",
        color: "#FFF3CD",
        accent: "#F59E0B",
    },
    {
        name: "Priya Sharma",
        role: "Beautician · Delhi",
        rating: 5,
        review:
            "I set my own hours, get paid weekly, and the support team always has my back. Couldn't ask for a better platform to grow my business.",
        initials: "PS",
        color: "#FCE7F3",
        accent: "#EC4899",
    },
    {
        name: "Arjun Nair",
        role: "AC Technician · Bengaluru",
        rating: 4,
        review:
            "Great flow of customers and transparent earnings. The training sessions helped me improve my skills too. Highly recommend!",
        initials: "AN",
        color: "#DBEAFE",
        accent: "#3B82F6",
    },
];

const FAQS = [
    {
        q: "Is there any registration fee?",
        a: "No! Registering as a partner is completely free. We only take a small commission per completed booking.",
    },
    {
        q: "How and when do I get paid?",
        a: "Payments are processed every week directly to your registered bank account, no delays.",
    },
    {
        q: "What documents do I need to submit?",
        a: "You need a government-issued ID, address proof, bank account details, and any relevant professional certifications.",
    },
    {
        q: "Can I work in multiple cities?",
        a: "Yes, you can set your preferred service areas and expand as your business grows.",
    },
    {
        q: "What if I face an issue with a customer?",
        a: "Our 24/7 support team mediates all disputes fairly and ensures your interests are protected.",
    },
];

const SERVICE_OPTIONS = [
    "Tutoring",
    "Cleaning",
    "Salon",
    "Bulk Ordering",
    "Loans / EMI",
    "AC Repair",
    "Electrical",
    "Plumbing",
    "Painting",
    "Carpentry",
    "Pest Control",
    "Appliance Repair",
    "Beauty & Spa",
    "Fitness Trainer",
    "Packers & Movers",
    "Laundry",
    "Other",
];

// ─── Reusable Fade-in wrapper ─────────────────────────────────────────────────

const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

// ─── Multi-Step Form ──────────────────────────────────────────────────────────

const FORM_STEPS = ["Personal Info", "Professional", "Documents", "Review"];

function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("");
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        category: "",
        experience: "",
        location: "",
    });

    const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

    const next = () => setStep((s) => Math.min(s + 1, FORM_STEPS.length - 1));
    const back = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = () => {
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 rounded-3xl bg-white p-12 shadow-soft text-center"
            >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
                <p className="text-slate-500 max-w-sm">
                    Thanks for registering. Our team will review your application and get back to you within
                    24–48 hours.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setStep(0); setForm({ name: "", phone: "", email: "", category: "", experience: "", location: "" }); setAgreed(false); setFileName(""); }}
                    className="mt-2 rounded-xl bg-[#1D2B83] px-8 py-3 text-sm font-semibold text-white hover:bg-[#16236b] transition-colors"
                >
                    Submit Another
                </button>
            </motion.div>
        );
    }

    return (
        <div className="rounded-3xl bg-white shadow-soft overflow-hidden">
            {/* Progress bar */}
            <div className="px-8 pt-8 pb-0">
                <div className="flex items-center gap-0 mb-8">
                    {FORM_STEPS.map((label, i) => (
                        <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-1">
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${i <= step
                                        ? "bg-[#1D2B83] text-white"
                                        : "bg-slate-100 text-slate-400"
                                        }`}
                                >
                                    {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                                </div>
                                <span
                                    className={`hidden sm:block text-[10px] font-semibold transition-colors duration-300 ${i <= step ? "text-[#1D2B83]" : "text-slate-400"
                                        }`}
                                >
                                    {label}
                                </span>
                            </div>
                            {i < FORM_STEPS.length - 1 && (
                                <div
                                    className={`flex-1 h-0.5 mx-2 transition-colors duration-500 ${i < step ? "bg-[#1D2B83]" : "bg-slate-200"
                                        }`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Form body */}
            <div className="px-8 pb-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.28 }}
                    >
                        {step === 0 && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Personal Information</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField icon={<User className="h-4 w-4" />} placeholder="Full Name" value={form.name} onChange={(v) => update("name", v)} />
                                    <InputField icon={<Phone className="h-4 w-4" />} placeholder="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} type="tel" />
                                </div>
                                <InputField icon={<Mail className="h-4 w-4" />} placeholder="Email Address" value={form.email} onChange={(v) => update("email", v)} type="email" />
                                <InputField icon={<MapPin className="h-4 w-4" />} placeholder="City / Location" value={form.location} onChange={(v) => update("location", v)} />
                            </div>
                        )}

                        {step === 1 && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Professional Details</h3>
                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <select
                                        value={form.category}
                                        onChange={(e) => update("category", e.target.value)}
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 focus:border-[#1D2B83] focus:outline-none focus:ring-2 focus:ring-[#1D2B83]/20 transition-all"
                                    >
                                        <option value="">Select Service Category</option>
                                        {SERVICE_OPTIONS.map((o) => (
                                            <option key={o}>{o}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                </div>
                                <div className="relative">
                                    <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                    <select
                                        value={form.experience}
                                        onChange={(e) => update("experience", e.target.value)}
                                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-700 focus:border-[#1D2B83] focus:outline-none focus:ring-2 focus:ring-[#1D2B83]/20 transition-all"
                                    >
                                        <option value="">Years of Experience</option>
                                        <option>Less than 1 year</option>
                                        <option>1–3 years</option>
                                        <option>3–5 years</option>
                                        <option>5+ years</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Upload Documents</h3>
                                <p className="text-sm text-slate-500">
                                    Please upload clear photos or scans. Accepted formats: PDF, JPG, PNG (max 5 MB each).
                                </p>
                                <input
                                    ref={fileRef}
                                    type="file"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="hidden"
                                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                                />
                                <button
                                    onClick={() => fileRef.current?.click()}
                                    className="w-full flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-[#1D2B83]/30 bg-[#F5F3FF] p-8 text-[#1D2B83] cursor-pointer hover:border-[#1D2B83]/60 hover:bg-[#EDE9FE] transition-colors"
                                >
                                    <Upload className="h-8 w-8 opacity-70" />
                                    <span className="text-sm font-semibold">
                                        {fileName ? fileName : "Click to upload documents"}
                                    </span>
                                    <span className="text-xs text-slate-400">ID Proof, Address Proof, Certifications</span>
                                </button>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-5">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Review & Submit</h3>
                                <div className="rounded-2xl bg-slate-50 divide-y divide-slate-100">
                                    {[
                                        ["Name", form.name || "—"],
                                        ["Phone", form.phone || "—"],
                                        ["Email", form.email || "—"],
                                        ["Location", form.location || "—"],
                                        ["Category", form.category || "—"],
                                        ["Experience", form.experience || "—"],
                                        ["Documents", fileName || "Not uploaded"],
                                    ].map(([k, v]) => (
                                        <div key={k} className="flex items-center justify-between px-5 py-3">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{k}</span>
                                            <span className="text-sm font-medium text-slate-800">{v}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Terms */}
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div
                                        onClick={() => setAgreed(!agreed)}
                                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${agreed ? "border-[#1D2B83] bg-[#1D2B83]" : "border-slate-300 bg-white"
                                            }`}
                                    >
                                        {agreed && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
                                    </div>
                                    <span className="text-sm text-slate-600 leading-snug">
                                        I agree to the{" "}
                                        <span className="text-[#1D2B83] font-semibold underline cursor-pointer">
                                            Terms & Conditions
                                        </span>{" "}
                                        and{" "}
                                        <span className="text-[#1D2B83] font-semibold underline cursor-pointer">
                                            Partner Policy
                                        </span>
                                        .
                                    </span>
                                </label>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-8 flex gap-3">
                    {step > 0 && (
                        <button
                            onClick={back}
                            className="flex-1 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                        >
                            Back
                        </button>
                    )}
                    {step < FORM_STEPS.length - 1 ? (
                        <button
                            onClick={next}
                            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#1D2B83] py-3 text-sm font-bold text-white hover:bg-[#16236b] transition-colors"
                        >
                            Continue <ChevronRight className="h-4 w-4" />
                        </button>
                    ) : (
                        <button
                            disabled={!agreed}
                            onClick={handleSubmit}
                            className={`flex-1 rounded-xl py-3 text-sm font-bold text-white transition-colors ${agreed ? "bg-[#1D2B83] hover:bg-[#16236b]" : "bg-slate-300 cursor-not-allowed"
                                }`}
                        >
                            Submit Application
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function InputField({
    icon,
    placeholder,
    value,
    onChange,
    type = "text",
}: {
    icon: React.ReactNode;
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
    type?: string;
}) {
    return (
        <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 focus:border-[#1D2B83] focus:outline-none focus:ring-2 focus:ring-[#1D2B83]/20 transition-all"
            />
        </div>
    );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`rounded-2xl border transition-colors duration-300 cursor-pointer ${open ? "border-[#1D2B83]/30 bg-[#F5F3FF]" : "border-slate-200 bg-white"
                }`}
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-center justify-between px-6 py-4">
                <span
                    className={`text-sm font-semibold ${open ? "text-[#1D2B83]" : "text-slate-800"}`}
                >
                    {q}
                </span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className={`h-5 w-5 ${open ? "text-[#1D2B83]" : "text-slate-400"}`} />
                </motion.div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function JoinAsPartnerPage() {
    const formRef = useRef<HTMLDivElement>(null);
    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <div className="min-h-screen bg-[#FCF8FF] font-sans">

            <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#FCF8FF]/80 backdrop-blur-md">
                <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <Link href="/" className="text-lg font-bold text-[#1D2B83]">
                            ArchitecturalService
                        </Link>
                    </div>
                    <div className="hidden md:block">

                    </div>
                    <button
                        onClick={scrollToForm}
                        className="rounded-xl bg-[#1D2B83] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#16236b] transition-colors"
                    >
                        Register Now
                    </button>
                </div>
            </nav>
            {/* ── 1. HERO ── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#1D2B83] via-[#2a3a9e] to-[#3b4fc0] py-16 px-4">
                {/* Background blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
                    <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
                </div>

                <div className="relative mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
                            Opportunity Awaits
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                    >
                        Earn More.{" "}
                        <span className="text-[#93C5FD]">Work on Your Schedule.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        className="mt-6 text-xl text-white/75 max-w-2xl mx-auto"
                    >
                        Join as a Service Partner and unlock a world of daily bookings, weekly payouts, and
                        complete flexibility.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, delay: 0.35 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={scrollToForm}
                        className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-[#1D2B83] shadow-lg hover:shadow-xl transition-shadow"
                    >
                        Register Now <ArrowRight className="h-4 w-4" />
                    </motion.button>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.5 }}
                        className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
                    >
                        {[
                            { icon: Users, stat: "10,000+", label: "Active Partners" },
                            { icon: Clock, stat: "Flexible", label: "Working Hours" },
                            { icon: DollarSign, stat: "Weekly", label: "Payouts" },
                        ].map(({ icon: Icon, stat, label }, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                    <Icon className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-2xl font-extrabold text-white">{stat}</span>
                                <span className="text-xs text-white/60 font-medium">{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── 2. WHO CAN JOIN ── */}
            <section className="py-24 px-4">
                <div className="mx-auto max-w-6xl">
                    <FadeIn className="text-center mb-14">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D2B83]">
                            Who Can Join
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            We&apos;re Looking for Skilled Professionals
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
                            Whether you&apos;re a seasoned electrician or a passionate tutor, there&apos;s a place for you on
                            our platform.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                        {WHO_CAN_JOIN.map(({ label, icon: Icon, color, accent }, i) => (
                            <FadeIn key={i} delay={i * 0.07}>
                                <motion.div
                                    whileHover={{ scale: 1.06, y: -6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="group aspect-square flex flex-col items-center justify-between rounded-2xl bg-white border border-slate-100 shadow-soft p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="flex-1 flex items-center justify-center w-full">
                                        <div
                                            className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: color }}
                                        >
                                            <Icon className="h-5 w-5" style={{ color: accent }} />
                                        </div>
                                    </div>
                                    <span className="text-center text-[9px] font-bold text-slate-700 uppercase tracking-wider leading-tight">
                                        {label}
                                    </span>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 3. HOW IT WORKS ── */}
            <section className="py-24 px-4 bg-white">
                <div className="mx-auto max-w-6xl">
                    <FadeIn className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D2B83]">
                            How It Works
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            5 Simple Steps to Get Started
                        </h2>
                    </FadeIn>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Connector line */}
                        <div className="absolute top-10 left-0 right-0 h-0.5 bg-slate-200 hidden lg:block" />

                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 lg:gap-4">
                            {STEPS.map(({ title, desc, icon: Icon }, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="relative flex flex-col items-center text-center gap-4">
                                        {/* Step bubble */}
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#1D2B83] to-[#3b4fc0] shadow-md"
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                            <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-[#1D2B83] text-[10px] font-bold text-[#1D2B83]">
                                                {i + 1}
                                            </div>
                                        </motion.div>
                                        <h3 className="font-bold text-slate-900">{title}</h3>
                                        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. BENEFITS ── */}
            <section className="py-24 px-4">
                <div className="mx-auto max-w-6xl">
                    <FadeIn className="text-center mb-14">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D2B83]">
                            Partner Benefits
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Why Partner With Us?
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {BENEFITS.map(({ icon: Icon, title, desc, color, accent }, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <motion.div
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                                    className="group rounded-3xl bg-white border border-slate-100 shadow-soft p-8 flex flex-col gap-5 cursor-pointer hover:shadow-lg transition-shadow"
                                >
                                    <div
                                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: color }}
                                    >
                                        <Icon className="h-7 w-7" style={{ color: accent }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 5. REGISTRATION FORM ── */}
            <section ref={formRef} className="py-24 px-4 bg-white" id="register">
                <div className="mx-auto max-w-2xl">
                    <FadeIn className="text-center mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D2B83]">
                            Get Onboard
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Apply to Become a Partner
                        </h2>
                        <p className="mt-4 text-slate-500">
                            Takes less than 3 minutes. No fees. No commitments.
                        </p>
                    </FadeIn>
                    <MultiStepForm />
                </div>
            </section>

            {/* ── 6. DOCUMENTS REQUIRED ── */}
            <section className="py-24 px-4">
                <div className="mx-auto max-w-5xl">
                    <FadeIn className="text-center mb-14">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D2B83]">
                            Documents Required
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            What You&apos;ll Need to Provide
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {DOCUMENTS.map(({ label, icon: Icon, desc }, i) => (
                            <FadeIn key={i} delay={i * 0.08}>
                                <div className="flex flex-col gap-4 rounded-3xl bg-white border border-slate-100 shadow-soft p-7">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EDE9FE]">
                                        <Icon className="h-6 w-6 text-[#7C3AED]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">{label}</h3>
                                        <p className="mt-1 text-xs text-slate-500">{desc}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                                        <CheckCircle2 className="h-3.5 w-3.5" /> Required
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 7. TERMS & CONDITIONS ── */}
            <section className="py-20 px-4 bg-white">
                <div className="mx-auto max-w-3xl">
                    <FadeIn>
                        <div className="rounded-3xl border border-slate-200 bg-[#F8F7FF] p-10">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1D2B83]">
                                    <FileText className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-extrabold text-slate-900">Terms & Conditions</h2>
                                    <p className="text-sm text-slate-500 mt-1">Last updated: April 2025</p>
                                </div>
                            </div>

                            <p className="text-sm text-slate-600 leading-relaxed">
                                By registering as a partner, you agree to maintain professional conduct, deliver
                                services as described, and follow our platform guidelines. Partners must complete
                                identity verification before receiving bookings. ServicePro reserves the right to
                                suspend accounts that violate quality standards or engage in fraudulent activity.
                                Earnings are subject to platform commission. Disputes will be resolved through
                                our mediation process.
                            </p>

                            <button className="mt-4 text-[#1D2B83] text-sm font-semibold underline hover:text-[#16236b] transition-colors">
                                Read Full Terms →
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── 8. TESTIMONIALS ── */}
            <section className="py-24 px-4">
                <div className="mx-auto max-w-6xl">
                    <FadeIn className="text-center mb-14">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D2B83]">
                            Partner Stories
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Hear from Our Partners
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {TESTIMONIALS.map(({ name, role, rating, review, initials, color, accent }, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="flex flex-col gap-5 rounded-3xl bg-white border border-slate-100 shadow-soft p-8 hover:shadow-lg transition-shadow"
                                >
                                    {/* Stars */}
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, si) => (
                                            <Star
                                                key={si}
                                                className="h-4 w-4"
                                                fill={si < rating ? "#F59E0B" : "none"}
                                                stroke={si < rating ? "#F59E0B" : "#CBD5E1"}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-sm text-slate-600 leading-relaxed flex-1 italic">&ldquo;{review}&rdquo;</p>

                                    <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                                        <div
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                                            style={{ backgroundColor: color, color: accent }}
                                        >
                                            {initials}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">{name}</p>
                                            <p className="text-xs text-slate-500">{role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 9. FAQ ── */}
            <section className="py-24 px-4 bg-white">
                <div className="mx-auto max-w-3xl">
                    <FadeIn className="text-center mb-12">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D2B83]">
                            FAQ
                        </span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            Frequently Asked Questions
                        </h2>
                    </FadeIn>

                    <div className="space-y-3">
                        {FAQS.map((faq, i) => (
                            <FadeIn key={i} delay={i * 0.06}>
                                <FAQItem q={faq.q} a={faq.a} />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 10. FINAL CTA ── */}
            <section className="py-28 px-4">
                <div className="mx-auto max-w-4xl">
                    <FadeIn>
                        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#1D2B83] via-[#2a3a9e] to-[#3b4fc0] p-12 text-center shadow-2xl">
                            {/* Decorative blobs */}
                            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

                            <div className="relative">
                                <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 mb-6">
                                    Ready to Begin?
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                                    Start Your Journey Today
                                </h2>
                                <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
                                    Join 10,000+ professionals already growing their business with ServicePro.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={scrollToForm}
                                    className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-9 py-4 text-base font-extrabold text-[#1D2B83] shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    Register Now <ArrowRight className="h-4 w-4" />
                                </motion.button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Footer strip */}
            <div className="bg-white border-t border-slate-100 py-6 text-center">
                <p className="text-xs text-slate-400">
                    © 2025 ServicePro. All rights reserved.{" "}
                    <span className="text-[#1D2B83] font-semibold cursor-pointer hover:underline">
                        Privacy Policy
                    </span>
                    {" · "}
                    <span className="text-[#1D2B83] font-semibold cursor-pointer hover:underline">
                        Terms
                    </span>
                </p>
            </div>
        </div>
    );
}
