import * as React from 'react';
import { cx } from '../core/cx';
import * as styles from './Table.css';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

/** Mobile-first data table with responsive enhancement at md+. */
export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className={styles.root}>
      <table className={cx(styles.table, className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export const TableHead = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={cx(styles.mobileHiddenHead, className)} {...props} />
);

export const TableBody = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cx(styles.tableBody, className)} {...props} />
);

export const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cx(styles.tableRow, className)} {...props} />
);

export const TableHeaderCell = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className={cx(styles.th, className)} {...props} />
);

export const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={cx(styles.td, className)} {...props} />
);
