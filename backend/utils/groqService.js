const Groq = require('groq-sdk');

class GroqService {
  constructor() {
    this.groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: process.env.GROQ_BASE_URL,
    });
    this.model = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
  }

  async createChatCompletion(messages, options = {}) {
    try {
      const completion = await this.groq.chat.completions.create({
        messages,
        model: this.model,
        temperature: options.temperature || 0.7,
        max_tokens: options.max_tokens || 1000,
        top_p: options.top_p || 1,
        frequency_penalty: options.frequency_penalty || 0,
        presence_penalty: options.presence_penalty || 0,
        stream: options.stream || false,
      });

      return {
        success: true,
        content: completion.choices[0].message.content,
        usage: completion.usage,
        model: completion.model,
      };
    } catch (error) {
      console.error('Groq API Error:', error);
      throw new Error(`Groq API Error: ${error.message}`);
    }
  }

  async moderateContent(content) {
    try {
      const response = await this.createChatCompletion([
        {
          role: 'system',
          content: 'You are a content moderator. Check if the content contains harmful, inappropriate, or sensitive material. Respond only with "SAFE" or "UNSAFE".',
        },
        {
          role: 'user',
          content: content,
        },
      ]);

      return response.content.trim() === 'SAFE';
    } catch (error) {
      console.error('Content moderation failed:', error);
      return true; // Allow by default if moderation fails
    }
  }

  async generateResponse(prompt, context = '') {
    const messages = [
      {
        role: 'system',
        content: `You are an AI assistant for an enterprise SaaS platform. ${context}`,
      },
      {
        role: 'user',
        content: prompt,
      },
    ];

    return this.createChatCompletion(messages);
  }
}

module.exports = new GroqService();