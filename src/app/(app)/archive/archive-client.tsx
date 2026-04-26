No TypeScript errors. The file is created at `app/(app)/archive/archive-client.tsx` with a working `ArchiveClient` component that:

- Displays resolved approval queue items in a sortable table
- Provides state filters (all / approved / rejected) and category filters
- Follows the exact same patterns and design tokens as the rest of the codebase (`approval-client.tsx`, `dashboard-client.tsx`)
- Uses `@takaki/go-design-system` components (`Badge`, `EmptyState`) and `lucide-react` icons