from llama_index.core import VectorStoreIndex, ServiceContext, get_response_synthesizer
from llama_index.core.retrievers import VectorIndexRetriever
from llama_index.core.query_engine import RetrieverQueryEngine
from llama_index.core.postprocessor import SimilarityPostprocessor
from llama_index.embeddings.gemini import GeminiEmbedding
from llama_index.llms.gemini import Gemini
import google.generativeai as genai
from llama_index.core.storage.storage_context import StorageContext
from llama_index.readers.web import SimpleWebPageReader, NewsArticleReader
from llama_index.vector_stores.chroma import ChromaVectorStore
import llama_index
from googlesearch import search
from dotenv import load_dotenv
import os
import chromadb
import requests

load_dotenv()

def fetch_top_websites(query, num_results=3):
    search_results = search(query, num_results=num_results)
    urls = []
    for url in search_results:
        urls.append(str(url))
    
    documents = SimpleWebPageReader().load_data(urls=urls)
    
    embdding_instance = GeminiEmbedding(api_key=os.getenv("GOOGLE_GEMINI_AI"))
    service_context = ServiceContext.from_defaults(llm=None, embed_model=embdding_instance)
    index = VectorStoreIndex.from_documents(documents=documents, service_context=service_context)
    
    return index

# LLM
def llm_gemini(query, index=None):
    if index:
        llm = Gemini(api_key= os.getenv("GOOGLE_GEMINI_AI"))
        embedding_instance = GeminiEmbedding(api_key=os.getenv("GOOGLE_GEMINI_AI"))
        service_context = ServiceContext.from_defaults(llm=llm, embed_model=embedding_instance)
        retriever = VectorIndexRetriever(
            index=index,
            similarity_top_k=10,
        )
        response_synthesizer = get_response_synthesizer(service_context=service_context)
        query_engine = RetrieverQueryEngine(
            retriever=retriever,
            response_synthesizer=response_synthesizer,
            node_postprocessors=[SimilarityPostprocessor(similarity_cutoff=0.7)],
        )
        response = query_engine.query(query)
        return response
    else:
        genai.configure(api_key=os.getenv("GOOGLE_GEMINI_AI"))
        model = genai.load_model("gemini-pro")
        response = model.query(query)
        return response

# Example usage
query = "How to manage personal finance?"
response = fetch_top_websites(query=query)
response = llm_gemini(query=query, index=response)
print(response)