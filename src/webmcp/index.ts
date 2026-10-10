/**
 * tekivex-ui/webmcp — make the UI itself operable by AI agents.
 *
 * Browser agents (Chrome's WebMCP `navigator.modelContext`, computer-use
 * models reading the accessibility tree, in-page copilots) can discover and
 * call tools your components declare, instead of guessing from pixels.
 *
 *   import { useAgentTool, TkxAgentConfirm } from 'tekivex-ui/webmcp';
 *
 * Every call passes through SecurityCore: schema validation, string
 * sanitisation, per-tool rate limiting, confirmation gates for side effects,
 * and the SHA-256 hash-chained audit trail.
 */
export {
  registerAgentTool,
  callAgentTool,
  validateAgentInput,
  getAgentToolManifest,
  onAgentToolsChange,
  setAgentConfirmHook,
  isWebMcpSupported,
  listAgentTools,
  resetAgentTools,
  AGENT_MANIFEST_MIME,
  AGENT_MANIFEST_GLOBAL,
} from './registry';
export type {
  AgentToolDefinition,
  AgentToolSchema,
  AgentToolSchemaProperty,
  AgentToolContext,
  AgentToolResult,
  AgentToolManifest,
  AgentToolManifestEntry,
  AgentToolCallOutcome,
  AgentToolErrorCode,
  ConfirmHook,
} from './registry';
export { useAgentTool, useFormAgentTool, useAgentToolManifest, TkxAgentConfirm } from './react';
export type { AgentFormField, FormAgentToolOptions, TkxAgentConfirmProps } from './react';
