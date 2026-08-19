"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bell,
  Battery,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Home,
  MapPin,
  Search,
  Settings,
  ShieldCheck,
  Signal,
  Wallet,
  Wifi,
  Wrench,
  Scissors,
  Zap,
  Car,
  ShieldAlert,
  Paintbrush,
  Hammer,
  Clock,
  ChevronRight,
  User,
  LogOut,
  HelpCircle,
  BellRing,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Home Repair", icon: Wrench },
  { name: "Salon & Care", icon: Scissors },
  { name: "Electrical", icon: Zap },
  { name: "Automotive", icon: Car },
  { name: "Pest Control", icon: ShieldAlert },
  { name: "Painting", icon: Paintbrush },
  { name: "Carpentry", icon: Hammer },
];

const orders = [
  {
    id: "#FC-2847",
    title: "Tap & pipe repair",
    pro: "Bwalya K.",
    status: "Completed",
    price: "K150",
    date: "Today",
    done: true,
  },
  {
    id: "#FC-2851",
    title: "Socket installation",
    pro: "Joseph K.",
    status: "In progress",
    price: "K220",
    date: "Yesterday",
    done: false,
  },
  {
    id: "#FC-2839",
    title: "Fridge service",
    pro: "Mutale N.",
    status: "Completed",
    price: "K310",
    date: "Aug 14",
    done: true,
  },
];

const nav = [
  { id: "home", label: "Home", icon: Home },
  { id: "orders", label: "Orders", icon: ClipboardList },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "settings", label: "Settings", icon: Settings },
] as const;

type NavId = (typeof nav)[number]["id"];

function HomeTab() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#142E2A] px-5 pb-5 pt-3 text-white">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-bold">Good Evening 👋</p>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <Bell className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-[11px] text-white/60">
          <MapPin className="h-3 w-3" /> Lusaka, Zambia
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-[11px] text-gray-400 shadow-sm">
          <Search className="h-3.5 w-3.5 text-[#1B4640]" />
          Search for a service...
        </div>
      </div>

      {/* Promo Banner */}
      <div className="mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#C9A227] to-[#AD8B1E] p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
              Special Offer
            </p>
            <p className="mt-0.5 font-display text-sm font-bold text-white">
              Tools & Home Services
            </p>
            <span className="mt-2.5 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#1B4640]">
              Book Now
            </span>
          </div>
          <Image
            src="/fixcycle-logo.png"
            alt="FixCycle"
            width={52}
            height={52}
            className="h-[52px] w-[52px] shrink-0 rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Categories */}
      <p className="mx-4 mt-5 mb-3 font-display text-sm font-bold text-[#1C1C1E]">
        Handyman Services
      </p>
      <div className="grid grid-cols-2 gap-2.5 px-4 pb-24">
        {categories.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm active:opacity-70"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0F7F6] text-[#1B4640]">
              <c.icon className="h-4.5 w-4.5" />
            </span>
            <span className="text-[11px] font-semibold text-[#1C1C1E]">{c.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function OrdersTab() {
  return (
    <div className="px-4 pt-4 pb-24">
      <p className="font-display text-lg font-bold text-[#1C1C1E]">My Orders</p>
      <p className="mt-0.5 text-[11px] text-gray-400">Recent service bookings</p>

      {/* Summary chips */}
      <div className="mt-4 flex gap-2">
        <span className="rounded-full bg-[#1B4640] px-3 py-1.5 text-[10px] font-semibold text-white">
          All (3)
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-semibold text-gray-500">
          Active (1)
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-semibold text-gray-500">
          Done (2)
        </span>
      </div>

      {/* Order cards */}
      <div className="mt-4 space-y-3">
        {orders.map((o) => (
          <div
            key={o.id}
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-[13px] font-bold text-[#1C1C1E]">{o.title}</p>
                <p className="mt-0.5 text-[11px] text-gray-400">
                  {o.pro} · {o.date}
                </p>
              </div>
              <span className="font-mono text-sm font-bold text-[#1B4640]">{o.price}</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold",
                  o.done
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                )}
              >
                {o.done ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <Clock className="h-3 w-3" />
                )}
                {o.status}
              </span>
              <ChevronRight className="h-4 w-4 text-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WalletTab() {
  return (
    <div className="px-4 pt-4 pb-24">
      <p className="font-display text-lg font-bold text-[#1C1C1E]">My Wallet</p>
      <p className="mt-0.5 text-[11px] text-gray-400">Payments and balance</p>

      {/* Balance card */}
      <div className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B4640] to-[#142E2A] p-5 text-white shadow-md">
        <p className="text-[11px] font-medium text-white/60">Available Balance</p>
        <p className="mt-1 font-mono text-3xl font-bold">K2,450</p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold text-white">
            Add Funds
          </span>
          <span className="rounded-full bg-[#C9A227] px-3 py-1.5 text-[10px] font-bold text-[#1B4640]">
            Withdraw
          </span>
        </div>
      </div>

      {/* Transaction list */}
      <p className="mt-5 mb-2.5 font-display text-sm font-bold text-[#1C1C1E]">Transactions</p>
      <div className="space-y-2.5">
        {[
          { label: "Tap repair — Bwalya K.", amount: "-K150", date: "Today", type: "debit" },
          { label: "Wallet top-up (MTN)", amount: "+K500", date: "Yesterday", type: "credit" },
          { label: "Socket install — Joseph K.", amount: "-K220", date: "Aug 14", type: "debit" },
          { label: "Referral bonus", amount: "+K50", date: "Aug 12", type: "credit" },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-black/5">
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                t.type === "credit" ? "bg-emerald-50 text-emerald-500" : "bg-red-50 text-red-400"
              )}
            >
              {t.type === "credit" ? (
                <CreditCard className="h-4 w-4" />
              ) : (
                <CreditCard className="h-4 w-4" />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-[#1C1C1E]">{t.label}</p>
              <p className="text-[10px] text-gray-400">{t.date}</p>
            </div>
            <span
              className={cn(
                "font-mono text-[12px] font-bold",
                t.type === "credit" ? "text-emerald-500" : "text-[#1C1C1E]"
              )}
            >
              {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div className="px-4 pt-4 pb-24">
      <p className="font-display text-lg font-bold text-[#1C1C1E]">Settings</p>
      <p className="mt-0.5 text-[11px] text-gray-400">Account and preferences</p>

      {/* Profile card */}
      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1B4640] text-white">
          <User className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[13px] font-bold text-[#1C1C1E]">Apporio Customer</p>
          <p className="text-[11px] text-gray-400">+260 76 972 3838</p>
        </div>
      </div>

      {/* Menu items */}
      <div className="mt-4 space-y-2">
        {[
          { icon: BellRing, label: "Notifications", desc: "Push & alerts" },
          { icon: MapPin, label: "Saved Addresses", desc: "2 saved" },
          { icon: ShieldCheck, label: "Privacy & Security", desc: "Password, 2FA" },
          { icon: FileText, label: "Terms & Policies", desc: "Legal info" },
          { icon: HelpCircle, label: "Help & Support", desc: "FAQ, contact" },
          { icon: LogOut, label: "Log Out", desc: "", danger: true },
        ].map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-black/5 active:opacity-70"
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                m.danger ? "bg-red-50 text-red-400" : "bg-gray-50 text-[#1B4640]"
              )}
            >
              <m.icon className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className={cn("text-[12px] font-semibold", m.danger ? "text-red-500" : "text-[#1C1C1E]")}>
                {m.label}
              </p>
              {m.desc && <p className="text-[10px] text-gray-400">{m.desc}</p>}
            </div>
            <ChevronRight className="h-4 w-4 text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

const tabContent: Record<NavId, React.ReactNode> = {
  home: <HomeTab />,
  orders: <OrdersTab />,
  wallet: <WalletTab />,
  settings: <SettingsTab />,
};

export default function PhoneMockup({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<NavId>("home");

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-[300px] shrink-0 rounded-[2.9rem] border-[10px] border-[#1C1C1E] p-0 shadow-lift sm:w-[330px]",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[2.2rem] bg-[#F4F5F7]">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-white px-6 pb-1.5 pt-2.5 text-[11px] font-semibold text-gray-500">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="h-3.5 w-3.5" />
            <Wifi className="h-3.5 w-3.5" />
            <Battery className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="h-[420px] overflow-y-auto scroll-smooth">
          {tabContent[activeTab]}
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-gray-100 bg-white/95 px-4 py-2.5 backdrop-blur-sm">
          {nav.map((n) => {
            const on = activeTab === n.id;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => setActiveTab(n.id)}
                className="flex flex-col items-center gap-0.5"
              >
                <span
                  className={cn(
                    "flex h-8 items-center justify-center rounded-full px-3 transition-colors",
                    on ? "bg-[#1B4640] text-white" : "text-gray-400"
                  )}
                >
                  <n.icon className="h-4 w-4" />
                </span>
                <span
                  className={cn(
                    "text-[9px] font-semibold",
                    on ? "text-[#1B4640]" : "text-gray-400"
                  )}
                >
                  {n.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
