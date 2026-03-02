import { useState } from 'react'
import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PropsTable } from '@/components/docs/PropsTable'
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuCheckboxItem, MenuSeparator, MenuLabel, MenuSub, MenuSubTrigger, MenuSubContent } from '@/components/ui/menu'
import { Button } from '@/components/ui/button'
import { Copy, Trash, Edit, ChevronRight, Star, Share } from 'lucide-react'

export default function MenuDoc() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="space-y-12">
      <PageHeader title="Menu" description="Menus display a list of choices on a temporary surface. They appear when users interact with a button, action, or other control." />
      <Section title="Basic Menu">
        <ComponentPreview>
          <Menu>
            <MenuTrigger asChild>
              <Button variant="outlined">Open Menu</Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem leading={<Edit />}>Edit</MenuItem>
              <MenuItem leading={<Copy />}>Duplicate</MenuItem>
              <MenuItem leading={<Share />} trailing="⌘S">Share</MenuItem>
              <MenuSeparator />
              <MenuItem leading={<Trash />} className="text-m3-error">Delete</MenuItem>
            </MenuContent>
          </Menu>
        </ComponentPreview>
        <CodeBlock>{`<Menu>
  <MenuTrigger asChild><Button>Open Menu</Button></MenuTrigger>
  <MenuContent>
    <MenuItem leading={<Edit />}>Edit</MenuItem>
    <MenuSeparator />
    <MenuItem leading={<Trash />}>Delete</MenuItem>
  </MenuContent>
</Menu>`}</CodeBlock>
      </Section>
      <Section title="With Labels & Checkboxes">
        <ComponentPreview>
          <Menu>
            <MenuTrigger asChild><Button variant="tonal">Options</Button></MenuTrigger>
            <MenuContent>
              <MenuLabel>View</MenuLabel>
              <MenuCheckboxItem checked={checked} onCheckedChange={setChecked}>Show Labels</MenuCheckboxItem>
              <MenuSeparator />
              <MenuSub>
                <MenuSubTrigger>More</MenuSubTrigger>
                <MenuSubContent>
                  <MenuItem leading={<Star />}>Favourite</MenuItem>
                </MenuSubContent>
              </MenuSub>
            </MenuContent>
          </Menu>
        </ComponentPreview>
      </Section>
    </div>
  )
}
