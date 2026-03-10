import { PageHeader } from '@/components/docs/PageHeader'
import { Section } from '@/components/docs/Section'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PropsTable } from '@/components/docs/PropsTable'
import { Stepper, Step, useStepper } from '@/components/ui/stepper'
import { Button } from '@/components/ui/button'

const steps = [
  { label: 'Account', description: 'Create your account' },
  { label: 'Profile', description: 'Set up your profile', optional: true },
  { label: 'Preferences', description: 'Choose your settings' },
  { label: 'Review', description: 'Confirm and submit' },
]

function StepperControls() {
  const { activeStep, nextStep, prevStep } = useStepper()
  return (
    <div className="flex gap-3 justify-center mt-6">
      <Button variant="outlined" size="sm" onClick={prevStep} disabled={activeStep === 0}>Back</Button>
      <Button size="sm" onClick={nextStep} disabled={activeStep === steps.length - 1}>Next</Button>
    </div>
  )
}

export default function StepperDoc() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Stepper"
        description="Steppers convey progress through numbered steps, ideal for multi-step forms and guided flows."
      />
      <Section title="Horizontal Stepper">
        <ComponentPreview>
          <div className="w-full">
            <Stepper initialStep={1} steps={steps}>
              {steps.map((step) => (
                <Step key={step.label} label={step.label} description={step.description} />
              ))}
              <StepperControls />
            </Stepper>
          </div>
        </ComponentPreview>
        <CodeBlock code={`<Stepper initialStep={1} steps={steps}>\n  {steps.map(s => <Step key={s.label} label={s.label} />)}\n</Stepper>`} />
      </Section>
      <Section title="Vertical Stepper">
        <ComponentPreview>
          <Stepper initialStep={1} steps={steps} orientation="vertical" className="max-w-xs">
            {steps.map((step) => (
              <Step key={step.label} label={step.label} description={step.description} />
            ))}
          </Stepper>
        </ComponentPreview>
        <CodeBlock code={`<Stepper initialStep={1} steps={steps} orientation="vertical">\n  {steps.map(s => <Step key={s.label} label={s.label} />)}\n</Stepper>`} />
      </Section>
      <Section title="Props">
        <PropsTable
          props={[
            { name: 'steps', type: 'StepItem[]', required: true, description: 'Array of step objects with label, description, and optional flag' },
            { name: 'initialStep', type: 'number', required: true, description: 'Zero-based index of the initial active step' },
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Layout direction' },
            { name: 'variant', type: "'circle' | 'circle-alt' | 'line'", default: "'circle'", description: 'Visual style of step indicators' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of step icons' },
          ]}
        />
      </Section>
    </div>
  )
}
