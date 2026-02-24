import * as React from 'react';
import { Box } from '../system/Box';
import { Stack } from '../system/Stack';
import { Button } from '../components/Button';
import { Table } from '../components/Table';
import { Switch } from '../components/Switch';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { darkTheme, globalStyles } from '../core/stitches.config';

globalStyles();

/** Complete usage example for inq-ui-sition components. */
export function AppExample() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [enabled, setEnabled] = React.useState(true);

  return (
    <Box className={dark ? darkTheme : ''} css={{ minHeight: '100dvh', backgroundColor: '$background', color: '$text' }}>
      <Box css={{ display: 'grid', gridTemplateColumns: '1fr', '@md': { gridTemplateColumns: '16rem 1fr' } }}>
        <Sidebar open={open} onClose={() => setOpen(false)}>
          <Stack gap="4">
            <Box css={{ fontSize: '$lg', fontWeight: 700 }}>inq-ui-sition</Box>
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

          <Stack gap="4" css={{ padding: '$4' }}>
            <Stack gap="3" css={{ '@sm': { flexDirection: 'row' } }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg" variant="ghost">
                Large Ghost
              </Button>
            </Stack>

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
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
