"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text?: string;
  type?: "text" | "options" | "grade_select" | "branch_select" | "input" | "success" | "faq_info";
  options?: { label: string; action: string }[];
  infoCards?: { title: string; desc: string }[];
}

const GRADES = [
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
];

const BRANCHES = [
  "Mettugadda Branch",
  "Sri Ramakrishna Colony (Yenugonda)",
];

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);

  // Form State
  const [step, setStep] = useState<
    "menu" | "parent_name" | "student_name" | "grade" | "branch" | "phone" | "email" | "message" | "submitting" | "done"
  >("menu");

  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    branch: "",
    phone: "",
    email: "",
    message: "",
  });

  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m-1",
      sender: "bot",
      text: "Namaste! Welcome to Universal Central School, Mahabubnagar. How can we help you today?",
      type: "options",
      options: [
        { label: "🎓 Apply for Admission", action: "start_admissions" },
        { label: "🏫 Campuses & Classes", action: "school_info" },
        { label: "📞 Contact School Desk", action: "call_info" },
      ],
    },
  ]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const addBotMessage = (msg: Omit<ChatMessage, "id" | "sender">) => {
    setMessages((prev) => [
      ...prev,
      {
        ...msg,
        id: "bot-" + Date.now() + Math.random(),
        sender: "bot",
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: "user-" + Date.now(),
        sender: "user",
        text,
      },
    ]);
  };

  const handleOptionClick = (action: string, label: string) => {
    addUserMessage(label);

    if (action === "start_admissions") {
      setStep("parent_name");
      setTimeout(() => {
        addBotMessage({
          text: "We’re delighted to assist with admissions! May we know the Parent or Guardian's full name?",
          type: "text",
        });
      }, 300);
    } else if (action === "school_info") {
      setTimeout(() => {
        addBotMessage({
          text: "Here is key information about Universal Central School:",
          type: "faq_info",
          infoCards: [
            {
              title: "Grades Offered",
              desc: "Nursery, LKG, UKG, and Classes 1 through 7 (English Medium).",
            },
            {
              title: "Two Mahabubnagar Campuses",
              desc: "1. Mettugadda Branch\n2. Sri Ramakrishna Colony Branch (Yenugonda).",
            },
            {
              title: "Foundational Focus",
              desc: "Established in 1994. Over 30 years of nurturing academics, karate, classical dance, and sports.",
            },
          ],
          options: [
            { label: "🎓 Start Admission Enquiry", action: "start_admissions" },
            { label: "📞 Call School Office", action: "call_info" },
            { label: "↩ Back to Main Menu", action: "reset_menu" },
          ],
        });
      }, 300);
    } else if (action === "call_info") {
      setTimeout(() => {
        addBotMessage({
          text: "You can reach our school administration directly during regular school hours:",
          type: "faq_info",
          infoCards: [
            {
              title: "Helpline 1",
              desc: "+91 9848228013",
            },
            {
              title: "Helpline 2",
              desc: "+91 7842383082",
            },
            {
              title: "Office Email",
              desc: "info@universalcentralschool.in",
            },
          ],
          options: [
            { label: "🎓 Start Admission Enquiry", action: "start_admissions" },
            { label: "↩ Back to Main Menu", action: "reset_menu" },
          ],
        });
      }, 300);
    } else if (action === "reset_menu") {
      setStep("menu");
      setTimeout(() => {
        addBotMessage({
          text: "How else can we assist you?",
          type: "options",
          options: [
            { label: "🎓 Apply for Admission", action: "start_admissions" },
            { label: "🏫 Campuses & Classes", action: "school_info" },
            { label: "📞 Contact School Desk", action: "call_info" },
          ],
        });
      }, 300);
    }
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputVal.trim();
    if (!val && step !== "email" && step !== "message") return;

    setInputVal("");

    if (step === "parent_name") {
      setFormData((prev) => ({ ...prev, parentName: val }));
      addUserMessage(val);
      setStep("student_name");
      setTimeout(() => {
        addBotMessage({
          text: `Pleasure to meet you, ${val}! What is your child's (student's) name?`,
        });
      }, 300);
    } else if (step === "student_name") {
      setFormData((prev) => ({ ...prev, studentName: val }));
      addUserMessage(val);
      setStep("grade");
      setTimeout(() => {
        addBotMessage({
          text: `Great! Which grade or class are you exploring for ${val}?`,
          type: "grade_select",
        });
      }, 300);
    } else if (step === "phone") {
      // Basic phone check
      if (val.length < 8) {
        addBotMessage({
          text: "Please enter a valid mobile number (at least 8–10 digits) so our office can contact you.",
        });
        return;
      }
      setFormData((prev) => ({ ...prev, phone: val }));
      addUserMessage(val);
      setStep("email");
      setTimeout(() => {
        addBotMessage({
          text: "Got it! Would you like to provide an email address? (Optional — you can click Skip)",
          type: "options",
          options: [{ label: "Skip Email →", action: "skip_email" }],
        });
      }, 300);
    } else if (step === "email") {
      setFormData((prev) => ({ ...prev, email: val }));
      addUserMessage(val);
      setStep("message");
      setTimeout(() => {
        addBotMessage({
          text: "Do you have any specific query, message, or questions for our principal or admissions desk? (Optional)",
          type: "options",
          options: [{ label: "No questions, submit enquiry →", action: "skip_message" }],
        });
      }, 300);
    } else if (step === "message") {
      setFormData((prev) => ({ ...prev, message: val }));
      addUserMessage(val);
      submitEnquiry({ ...formData, message: val });
    }
  };

  const handleGradeSelect = (grade: string) => {
    setFormData((prev) => ({ ...prev, grade }));
    addUserMessage(grade);
    setStep("branch");
    setTimeout(() => {
      addBotMessage({
        text: "Which campus location is more convenient for your family?",
        type: "branch_select",
      });
    }, 300);
  };

  const handleBranchSelect = (branch: string) => {
    setFormData((prev) => ({ ...prev, branch }));
    addUserMessage(branch);
    setStep("phone");
    setTimeout(() => {
      addBotMessage({
        text: "Please enter your mobile phone number so our admissions coordinator can call you with details:",
      });
    }, 300);
  };

  const handleSkipOption = (action: string) => {
    if (action === "skip_email") {
      addUserMessage("Skipped Email");
      setStep("message");
      setTimeout(() => {
        addBotMessage({
          text: "Do you have any specific query or message for our admissions team? (Optional)",
          type: "options",
          options: [{ label: "No questions, submit enquiry →", action: "skip_message" }],
        });
      }, 300);
    } else if (action === "skip_message") {
      addUserMessage("Submit Enquiry");
      submitEnquiry({ ...formData, message: "No additional comments" });
    }
  };

  const submitEnquiry = async (finalData: typeof formData) => {
    setStep("submitting");
    addBotMessage({
      text: "Recording your enquiry with Universal Central School...",
    });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Admissions (Chatbot)",
          parentName: finalData.parentName,
          studentName: finalData.studentName,
          grade: finalData.grade,
          branch: finalData.branch,
          phone: finalData.phone,
          email: finalData.email,
          message: finalData.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to post enquiry");
      }

      setStep("done");
      setTimeout(() => {
        addBotMessage({
          type: "success",
          text: `Enquiry Recorded Successfully! 🎉\n\nThank you, ${finalData.parentName}. Your enquiry for ${finalData.studentName} (${finalData.grade}) has been received for the ${finalData.branch}. Our admissions coordinator will reach out to you on ${finalData.phone} shortly.`,
          options: [
            { label: "📞 Call School Office Directly", action: "call_info" },
            { label: "Start New Conversation", action: "reset_menu" },
          ],
        });
      }, 500);
    } catch (err) {
      console.error("Chatbot submission error:", err);
      setStep("done");
      addBotMessage({
        text: "We could not connect to the admissions server right now. Please feel free to call our office directly at +91 9848228013 or +91 7842383082.",
        options: [{ label: "↩ Main Menu", action: "reset_menu" }],
      });
    }
  };

  return (
    <>
      {/* Floating Action Button (Bottom Right) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {!isOpen && (
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setHasOpenedBefore(true);
            }}
            aria-label="Open Universal Central School Assistant"
            className="group relative flex items-center gap-2.5 sm:gap-3 rounded-full border border-[#D4A853]/50 bg-gradient-to-r from-[#0B1B3D] via-[#0D214D] to-[#071228] p-2 pr-4 sm:p-2.5 sm:pr-5 text-white shadow-[0_8px_30px_rgba(11,27,61,0.35)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#D4A853] hover:shadow-[0_12px_40px_rgba(212,168,83,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
          >
            {/* Logo Avatar */}
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-[#D4A853]/60 bg-white p-0.5 shadow-sm">
              <Image
                src="/ucs-logo.png"
                alt="UCS crest"
                fill
                sizes="44px"
                className="object-contain p-0.5"
              />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <p className="text-[10px] uppercase tracking-wider text-[#DFB76C] font-bold">
                  UCS Desk
                </p>
              </div>
              <p className="text-xs sm:text-sm font-semibold tracking-tight text-white">
                Admissions & Info
              </p>
            </div>

            {!hasOpenedBefore && (
              <span className="absolute -top-1.5 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A853] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D4A853] text-[9px] font-bold text-[#0B1733] items-center justify-center">
                  1
                </span>
              </span>
            )}
          </button>
        )}
      </div>

      {/* Floating Chat Panel */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 flex justify-end">
          <div className="flex flex-col w-full sm:w-[380px] md:w-[410px] h-[540px] max-h-[85vh] rounded-[2rem] border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden backdrop-blur-2xl transition-all duration-300">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-[var(--ucs-border)] bg-[var(--ucs-bg-navbar)] px-4 py-3.5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[var(--ucs-gold)] bg-white p-0.5 shadow-sm">
                  <Image
                    src="/ucs-logo.png"
                    alt="UCS Crest"
                    fill
                    sizes="40px"
                    className="object-contain p-0.5"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[var(--ucs-text-primary)] leading-tight">
                    Universal Central School
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-medium text-[var(--ucs-gold-text)]">
                      Admissions Desk · Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--ucs-border)] bg-[var(--ucs-toggle-bg)] text-[var(--ucs-text-primary)] hover:border-[var(--ucs-gold)] hover:text-[var(--ucs-gold-text)] transition focus:outline-none"
              >
                ✕
              </button>
            </div>

            {/* Chat Body: Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
              {messages.map((m) => {
                const isBot = m.sender === "bot";
                return (
                  <div
                    key={m.id}
                    className={`flex items-start gap-2.5 ${isBot ? "justify-start" : "justify-end"}`}
                  >
                    {isBot && (
                      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-[var(--ucs-border)] bg-white p-0.5 mt-1">
                        <Image src="/ucs-logo.png" alt="UCS" fill sizes="28px" className="object-contain" />
                      </div>
                    )}

                    <div className={`max-w-[85%] space-y-2`}>
                      {/* Message Bubble */}
                      {m.text && (
                        <div
                          className={`rounded-2xl px-4 py-2.5 leading-relaxed ${
                            isBot
                              ? "bg-[var(--ucs-bg-card)] border border-[var(--ucs-border)] text-[var(--ucs-text-primary)] shadow-sm"
                              : "bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] text-[#0B1733] font-semibold ml-auto shadow-sm"
                          }`}
                        >
                          <p className="whitespace-pre-line">{m.text}</p>
                        </div>
                      )}

                      {/* Info Cards (FAQ/Contact) */}
                      {m.infoCards && (
                        <div className="space-y-1.5 pt-1">
                          {m.infoCards.map((card, cIdx) => (
                            <div
                              key={cIdx}
                              className="rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] p-2.5 text-left"
                            >
                              <p className="font-bold text-[11px] text-[var(--ucs-gold-text)]">
                                {card.title}
                              </p>
                              <p className="mt-0.5 text-xs text-[var(--ucs-text-secondary)] whitespace-pre-line">
                                {card.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Options / Action Chips */}
                      {m.options && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {m.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => {
                                if (opt.action === "skip_email" || opt.action === "skip_message") {
                                  handleSkipOption(opt.action);
                                } else {
                                  handleOptionClick(opt.action, opt.label);
                                }
                              }}
                              className="rounded-full border border-[var(--ucs-gold-badge-border)] bg-[var(--ucs-gold-badge-bg)] px-3 py-1.5 text-[11px] font-semibold text-[var(--ucs-gold-text)] hover:bg-[#D4A853] hover:text-[#0B1733] transition"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Grade Selector Pills */}
                      {m.type === "grade_select" && step === "grade" && (
                        <div className="grid grid-cols-2 gap-1.5 pt-1">
                          {GRADES.map((g) => (
                            <button
                              key={g}
                              type="button"
                              onClick={() => handleGradeSelect(g)}
                              className="rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-3 py-2 text-xs font-semibold text-[var(--ucs-text-primary)] hover:border-[var(--ucs-gold)] hover:bg-[var(--ucs-toggle-bg)] transition text-left"
                            >
                              {g}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Branch Selector Pills */}
                      {m.type === "branch_select" && step === "branch" && (
                        <div className="space-y-1.5 pt-1">
                          {BRANCHES.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => handleBranchSelect(b)}
                              className="w-full rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-card)] px-3.5 py-2.5 text-xs font-semibold text-[var(--ucs-text-primary)] hover:border-[var(--ucs-gold)] hover:bg-[var(--ucs-toggle-bg)] transition text-left"
                            >
                              📍 {b}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={chatBottomRef} />
            </div>

            {/* Chat Input Bar */}
            <div className="border-t border-[var(--ucs-border)] bg-[var(--ucs-bg-navbar)] p-3 backdrop-blur-xl">
              {step === "parent_name" || step === "student_name" || step === "phone" || step === "email" || step === "message" ? (
                <form onSubmit={handleInputSubmit} className="flex items-center gap-2">
                  <input
                    type={step === "phone" ? "tel" : step === "email" ? "email" : "text"}
                    autoFocus
                    placeholder={
                      step === "parent_name"
                        ? "Enter parent full name..."
                        : step === "student_name"
                        ? "Enter student name..."
                        : step === "phone"
                        ? "Enter 10-digit mobile number..."
                        : step === "email"
                        ? "Enter email address (or click Skip)..."
                        : "Type your query or click submit..."
                    }
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="flex-1 rounded-xl border border-[var(--ucs-border)] bg-[var(--ucs-bg-page)] px-3.5 py-2.5 text-xs text-[var(--ucs-text-primary)] focus:border-[var(--ucs-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--ucs-gold)]"
                  />

                  <button
                    type="submit"
                    disabled={!inputVal.trim() && step !== "email" && step !== "message"}
                    aria-label="Send response"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#D4A853] via-[#DFB76C] to-[#C59B3F] text-[#0B1733] font-bold shadow-sm disabled:opacity-40 transition hover:scale-105"
                  >
                    →
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between text-[11px] text-[var(--ucs-text-muted)] px-1">
                  <span>Universal Central School · Est. 1994</span>
                  <button
                    type="button"
                    onClick={() => handleOptionClick("reset_menu", "Reset Menu")}
                    className="text-[var(--ucs-gold-text)] font-semibold hover:underline"
                  >
                    Restart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
