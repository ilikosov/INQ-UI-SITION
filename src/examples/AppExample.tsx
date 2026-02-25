import * as React from 'react';
import { Box } from '../system/Box';
import { Stack } from '../system/Stack';
import { Button } from '../components/Button';
import { Switch } from '../components/Switch';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { darkTheme, globalStyles } from '../core/theme.css';
import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';

globalStyles();

/** Complete usage example for inq-ui-sition components. */
export function AppExample() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [enabled, setEnabled] = React.useState(true);

  return (
    <Box className={dark ? darkTheme : ''} style={{ minHeight: '100dvh' }}>
      <Box style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        <Sidebar open={open} onClose={() => setOpen(false)}>
          <Stack gap={4}>
            <Box style={{ fontSize: '1.125rem', fontWeight: 700 }}>inq-ui-sition</Box>
            <Button variant="ghost" onClick={() => setDark((v) => !v)}>
              Toggle theme
            </Button>
          </Stack>
        </Sidebar>

        <Box>
          <Topbar
            left={
              <Button variant="ghost" onClick={() => setOpen(true)}>
                Menu
              </Button>
            }
            right={<Switch checked={enabled} onCheckedChange={setEnabled} aria-label="Enable feature" />}
          />

          <Stack gap={4} style={{ padding: '1rem' }}>
            <Stack gap={3}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg" variant="ghost">
                Large Ghost
              </Button>
            </Stack>

            <Table>
              <TableHead>
                <tr>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Role</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </tr>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell data-label="Name">Ari</TableCell>
                  <TableCell data-label="Role">Admin</TableCell>
                  <TableCell data-label="Status">Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell data-label="Name">Noa</TableCell>
                  <TableCell data-label="Role">Editor</TableCell>
                  <TableCell data-label="Status">Pending</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
