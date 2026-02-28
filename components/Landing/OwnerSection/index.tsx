"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icon } from "@/components/ui/mdi-icon"
import { mdiTrendingUp, mdiCurrencyUsd, mdiAccountGroup, mdiPulse, mdiChevronUp, mdiCalendarCheck, mdiChartAreaspline } from "@mdi/js"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const stats = [
    { label: "Doanh thu tháng", value: "128.5M", change: "+23%", icon: mdiCurrencyUsd, color: "primary", textColor: "text-primary", bgColor: "bg-primary" },
    { label: "Lượt đặt sân", value: "1,248", change: "+18%", icon: mdiPulse, color: "secondary", textColor: "text-secondary", bgColor: "bg-secondary" },
    { label: "Khách hàng mới", value: "342", change: "+12%", icon: mdiAccountGroup, color: "accent", textColor: "text-accent", bgColor: "bg-accent" },
    { label: "Tỷ lệ lấp đầy", value: "87%", change: "+8%", icon: mdiTrendingUp, color: "primary", textColor: "text-primary", bgColor: "bg-primary" },
]

const revenueData = [
    { month: "T1", value: 85 },
    { month: "T2", value: 72 },
    { month: "T3", value: 96 },
    { month: "T4", value: 88 },
    { month: "T5", value: 110 },
    { month: "T6", value: 128 },
]

const bookings = [
    { time: "06:00 - 08:00", court: "Sân 1", customer: "Nguyễn Văn A", status: "Đã xác nhận" },
    { time: "08:00 - 10:00", court: "Sân 2", customer: "Trần Thị B", status: "Đã xác nhận" },
    { time: "10:00 - 12:00", court: "Sân 1", customer: "Lê Văn C", status: "Chờ xác nhận" },
    { time: "14:00 - 16:00", court: "Sân 3", customer: "Phạm Thị D", status: "Đã xác nhận" },
    { time: "18:00 - 20:00", court: "Sân 1, 2", customer: "CLB Bình Minh", status: "Đã xác nhận" },
]

export function OwnerSection() {
    return (
        <section id="owner" className="relative overflow-hidden bg-background py-24 lg:py-32">
            {/* SVG Background - Modern grid */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                    <pattern id="owner-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M 48 0 L 0 0 0 48" fill="none" className="stroke-accent/5" strokeWidth="1" />
                    </pattern>
                    <radialGradient id="owner-glow" cx="70%" cy="40%">
                        <stop offset="0%" className="stop-color-secondary/10" />
                        <stop offset="100%" className="stop-color-transparent" />
                    </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#owner-grid)" />
                <rect width="100%" height="100%" fill="url(#owner-glow)" />
            </svg>

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div
                    className="mx-auto max-w-3xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div custom={0} variants={fadeUp} className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-primary">
                        <Icon path={mdiChartAreaspline} size={1} />
                    </motion.div>
                    <motion.p custom={1} variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest text-secondary">
                        Dành cho chủ sân
                    </motion.p>
                    <motion.h2 custom={2} variants={fadeUp} className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Tối ưu vận hành, tăng doanh thu
                    </motion.h2>
                    <motion.p custom={3} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-muted-foreground">
                        Dashboard chuyên nghiệp giúp bạn nắm bắt mọi hoạt động kinh doanh chỉ trong một giao diện.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="mt-14"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {/* Dashboard mockup wrapper */}
                    <div className="overflow-hidden rounded-2xl border border-accent/15 bg-card shadow-xl shadow-accent/5">
                        {/* Browser chrome bar */}
                        <div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-5 py-3">
                            <div className="flex gap-1.5">
                                <span className="h-3 w-3 rounded-full bg-red-400/60" />
                                <span className="h-3 w-3 rounded-full bg-amber-400/60" />
                                <span className="h-3 w-3 rounded-full bg-green-400/60" />
                            </div>
                            <div className="mx-auto rounded-md bg-background/80 px-4 py-1 text-xs text-muted-foreground">
                                dashboard.badmintonhub.vn
                            </div>
                        </div>

                        <div className="p-6 lg:p-8">
                            <Tabs defaultValue="overview" className="w-full">
                                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">Xin chào, Anh Minh</h3>
                                        <p className="text-sm text-muted-foreground">Sân cầu lông Bình Minh - Tổng quan hoạt động</p>
                                    </div>
                                    <TabsList className="rounded-xl bg-accent/8 p-1">
                                        <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md">
                                            Tổng quan
                                        </TabsTrigger>
                                        <TabsTrigger value="revenue" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md">
                                            Doanh thu
                                        </TabsTrigger>
                                        <TabsTrigger value="booking" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md">
                                            Đặt sân
                                        </TabsTrigger>
                                    </TabsList>
                                </div>

                                <TabsContent value="overview" className="mt-8">
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                        {stats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="group relative overflow-hidden rounded-xl border border-accent/10 bg-background p-5 transition-all duration-300 hover:border-secondary/25 hover:shadow-lg"
                                            >
                                                {/* Top accent */}
                                                <div className={`absolute inset-x-0 top-0 h-0.5 ${stat.bgColor}`} />

                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-medium text-muted-foreground">
                                                        {stat.label}
                                                    </p>
                                                    <div
                                                        className={`flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${stat.bgColor}/15 ${stat.textColor}`}
                                                    >
                                                        <Icon path={stat.icon} size={0.8} />
                                                    </div>
                                                </div>
                                                <div className="mt-3 flex items-end gap-2">
                                                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                                                    <span className="mb-0.5 flex items-center gap-0.5 text-xs font-semibold text-secondary">
                                                        <Icon path={mdiChevronUp} size={0.55} />
                                                        {stat.change}
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-xs text-muted-foreground">so với tháng trước</p>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="revenue" className="mt-8">
                                    <div className="rounded-xl border border-accent/10 bg-background p-6">
                                        <div className="mb-6 flex items-center justify-between">
                                            <div>
                                                <h4 className="text-lg font-semibold text-foreground">Doanh thu 6 tháng</h4>
                                                <p className="text-sm text-muted-foreground">Đơn vị: triệu đồng</p>
                                            </div>
                                            <div className="rounded-lg bg-secondary/10 px-3 py-1.5 text-sm font-bold text-primary">
                                                Tổng: 579M VND
                                            </div>
                                        </div>

                                        <div className="flex h-64 items-end gap-3">
                                            {revenueData.map((item, idx) => (
                                                <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                                                    <span className="text-xs font-semibold text-primary">{item.value}M</span>
                                                    <motion.div
                                                        className="w-full rounded-lg bg-gradient-to-t from-primary to-secondary transition-all hover:from-secondary hover:to-accent"
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${(item.value / 140) * 100}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                                                    />
                                                    <span className="text-xs font-medium text-muted-foreground">{item.month}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="booking" className="mt-8">
                                    <div className="rounded-xl border border-accent/10 bg-background p-6">
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Icon path={mdiCalendarCheck} size={0.8} className="text-secondary" />
                                                <h4 className="text-lg font-semibold text-foreground">Lịch đặt sân hôm nay</h4>
                                            </div>
                                            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-primary">
                                                {bookings.length} đặt chỗ
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-2.5">
                                            {bookings.map((booking, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="group flex flex-col gap-2 rounded-xl border border-border/50 bg-card p-4 transition-all duration-300 hover:border-accent/20 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-xs font-bold text-primary">
                                                            {booking.court.replace("Sân ", "#")}
                                                        </div>
                                                        <div>
                                                            <span className="text-sm font-semibold text-foreground">{booking.time}</span>
                                                            <p className="text-xs text-muted-foreground">{booking.court}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 sm:gap-4">
                                                        <span className="text-sm text-foreground">{booking.customer}</span>
                                                        <span
                                                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${booking.status === "Đã xác nhận"
                                                                ? "bg-accent/15 text-primary"
                                                                : "bg-amber-100 text-amber-700"
                                                                }`}
                                                        >
                                                            <span className={`h-1.5 w-1.5 rounded-full ${booking.status === "Đã xác nhận" ? "bg-secondary" : "bg-amber-500"
                                                                }`} />
                                                            {booking.status}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
