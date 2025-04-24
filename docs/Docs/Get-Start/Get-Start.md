---
title: Quick Start
slug: quick-start
sidebar_position: 1
---


# Quick Start

GPT API Proxy provides a unified API that gives you access to hundreds of AI models through a single endpoint, while automatically handling fallbacks and selecting the most cost-effective options. Get started with just a few lines of code using your preferred SDK or framework.





## Use shell command

> Note that you must replace with our api base and api key, missing either one will not work.

```shell
curl https://api.llmproai.xyz/v1/chat/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer sk-xxxxx" \
-d '{
    "model": "gpt-4o-mini",
    "messages": [{"role": "user", "content": "Hello!"}]
}'
```


## Or use the OpenAI SDK

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python">

```python
from openai import OpenAI

client = OpenAI(
  base_url="https://api.llmproai.xyz/v1/",
  api_key="<OPENROUTER_API_KEY>",
)

completion = client.chat.completions.create(
  model="openai/gpt-4o",
  messages=[
    {
      "role": "user",
      "content": "What is the meaning of life?"
    }
  ]
)

print(completion.choices[0].message.content)
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.llmproai.xyz/v1/',
  apiKey: '<your apikey>',
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'openai/gpt-4o',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  });

  console.log(completion.choices[0].message);
}

main();
```

  </TabItem>
</Tabs>


## Getting Started

### 1. Get Your API Key

To access the API, you'll need to generate an API key:

1. Navigate to the [Token page](https://api.llmproai.xyz/token)
2. Click "Generate Token"
3. Enter a name for your token
4. Click "Submit"
5. Copy your generated token to use in your API requests

### 2. Choose a Model

To use free models available on the platform:

1. Visit the [Pricing page](https://api.llmproai.xyz/pricing)
2. Filter by "Free" in the "Billing type" section
3. Click on any "Model name" to automatically copy it to your clipboard
4. Use this model name in your API requests




## Model Domain Replacement Rules

| Model Provider | Original Domain | Replace with | Notes |
|---|---|---|---|
| OpenAI | [https://api.openai.com/v1](https://api.openai.com/v1) | `https://api.llmproai.xyz/v1/` | Generally need to add /v1 |
| Anthropic | [https://api.anthropic.com](https://api.anthropic.com) |`https://api.llmproai.xyz/v1/`|  |
| Gemini | [https://generativelanguage.googleapis.com](https://generativelanguage.googleapis.com) |`https://api.llmproai.xyz/v1/`|  |

:::warning

Note when configuring api_base, you should add a /v1 suffix, not just the domain, otherwise you'll get a 404 error.

Some outdated documentation may provide examples with the engine field, which has been deprecated. Direct OpenAI calls can work because OpenAI maintains historical compatibility, but the platform does not support these deprecated interface formats.
:::
