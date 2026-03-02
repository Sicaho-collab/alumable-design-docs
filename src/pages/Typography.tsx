import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'

interface TypeStyle {
  name: string
  fontSize: string
  lineHeight: string
  fontWeight: string
  letterSpacing: string
  className: string
}

interface TypeCategory {
  category: string
  description: string
  styles: TypeStyle[]
}

const typeScale: TypeCategory[] = [
  {
    category: 'Display',
    description:
      'Display styles are reserved for short, important text or numerals. They work best on large screens.',
    styles: [
      {
        name: 'Display Large',
        fontSize: '57px',
        lineHeight: '64px',
        fontWeight: '400',
        letterSpacing: '-0.25px',
        className: 'text-[57px] leading-[64px] font-normal tracking-[-0.25px]',
      },
      {
        name: 'Display Medium',
        fontSize: '45px',
        lineHeight: '52px',
        fontWeight: '400',
        letterSpacing: '0px',
        className: 'text-[45px] leading-[52px] font-normal tracking-normal',
      },
      {
        name: 'Display Small',
        fontSize: '36px',
        lineHeight: '44px',
        fontWeight: '400',
        letterSpacing: '0px',
        className: 'text-[36px] leading-[44px] font-normal tracking-normal',
      },
    ],
  },
  {
    category: 'Headline',
    description:
      'Headlines are best suited for short, high-emphasis text on smaller screens. They can complement display styles for brief text.',
    styles: [
      {
        name: 'Headline Large',
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: '400',
        letterSpacing: '0px',
        className: 'text-[32px] leading-[40px] font-normal tracking-normal',
      },
      {
        name: 'Headline Medium',
        fontSize: '28px',
        lineHeight: '36px',
        fontWeight: '400',
        letterSpacing: '0px',
        className: 'text-[28px] leading-[36px] font-normal tracking-normal',
      },
      {
        name: 'Headline Small',
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '400',
        letterSpacing: '0px',
        className: 'text-[24px] leading-[32px] font-normal tracking-normal',
      },
    ],
  },
  {
    category: 'Title',
    description:
      'Titles are smaller than headlines. They should be used for medium-emphasis text that remains relatively short.',
    styles: [
      {
        name: 'Title Large',
        fontSize: '22px',
        lineHeight: '28px',
        fontWeight: '400',
        letterSpacing: '0px',
        className: 'text-[22px] leading-[28px] font-normal tracking-normal',
      },
      {
        name: 'Title Medium',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '500',
        letterSpacing: '0.15px',
        className: 'text-[16px] leading-[24px] font-medium tracking-[0.15px]',
      },
      {
        name: 'Title Small',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        letterSpacing: '0.1px',
        className: 'text-[14px] leading-[20px] font-medium tracking-[0.1px]',
      },
    ],
  },
  {
    category: 'Body',
    description:
      'Body styles are used for longer passages of text in your application. They are optimized for readability at small sizes.',
    styles: [
      {
        name: 'Body Large',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '400',
        letterSpacing: '0.5px',
        className: 'text-[16px] leading-[24px] font-normal tracking-[0.5px]',
      },
      {
        name: 'Body Medium',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '400',
        letterSpacing: '0.25px',
        className: 'text-[14px] leading-[20px] font-normal tracking-[0.25px]',
      },
      {
        name: 'Body Small',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '400',
        letterSpacing: '0.4px',
        className: 'text-[12px] leading-[16px] font-normal tracking-[0.4px]',
      },
    ],
  },
  {
    category: 'Label',
    description:
      'Label styles are used for utility text like captions, overlines, and annotations. They are the smallest type sizes.',
    styles: [
      {
        name: 'Label Large',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        letterSpacing: '0.1px',
        className: 'text-[14px] leading-[20px] font-medium tracking-[0.1px]',
      },
      {
        name: 'Label Medium',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: '500',
        letterSpacing: '0.5px',
        className: 'text-[12px] leading-[16px] font-medium tracking-[0.5px]',
      },
      {
        name: 'Label Small',
        fontSize: '11px',
        lineHeight: '16px',
        fontWeight: '500',
        letterSpacing: '0.5px',
        className: 'text-[11px] leading-[16px] font-medium tracking-[0.5px]',
      },
    ],
  },
]

export default function Typography() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Typography"
        description="The Material 3 type scale defines 15 styles across 5 roles: Display, Headline, Title, Body, and Label. Each is tuned for readability and hierarchy."
      />

      {typeScale.map((category) => (
        <Section
          key={category.category}
          title={category.category}
          description={category.description}
        >
          <div className="space-y-6">
            {category.styles.map((style) => (
              <div
                key={style.name}
                className="rounded-m3-md border border-m3-outline-variant overflow-hidden"
              >
                {/* Preview */}
                <div className="p-6 bg-m3-surface">
                  <span className={`${style.className} text-m3-on-surface`}>
                    {style.name}
                  </span>
                </div>

                {/* Properties */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-m3-outline-variant border-t border-m3-outline-variant">
                  <div className="bg-m3-surface-container-low px-4 py-3">
                    <p className="text-[11px] font-medium text-m3-on-surface-variant uppercase tracking-wider mb-1">
                      Font Size
                    </p>
                    <code className="text-sm text-m3-on-surface">{style.fontSize}</code>
                  </div>
                  <div className="bg-m3-surface-container-low px-4 py-3">
                    <p className="text-[11px] font-medium text-m3-on-surface-variant uppercase tracking-wider mb-1">
                      Line Height
                    </p>
                    <code className="text-sm text-m3-on-surface">{style.lineHeight}</code>
                  </div>
                  <div className="bg-m3-surface-container-low px-4 py-3">
                    <p className="text-[11px] font-medium text-m3-on-surface-variant uppercase tracking-wider mb-1">
                      Weight
                    </p>
                    <code className="text-sm text-m3-on-surface">{style.fontWeight}</code>
                  </div>
                  <div className="bg-m3-surface-container-low px-4 py-3">
                    <p className="text-[11px] font-medium text-m3-on-surface-variant uppercase tracking-wider mb-1">
                      Letter Spacing
                    </p>
                    <code className="text-sm text-m3-on-surface">{style.letterSpacing}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </div>
  )
}
