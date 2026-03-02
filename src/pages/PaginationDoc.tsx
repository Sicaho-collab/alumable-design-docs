import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PropsTable } from '@/components/docs/PropsTable'
import { Pagination } from '@/components/ui/pagination'

export default function PaginationDoc() {
  const [page, setPage] = useState(1)
  const [page2, setPage2] = useState(5)

  return (
    <div className="space-y-12">
      <PageHeader
        title="Pagination"
        description="Pagination allows users to navigate between pages of content, showing their current position and total page count."
      />

      <Section title="Basic Pagination">
        <ComponentPreview>
          <Pagination page={page} totalPages={10} onPageChange={setPage} />
        </ComponentPreview>
        <CodeBlock>{`<Pagination page={1} totalPages={10} onPageChange={setPage} />`}</CodeBlock>
      </Section>

      <Section title="With First/Last Buttons">
        <ComponentPreview>
          <Pagination page={page2} totalPages={20} onPageChange={setPage2} showFirstLast siblingCount={2} />
        </ComponentPreview>
        <CodeBlock>{`<Pagination page={5} totalPages={20} onPageChange={setPage} showFirstLast siblingCount={2} />`}</CodeBlock>
      </Section>

      <Section title="Props">
        <PropsTable
          props={[
            { name: 'page', type: 'number', required: true, description: 'Current page (1-based)' },
            { name: 'totalPages', type: 'number', required: true, description: 'Total number of pages' },
            { name: 'onPageChange', type: '(page: number) => void', required: true, description: 'Page change callback' },
            { name: 'showFirstLast', type: 'boolean', defaultValue: 'false', description: 'Show first/last page buttons' },
            { name: 'siblingCount', type: 'number', defaultValue: '1', description: 'Pages shown on each side of current' },
          ]}
        />
      </Section>
    </div>
  )
}
