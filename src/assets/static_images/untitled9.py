import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftConfig, PeftModel
import bitsandbytes

base_model = "mistralai/Mistral-7B-Instruct-v0.2"
adapter = "GRMenon/mental-health-mistral-7b-instructv0.2-finetuned-V2"

tokenizer = AutoTokenizer.from_pretrained(
    base_model,
    add_bos_token=True,
    trust_remote_code=True,
    padding_side='left'
)

config = PeftConfig.from_pretrained(adapter)
model = AutoModelForCausalLM.from_pretrained(config.base_model_name_or_path,
                                             load_in_4bit=True,
                                             device_map='auto',
                                             torch_dtype='auto')
model = PeftModel.from_pretrained(model, adapter)

device = "cuda" if torch.cuda.is_available() else "cpu"
model.to(device)
model.eval()

messages = [
    {"role": "user", "content": "Hey Connor! I have been feeling a bit down lately.I could really use some advice on how to feel better? I really dont want to read, tell me in max 100 characters, please talk to me like my mother"},
     {"role": "assistant", "content": """The most basic advice is to take care of yourself. This includes healthy eating, staying hydrated, getting the the recommended amount of sleep, and staying active. Staying positive by exercising, eating well, and doing things that make you happy can also help your mood. Remember to stay positive, stay healthy! If the situation is one that is truly causing despair, it might be a good idea to talk to someone, whether it be a friend, family, or a professional, about what is troubling you. Keep in mind that feelings of sadness can be very different for every individual. For some, sadness can be a passing feeling that will go away on its own. However, for others, feeling sad can be an indication of a severe emotional distress. If at any point you feel like hurting yourself, this is a serious matter which calls for immediate attention. Talking to someone is the most important thing you can do to help yourself. Sometimes we just need someone to listen to that we can trust. Keep yourself busy with things that you enjoy, and you may find things becoming better than you thought they ever could! Good luck!Hope this helps a little,Lauren"""},
     {"role": "user", "content": "I didn't understand"}
]

input_ids = tokenizer.apply_chat_template(conversation=messages,
                                          tokenize=True,
                                          add_generation_prompt=True,
                                          return_tensors='pt').to(device)
output_ids = model.generate(input_ids=input_ids, max_new_tokens=512, do_sample=True, pad_token_id=2)
response = tokenizer.batch_decode(output_ids.detach().cpu().numpy(), skip_special_tokens = True)

# Model response:
print(response[0])

torch.save(model.state_dict(), 'mindful.pth')
tokenizer.save_pretrained('mindful_dict')

