const envConfig = {
  INTEGRATION_ID: import.meta.env.VITE_INKEEP_INTEGRATION_ID ?? '',
  API_KEY: import.meta.env.VITE_INKEEP_API_KEY ?? '',
  ORGANIZATION_ID: import.meta.env.VITE_INKEEP_ORGANIZATION_ID ?? '',
};

const baseSettings = {
  integrationId: envConfig.INTEGRATION_ID || '',
  apiKey: envConfig.API_KEY || '',
  organizationId: envConfig.ORGANIZATION_ID || '',
  primaryBrandColor: '#000000',
};
const aiChatSettings = {
  quickQuestions: [
    'How to get started?',
  ],
};

export const inkeepProps = {
  baseSettings,
  aiChatSettings,
}
