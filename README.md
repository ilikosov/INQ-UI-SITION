<p align="center">
  <img src="assets/logo.svg" width="520" alt="InqUIsition logo" />
</p>

<h1 align="center">InqUIsition</h1>

<p align="center">
  Mobile-first CSS-in-JS framework forged in discipline.
</p>

<p align="center">
  <b>Purge the unnecessary.</b>
</p>

---

## ⚔ About

**InqUIsition** is a minimal, scalable UI framework built with:

- ⚛ React
- 🧠 TypeScript
- 🎨 Stitches (CSS-in-JS)
- 📱 Mobile-first architecture

Designed for pet projects that demand structure, clarity, and discipline.

No inline chaos. No unnecessary abstractions. No mercy.

---

## 🔥 Philosophy

- Mobile-first
- Strict layout primitives
- Variant-driven components
- Zero overengineering
- Clean separation of core / system / components
- Tree-shake friendly

---

## 📦 Installation

```bash
npm install inq-ui-sition
```

---

## 🚀 Examples

### Setup

```tsx
import * as React from 'react';
import { globalStyles, darkTheme } from 'inq-ui-sition';

globalStyles();

export function App() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <div className={isDark ? darkTheme : ''}>
      <button onClick={() => setIsDark((v) => !v)}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### Layout Primitives (`Box`, `Stack`)

```tsx
import { Box, Stack } from 'inq-ui-sition';

export function LayoutExample() {
  return (
    <Box css={{ padding: '$4' }}>
      <Stack gap="4">
        <Box css={{ backgroundColor: '$surface', padding: '$4', borderRadius: '$md' }}>
          First block
        </Box>
        <Box css={{ backgroundColor: '$surface', padding: '$4', borderRadius: '$md' }}>
          Second block
        </Box>
      </Stack>
    </Box>
  );
}
```

### Button

```tsx
import { Button, Stack } from 'inq-ui-sition';

export function ButtonExample() {
  return (
    <Stack gap="3">
      <Button variant="primary" size="sm">Save</Button>
      <Button variant="primary" size="md">Save</Button>
      <Button variant="ghost" size="lg">Cancel</Button>
    </Stack>
  );
}
```

### Switch (controlled + uncontrolled)

```tsx
import * as React from 'react';
import { Switch, Stack } from 'inq-ui-sition';

export function SwitchExample() {
  const [checked, setChecked] = React.useState(true);

  return (
    <Stack gap="3">
      <Switch checked={checked} onCheckedChange={setChecked} />
      <Switch defaultChecked />
    </Stack>
  );
}
```

### Table (mobile-first)

```tsx
import { Table } from 'inq-ui-sition';

export function TableExample() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Name">Ari</td>
          <td data-label="Role">Admin</td>
          <td data-label="Status">Active</td>
        </tr>
        <tr>
          <td data-label="Name">Noa</td>
          <td data-label="Role">Editor</td>
          <td data-label="Status">Pending</td>
        </tr>
      </tbody>
    </Table>
  );
}
```

### Sidebar + Topbar

```tsx
import * as React from 'react';
import { Button, Sidebar, Topbar, Box } from 'inq-ui-sition';

export function ShellExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box css={{ display: 'grid', gridTemplateColumns: '1fr', '@md': { gridTemplateColumns: '16rem 1fr' } }}>
      <Sidebar open={open} onClose={() => setOpen(false)}>
        Navigation
      </Sidebar>

      <Box>
        <Topbar
          left={<Button variant="ghost" onClick={() => setOpen(true)}>Menu</Button>}
          right={<Button>Action</Button>}
        />
        <Box css={{ padding: '$4' }}>Main content</Box>
      </Box>
    </Box>
  );
}
```
