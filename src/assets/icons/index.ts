/* eslint-disable @typescript-eslint/no-explicit-any */
const requireAll = (requireContext: any) =>
  requireContext.keys().map(requireContext);
const req = (require as any).context('@assets/icons', true, /\.svg$/);
requireAll(req);
