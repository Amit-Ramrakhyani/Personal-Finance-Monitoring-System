# Delta IV WH15 - FinTech 

Submission by Team Delta IV for the WittyHacks.

**How to Run**

- First clone branches: `frontend` , `backend` and `backend-api` and `Android` from the main repo.

- ~~Run Python Query App (Install all dependencies first)
`python3 app.py`~~

- Go to http://localhost:3174, the UI will be loaded (Read the Operator Guider before Proceeding)
- All API's are hosted in  ` http://localhost:5000/logger `
 Read the API References before Proceeding.



 
## **How to Operate**
 - All major services will take some time and use atlest 8GiB of Memory during Startup. Its a **MicroService Architecture**, so running all standalone services in one machine will eat up some memory.

 - Go to http://localhost:3174, the UI will be loaded
 - Create User Account and Start Using the System.
 - There are other features like **Goals** and **Investments** which are still under development.

## Features
|Features| In Service |
|-|--|
|  Finance Management  | ✅ |
| Telegram & Whatsapp Bot Integration |✅ |
| Good Looking UI | ✅ |
| Google Assistant Integration | ❌ | 
| Real/Near Real-Time MLOps |  *✅ |
| Multi-Parameters | ✅ |
| Range: Time based | ✅ |
| Range: Date based | ✅ |
| Auto SMS Transactions Tracking | ✅ |
| Message based Quering (raw text) | ✅ 


### Technical Choices:

-   **Express and Kafka:**
    
    -   Express server handles HTTP.
    -   Kafka serves as a scalable and fault-tolerant message broker.
-   **Elasticsearch:**
    
    -   Elasticsearch provides real-time indexing and powerful search capabilities, suitable for efficient log data storage.
-   **Consumer  (Node.js/Python):**
    
    -   Choice of Node.js for the consumer service allows flexibility based on team expertise and preferences.

<br>

Technology WE Used:

- **Python** (For Querying and Searching)
- **NodeJS** (For Handling Concurrency, can be replace with GoLang, but im familer with express more than Go)
 - **Apache Kafka** (Partition=1)
 - **Elastic Search** (Also added Full Text Search Capabilities)
 - **Docker** (*Microservices Architecture*, So that we can deploy services on multiple server for fault tolerence)
 - **REACTJS for UI** *(Still under development)*

