import { useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  EyeOff,
  Factory,
  FilePlus2,
  FileText,
  HelpCircle,
  Home,
  Inbox,
  Mail,
  PlayCircle,
  Scale,
  ShieldCheck,
  ShoppingCart,
  SquarePen,
  Store,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function App() {
  return (
    <div>
      <div className="bg-white text-neutral-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-screen max-w-[1140px] bg-white flex mx-auto flex-col w-full">
          <header className="border-neutral-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 py-4 justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="size-10 shadow-sm rounded-xl bg-neutral-900 text-neutral-50 flex justify-center items-center">
                  <SquarePen className="size-5" />
                </div>
                <div className="font-semibold text-lg leading-7 tracking-tight">
                  BidBazaar
                </div>
              </div>
              <nav className="text-neutral-500 text-sm leading-5 flex items-center gap-6">
                <a
                  className="font-medium text-neutral-950 border-neutral-950 border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-3 items-center gap-2"
                  href="#"
                >
                  <Home className="size-4" />
                  <span>Home</span>
                </a>
                <a className="flex pb-3 items-center gap-2" href="#">
                  <ShoppingCart className="size-4" />
                  <span>For Buyers</span>
                </a>
                <a className="flex pb-3 items-center gap-2" href="#">
                  <Store className="size-4" />
                  <span>For Sellers</span>
                </a>
                <a className="flex pb-3 items-center gap-2" href="#">
                  <HelpCircle className="size-4" />
                  <span>How It Works</span>
                </a>
                <a className="flex pb-3 items-center gap-2" href="#">
                  <Mail className="size-4" />
                  <span>Contact</span>
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-full px-5">
                Sign In
              </Button>
              <Button className="rounded-full bg-neutral-900 text-neutral-50 px-5">
                Get Started
              </Button>
            </div>
          </header>
          <main className="flex-1">
            <section className="grid grid-cols-2 px-8 py-14 gap-10">
              <div className="flex flex-col justify-center gap-6">
                <Badge
                  variant="secondary"
                  className="font-medium rounded-full text-xs leading-4 px-3 py-1 w-fit"
                >
                  The private-sector GeM alternative
                </Badge>
                <div className="space-y-4">
                  <h1 className="max-w-[520px] font-semibold text-neutral-950 text-5xl leading-[50px] tracking-tight">
                    Let sellers come to you. Post once, get competitive bids.
                  </h1>
                  <p className="max-w-[520px] text-neutral-500 text-lg leading-8">
                    A tender-style marketplace for private hotels, offices,
                    shops and industries. Post your requirement, receive bids
                    with tender files, and award the best offer — no shop
                    visits, no cold calls.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button className="rounded-xl bg-neutral-900 text-neutral-50 text-base leading-6 px-5 py-6">
                    Post a Requirement
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl text-base leading-6 px-5 py-6"
                  >
                    <PlayCircle className="size-4 mr-2" />
                    See How It Works
                  </Button>
                </div>
                <div className="flex pt-2 items-center gap-10">
                  <div>
                    <div className="font-semibold text-2xl leading-8 tracking-tight">
                      2,400+
                    </div>
                    <div className="text-neutral-500 text-sm leading-5">
                      Verified sellers
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-2xl leading-8 tracking-tight">
                      8,900
                    </div>
                    <div className="text-neutral-500 text-sm leading-5">
                      Tenders posted
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-2xl leading-8 tracking-tight">
                      ₹0
                    </div>
                    <div className="text-neutral-500 text-sm leading-5">{`To post & bid`}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-[28px] bg-neutral-100 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTAzMTh8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NTQ5MjM3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1200"
                    alt="Business handshake"
                    className="object-cover w-105 h-81"
                    data-photoid="Q1p7bh3SHj8"
                    data-authorname="Cytonn Photography"
                    data-authorurl="https://unsplash.com/@cytonn_photography"
                    data-blurhash="L6PZ%2?~q9F%2?~q9F%2?~q9F%2?~q9F%2?~q9F"
                  />
                  <div className="shadow-lg backdrop-blur-sm rounded-2xl bg-white/95 absolute inset-x-4 bottom-4 p-4">
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-neutral-100 text-neutral-950 flex justify-center items-center">
                          <FileText className="size-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm leading-5">
                            Tender #TD-4821 awarded
                          </div>
                          <div className="text-neutral-500 text-xs leading-4">
                            7 bids received · closed in 3 days
                          </div>
                        </div>
                      </div>
                      <Badge className="rounded-full bg-neutral-950 text-white text-xs leading-4 px-3 py-1">
                        Closed
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-neutral-100/30 border-neutral-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid px-8 py-16">
              <div className="max-w-[980px] text-center mx-auto">
                <h2 className="font-semibold text-3xl leading-9 tracking-tight">
                  How the tender flow works
                </h2>
                <p className="text-neutral-500 mt-3">
                  Four simple steps — no payments or order generation, just a
                  clean selection process.
                </p>
              </div>
              <div className="grid grid-cols-4 mt-10 gap-4">
                <Card className="shadow-sm rounded-2xl p-6 gap-4">
                  <CardHeader className="p-0 gap-3">
                    <div className="size-12 rounded-xl bg-neutral-100 text-neutral-950 flex justify-center items-center">
                      <FilePlus2 className="size-5" />
                    </div>
                    <div className="font-medium uppercase text-neutral-500 text-xs leading-4 tracking-widest">
                      Step 1
                    </div>
                    <CardTitle className="text-lg leading-7">
                      Post a requirement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-500 text-sm leading-6 p-0">
                    Describe your need and attach a description folder with
                    specs and quantities.
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl p-6 gap-4">
                  <CardHeader className="p-0 gap-3">
                    <div className="size-12 rounded-xl bg-neutral-100 text-neutral-950 flex justify-center items-center">
                      <Inbox className="size-5" />
                    </div>
                    <div className="font-medium uppercase text-neutral-500 text-xs leading-4 tracking-widest">
                      Step 2
                    </div>
                    <CardTitle className="text-lg leading-7">
                      Receive seller bids
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-500 text-sm leading-6 p-0">
                    Service providers submit tender files with their offers and
                    selection criteria.
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl p-6 gap-4">
                  <CardHeader className="p-0 gap-3">
                    <div className="size-12 rounded-xl bg-neutral-100 text-neutral-950 flex justify-center items-center">
                      <Scale className="size-5" />
                    </div>
                    <div className="font-medium uppercase text-neutral-500 text-xs leading-4 tracking-widest">
                      Step 3
                    </div>
                    <CardTitle className="text-lg leading-7">{`Evaluate & compare`}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-500 text-sm leading-6 p-0">
                    Review all tender files side by side and shortlist the
                    strongest bid.
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl p-6 gap-4">
                  <CardHeader className="p-0 gap-3">
                    <div className="size-12 rounded-xl bg-neutral-100 text-neutral-950 flex justify-center items-center">
                      <BadgeCheck className="size-5" />
                    </div>
                    <div className="font-medium uppercase text-neutral-500 text-xs leading-4 tracking-widest">
                      Step 4
                    </div>
                    <CardTitle className="text-lg leading-7">{`Award & close`}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-500 text-sm leading-6 p-0">
                    Select a winner, close the tender, and notify the awarded
                    seller instantly.
                  </CardContent>
                </Card>
              </div>
            </section>
            <section className="px-8 py-16">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="font-semibold text-3xl leading-9 tracking-tight">
                    Built for both sides of the deal
                  </h2>
                  <p className="text-neutral-500 mt-2">
                    Switch the view to see what you get.
                  </p>
                </div>
                <div className="rounded-full bg-neutral-100 text-sm leading-5 border-neutral-200 border-1 border-solid flex p-1">
                  <button className="shadow-sm font-medium rounded-full bg-white px-4 py-2">
                    For Buyers
                  </button>
                  <button className="rounded-full text-neutral-500 px-4 py-2">
                    For Sellers
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-8 gap-4">
                <Card className="shadow-sm rounded-2xl p-6 gap-4">
                  <CardHeader className="p-0 gap-3">
                    <EyeOff className="size-5" />
                    <CardTitle className="text-lg leading-7">
                      No shop visits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-500 text-sm leading-6 p-0">
                    Sellers bring offers to you — never chase a vendor or
                    website again.
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl p-6 gap-4">
                  <CardHeader className="p-0 gap-3">
                    <Scale className="size-5" />
                    <CardTitle className="text-lg leading-7">
                      Compare fairly
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-500 text-sm leading-6 p-0">
                    All bids in one place with standardized tender files for
                    easy evaluation.
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl p-6 gap-4">
                  <CardHeader className="p-0 gap-3">
                    <ShieldCheck className="size-5" />
                    <CardTitle className="text-lg leading-7">
                      Full control
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-500 text-sm leading-6 p-0">
                    You set the criteria and decide when to close and award the
                    tender.
                  </CardContent>
                </Card>
              </div>
            </section>
            <section className="border-y bg-neutral-100/30 border-neutral-200 border-0 border-solid px-8 py-16">
              <div className="text-center">
                <h2 className="font-semibold text-3xl leading-9 tracking-tight">
                  Trusted across private sectors
                </h2>
                <p className="text-neutral-500 mt-2">
                  From boutique hotels to manufacturing floors.
                </p>
              </div>
              <div className="grid grid-cols-3 mt-10 gap-5">
                <div className="group relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTAzMTh8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvdW5nZXxlbnwxfHx8fDE3NTQ5MjM3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1200"
                    alt="Hotels and hospitality"
                    className="object-cover w-full h-55"
                    data-photoid="xQwQxv4Qx8Q"
                    data-authorname="Kenny Eliason"
                    data-authorurl="https://unsplash.com/@neonbrand"
                    data-blurhash="L9B4xv~q9F%2?~q9F%2?~q9F%2?~q9F%2?~q9F"
                  />
                  <div className="bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent absolute inset-0" />
                  <div className="font-medium text-white text-sm leading-5 flex absolute left-4 bottom-4 items-center gap-2">
                    <Building2 className="size-4" />
                    {`Hotels & Hospitality`}
                  </div>
                </div>
                <div className="group relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTAzMTh8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc1NDkyMzc3Nnww&ixlib=rb-4.1.0&q=80&w=1200"
                    alt="Offices and corporates"
                    className="object-cover w-full h-55"
                    data-photoid="nqUHQkuVj3c"
                    data-authorname="Austin Distel"
                    data-authorurl="https://unsplash.com/@austindistel"
                    data-blurhash="L8B4xv~q9F%2?~q9F%2?~q9F%2?~q9F%2?~q9F"
                  />
                  <div className="bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent absolute inset-0" />
                  <div className="font-medium text-white text-sm leading-5 flex absolute left-4 bottom-4 items-center gap-2">
                    <BriefcaseBusiness className="size-4" />
                    {`Offices & Corporates`}
                  </div>
                </div>
                <div className="group relative rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1513828583688-c52646db42da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3OTAzMTh8MHwxfHNlYXJjaHwxfHxpbmR1c3RyeSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzU0OTIzNzc2fDA&ixlib=rb-4.1.0&q=80&w=1200"
                    alt="Industries and shops"
                    className="object-cover w-full h-55"
                    data-photoid="xvQxvQxvQxv"
                    data-authorname="Samuel Zeller"
                    data-authorurl="https://unsplash.com/@samuelzeller"
                    data-blurhash="L6B4xv~q9F%2?~q9F%2?~q9F%2?~q9F%2?~q9F"
                  />
                  <div className="bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent absolute inset-0" />
                  <div className="font-medium text-white text-sm leading-5 flex absolute left-4 bottom-4 items-center gap-2">
                    <Factory className="size-4" />
                    {`Industries & Shops`}
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-2 px-8 py-16 gap-10">
              <div>
                <h2 className="font-semibold text-3xl leading-9 tracking-tight">
                  Frequently asked
                </h2>
                <p className="text-neutral-500 mt-2">
                  The essentials about our MVP tender flow.
                </p>
              </div>
              <div className="space-y-3">
                <Card className="shadow-sm rounded-2xl p-5">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">
                      Is there any payment or order handling?
                    </div>
                    <ChevronDown className="size-4 text-neutral-500" />
                  </div>
                </Card>
                <Card className="shadow-sm rounded-2xl p-5">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">
                      Who can post a requirement?
                    </div>
                    <ChevronDown className="size-4 text-neutral-500" />
                  </div>
                </Card>
                <Card className="shadow-sm rounded-2xl p-5">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">How is a winner selected?</div>
                    <ChevronDown className="size-4 text-neutral-500" />
                  </div>
                </Card>
              </div>
            </section>
            <section className="bg-neutral-950 text-white px-8 py-16">
              <div className="max-w-[760px] text-center mx-auto">
                <h2 className="font-semibold text-3xl leading-9 tracking-tight">
                  Ready to post your first requirement?
                </h2>
                <p className="text-white/70 mt-3">
                  Join the marketplace where sellers compete for your business.
                  Free to post, free to bid.
                </p>
                <div className="flex mt-8 justify-center items-center gap-3">
                  <Input
                    className="rounded-xl bg-white text-neutral-950 border-neutral-200 border-0 border-solid w-80 h-12"
                    placeholder="Enter your work email"
                  />
                  <Button className="rounded-xl bg-white text-neutral-950 px-5 h-12">
                    Get Started
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </div>
              </div>
            </section>
          </main>
          <footer className="text-neutral-500 text-sm leading-5 border-neutral-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex px-8 py-5 justify-between items-center">
            <div className="text-neutral-950 flex items-center gap-3">
              <div className="size-8 rounded-lg bg-neutral-900 text-neutral-50 flex justify-center items-center">
                <SquarePen className="size-4" />
              </div>
              <span className="font-semibold">BidBazaar</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
            <div>© 2026 BidBazaar</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
