"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Icon } from "@/components/ui/mdi-icon"
import { mdiBrain, mdiChip, mdiChartLine, mdiLightbulbOn } from "@mdi/js"
import { motion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

const aiFeatures = [
    {
        icon: mdiBrain,
        title: "Gợi ý sân thông minh",
        description: "Phân tích hành vi đặt sân, vị trí, trình độ để gợi ý sân phù hợp nhất cho từng người chơi.",
    },
    {
        icon: mdiChartLine,
        title: "Dự báo doanh thu",
        description: "AI dự đoán xu hướng đặt sân, giúp chủ sân điều chỉnh giá và khuyến mãi tối ưu.",
    },
    {
        icon: mdiChip,
        title: "Tự động hóa vận hành",
        description: "Tự động xử lý đặt sân, hủy sân, hoàn tiền. Giảm 80% công việc thủ công.",
    },
    {
        icon: mdiLightbulbOn,
        title: "Phân tích thông minh",
        description: "Báo cáo chi tiết về xu hướng thị trường, hành vi khách hàng và hiệu suất kinh doanh.",
    },
]

export function AISection() {
    return (
        <section id="ai" className="relative overflow-hidden bg-background py-20 lg:py-28">
            {/* SVG Background - Circuit board pattern */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                    <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
                        <circle cx="40" cy="40" r="2" className="fill-primary/10" />
                        <line x1="40" y1="0" x2="40" y2="38" className="stroke-primary/5" strokeWidth="1" />
                        <line x1="40" y1="42" x2="40" y2="80" className="stroke-primary/5" strokeWidth="1" />
                        <line x1="0" y1="40" x2="38" y2="40" className="stroke-primary/5" strokeWidth="1" />
                        <line x1="42" y1="40" x2="80" y2="40" className="stroke-primary/5" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.p custom={0} variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Đột phá công nghệ
                    </motion.p>
                    <motion.h2 custom={1} variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Trí tuệ nhân tạo, sức mạnh vượt trội
                    </motion.h2>
                    <motion.p custom={2} variants={fadeUp} className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        Công nghệ AI tiên tiến giúp tối ưu hóa mọi trải nghiệm từ người chơi đến chủ sân.
                    </motion.p>
                </motion.div>

                {/* AI Technology visual */}
                <motion.div
                    className="relative mx-auto my-12 max-w-3xl overflow-hidden rounded-2xl shadow-2xl shadow-primary/15"
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Image
                        src="/images/ai-tech.jpg"
                        alt="Công nghệ trí tuệ nhân tạo của BadmintonHub"
                        width={960}
                        height={400}
                        className="h-56 w-full object-cover sm:h-72 lg:h-80"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-primary/10" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-secondary/15" />
                    {/* Floating AI badge on image */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 animate-ping rounded-full bg-secondary/20" />
                            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/80 shadow-2xl shadow-primary/40 backdrop-blur-sm">
                                <Icon path={mdiBrain} size={1.5} className="text-white" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {aiFeatures.map((feature, i) => (
                        <motion.div key={feature.title} custom={i} variants={fadeUp}>
                            <Card
                                className="h-full border-accent/20 bg-primary/5 transition-all hover:border-secondary/40 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <CardHeader>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-md">
                                        <Icon path={feature.icon} size={0.8} />
                                    </div>
                                    <CardTitle className="text-base">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
