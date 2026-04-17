'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Dumbbell } from 'lucide-react'

export default function ConceptPage() {
  return (
    <div className="px-4 pt-6 pb-8 space-y-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-normal">PhysicalGoとは</h1>
      </div>

      {/* Hero */}
      <div className="flex flex-col items-center text-center py-6 space-y-4">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
          <Dumbbell className="w-9 h-9 text-white" />
        </div>
        <p className="text-3xl font-light tracking-tight">
          撮る・記録する・振り返る。
        </p>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
          トレーニングを楽しみながら、<br />結果として身体が変わっていく体験。
        </p>
      </div>

      {/* Concept blocks */}
      <div className="space-y-5">
        <ConceptBlock
          emoji="📸"
          title="フォームを撮る"
          description="動画をアップロードするだけ。AIパーソナルトレーナーがフォームを分析して、できていることと改善点を具体的に教えてくれます。"
        />
        <ConceptBlock
          emoji="💪"
          title="記録する"
          description="ハーフデッドリフト・懸垂・ベンチプレスの3種目に絞ることで、シンプルに続けられます。自己ベスト更新のさりげない喜びが積み重なります。"
        />
        <ConceptBlock
          emoji="📈"
          title="振り返る"
          description="過去のフォーム動画を並べて比較できます。1ヶ月前の自分と今の自分を見比べることで、成長実感がモチベーションになります。"
        />
      </div>

      {/* Design philosophy */}
      <div className="border-t border-border/50 pt-6 space-y-4">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">設計哲学</h2>
        <div className="space-y-3">
          <PhilosophyItem text="数値（体重・体脂肪・kg）は「見れる」けど主役じゃない" />
          <PhilosophyItem text="主役は「フォームの成長実感」と「自己ベスト更新の小さな喜び」" />
          <PhilosophyItem text="低頻度（週1〜月1）でも使いたくなる設計" />
          <PhilosophyItem text="数値に縛られず、楽しさがモチベーションになる状態を維持する" />
        </div>
      </div>

      {/* Target user */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold text-sm">こんな人のために作りました</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          筋トレは続けているけど、フォームが正しいか不安。成長しているのかわからない。数値管理はしんどい。でもトレーニング自体は楽しみたい——そんな人のためのアプリです。
        </p>
      </div>

      {/* 3 exercises */}
      <div className="space-y-3">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">対応種目</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { emoji: '🏋️', name: 'ハーフ\nデッドリフト' },
            { emoji: '💪', name: '懸垂' },
            { emoji: '🤸', name: 'ベンチ\nプレス' },
          ].map(ex => (
            <div key={ex.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/40 text-center">
              <span className="text-2xl">{ex.emoji}</span>
              <p className="text-xs font-medium whitespace-pre-line leading-tight">{ex.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-muted-foreground">PhysicalGo v1.0.0</p>
      </div>
    </div>
  )
}

function ConceptBlock({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="text-2xl shrink-0 mt-0.5">{emoji}</div>
      <div className="space-y-1">
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function PhilosophyItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-primary mt-1 shrink-0">—</span>
      <p className="text-sm text-foreground/80">{text}</p>
    </div>
  )
}
