import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

// Overview pages
import GettingStarted from '@/pages/GettingStarted'
import DesignTokens from '@/pages/DesignTokens'
import Typography from '@/pages/Typography'

// Component pages
import ButtonDoc from '@/pages/ButtonDoc'
import FABDoc from '@/pages/FABDoc'
import IconButtonDoc from '@/pages/IconButtonDoc'
import CardDoc from '@/pages/CardDoc'
import ChipDoc from '@/pages/ChipDoc'
import DialogDoc from '@/pages/DialogDoc'
import TabsDoc from '@/pages/TabsDoc'
import CheckboxDoc from '@/pages/CheckboxDoc'
import RadioDoc from '@/pages/RadioDoc'
import SwitchDoc from '@/pages/SwitchDoc'
import SliderDoc from '@/pages/SliderDoc'
import TextFieldDoc from '@/pages/TextFieldDoc'
import BadgeDoc from '@/pages/BadgeDoc'
import ProgressDoc from '@/pages/ProgressDoc'
import SnackbarDoc from '@/pages/SnackbarDoc'
import TooltipDoc from '@/pages/TooltipDoc'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Overview */}
          <Route path="/" element={<GettingStarted />} />
          <Route path="/tokens" element={<DesignTokens />} />
          <Route path="/typography" element={<Typography />} />

          {/* Actions */}
          <Route path="/components/button" element={<ButtonDoc />} />
          <Route path="/components/fab" element={<FABDoc />} />
          <Route path="/components/icon-button" element={<IconButtonDoc />} />

          {/* Communication */}
          <Route path="/components/badge" element={<BadgeDoc />} />
          <Route path="/components/progress" element={<ProgressDoc />} />
          <Route path="/components/snackbar" element={<SnackbarDoc />} />
          <Route path="/components/tooltip" element={<TooltipDoc />} />

          {/* Containment */}
          <Route path="/components/card" element={<CardDoc />} />
          <Route path="/components/dialog" element={<DialogDoc />} />

          {/* Navigation */}
          <Route path="/components/tabs" element={<TabsDoc />} />
          <Route path="/components/chip" element={<ChipDoc />} />

          {/* Selection */}
          <Route path="/components/checkbox" element={<CheckboxDoc />} />
          <Route path="/components/radio" element={<RadioDoc />} />
          <Route path="/components/switch" element={<SwitchDoc />} />
          <Route path="/components/slider" element={<SliderDoc />} />

          {/* Text Input */}
          <Route path="/components/text-field" element={<TextFieldDoc />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
