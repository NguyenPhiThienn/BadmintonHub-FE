"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@/components/ui/mdi-icon"
import { mdiMapMarker, mdiStar, mdiClock, mdiMagnify, mdiCreation, mdiArrowRight, mdiCheckCircle } from "@mdi/js"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

const courts = [
    {
        name: "Sân Phú Nhuận Sport",
        address: "123 Phan Xích Long, Phú Nhuận",
        rating: 4.8,
        reviews: 234,
        price: "120.000đ/h",
        time: "6:00 - 22:00",
        aiSuggested: true,
        available: 3,
        image: "/images/court-1.jpg",
        features: ["Có máy lạnh", "Chỗ gửi xe", "Cafe"],
    },
    {
        name: "Sân Củ Chi Badminton",
        address: "456 Nguyễn Oanh, Gò Vấp",
        rating: 4.6,
        reviews: 189,
        price: "100.000đ/h",
        time: "5:30 - 23:00",
        aiSuggested: true,
        available: 5,
        image: "/images/court-2.jpg",
        features: ["Sân gỗ", "Phòng thay đồ", "Wifi"],
    },
    {
        name: "Sân Thanh Đa Center",
        address: "789 Bình Quới, Bình Thạnh",
        rating: 4.5,
        reviews: 156,
        price: "90.000đ/h",
        time: "6:00 - 21:30",
        aiSuggested: false,
        available: 2,
        image: "/images/court-3.jpg",
        features: ["View đẹp", "Chỗ gửi xe", "Canteen"],
    },
]

export function PlayerSection() {
    return (
        <section id="player" className="relative overflow-hidden bg-[#f7faf4] py-24 lg:py-32">
            {/* SVG Background */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                    <pattern id="player-dots" width="32" height="32" patternUnits="userSpaceOnUse">
                        <circle cx="16" cy="16" r="1.5" className="fill-primary/5" />
                    </pattern>
                    <radialGradient id="player-glow" cx="50%" cy="0%">
                        <stop offset="0%" className="stop-color-accent/10" />
                        <stop offset="70%" className="stop-color-transparent" />
                    </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#player-dots)" />
                <rect width="100%" height="100%" fill="url(#player-glow)" />
            </svg>

            {/* Top wave separator */}
            <svg className="pointer-events-none absolute -top-px left-0 right-0 h-20 text-background" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1440 80">
                <path d="M0,0 L1440,0 L1440,40 Q720,80 0,40 Z" fill="currentColor" />
            </svg>

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header with left alignment */}
                <motion.div
                    className="mx-auto max-w-3xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div custom={0} variants={fadeUp} className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-primary">
                        <Icon path={mdiMapMarker} size={1} />
                    </motion.div>
                    <motion.p custom={1} variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Dành cho người chơi
                    </motion.p>
                    <motion.h2 custom={2} variants={fadeUp} className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Tìm sân thông minh, đặt chỗ siêu nhanh
                    </motion.h2>
                    <motion.p custom={3} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-muted-foreground">
                        Chỉ cần nhập vị trí, AI sẽ gợi ý sân tốt nhất cho bạn. Trải nghiệm đặt sân chưa bao giờ dễ dàng đến thế.
                    </motion.p>
                </motion.div>

                {/* Search bar - prominent design */}
                <motion.div
                    className="mx-auto mt-12 max-w-2xl"
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-card p-2 shadow-lg shadow-accent/10">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-1 items-center gap-2 rounded-xl bg-accent/5 px-4 py-1">
                                <Icon path={mdiMagnify} size={0.8} className="shrink-0 text-secondary" />
                                <Input
                                    placeholder="Nhập địa chỉ hoặc tên sân..."
                                    className="border-0 bg-transparent text-base shadow-none focus-visible:ring-0"
                                    readOnly
                                />
                            </div>
                            <Button variant="badminton" size="lg" className="shrink-0 rounded-xl px-6 bg-primary hover:bg-secondary text-white border-none">
                                Tìm sân
                                <Icon path={mdiArrowRight} size={0.8} />
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Court cards - redesigned */}
                <motion.div
                    className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {courts.map((court, i) => (
                        <motion.div
                            key={court.name}
                            custom={i}
                            variants={fadeUp}
                            className="group relative overflow-hidden rounded-2xl border border-accent/15 bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-xl hover:shadow-accent/15"
                        >
                            {/* Court image with overlay */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={court.image}
                                    alt={court.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {court.aiSuggested && (
                                    <Badge variant="badminton" className="absolute left-4 top-4 gap-1 shadow-lg bg-primary border-none">
                                        <Icon path={mdiCreation} size={0.55} />
                                        Gợi ý AI
                                    </Badge>
                                )}

                                {/* Price tag */}
                                <div className="absolute bottom-4 right-4 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-bold text-primary shadow-md backdrop-blur-sm">
                                    {court.price}
                                </div>
                            </div>

                            {/* Card body */}
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {court.name}
                                    </h3>
                                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5">
                                        <Icon path={mdiStar} size={0.8} className="text-amber-400" />
                                        <span className="text-sm font-semibold text-amber-700">{court.rating}</span>
                                        <span className="text-xs text-amber-600/70">({court.reviews})</span>
                                    </div>
                                </div>

                                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Icon path={mdiMapMarker} size={0.8} className="shrink-0 text-secondary" />
                                    {court.address}
                                </div>

                                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Icon path={mdiClock} size={0.8} className="shrink-0 text-secondary" />
                                    {court.time}
                                </div>

                                {/* Features tags */}
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {court.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="inline-flex items-center gap-1 rounded-full bg-accent/8 px-2.5 py-0.5 text-xs font-medium text-primary"
                                        >
                                            <Icon path={mdiCheckCircle} size={0.45} />
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom action row */}
                                <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                                    <span className="flex items-center gap-1 text-sm font-semibold text-secondary">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                                        </span>
                                        {court.available} sân trống
                                    </span>
                                    <Button variant="badminton" size="sm" className="rounded-lg bg-primary hover:bg-secondary text-white border-none">
                                        Đặt ngay
                                        <Icon path={mdiArrowRight} size={0.8} />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
