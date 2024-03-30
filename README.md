# StudyBuddy

StudyBuddy is a project that helps students and teachers find study materials
with the help of AI agents

# High-level Design
!["Basic flow of the application"](design.png)


## Installation

1. Clone the repository: 
```
git clone https://github.com/your-username/StudyBuddy.git
cd StudyBuddy
```
2. Basic Setup
    - To install poetry visit [poetry](https://python-poetry.org/)
        

3. Setup backend
    - Change your directory to server
        `cd server`
    - Run `poetry install --no-root`
    - Add api keys for `YOUTUBE` `OPENAI` and `SERPER` as mentioned in `.env.example`
    - Run `api.py`
    - Additionally test the following endpoints on postman :
    ```http
   ### 
   POST http://localhost:3001/api/crew/
   Content-Type: application/json
   
   {
     "subjects": ["SUBJECT 1","SUBJECT 2",....,""],
     "topics":["TOPIC 1","TOPIC2",....,""] 
   }

   Expect code 202 and 

   {
    "job_id": "39c6cd78-c4c6-4069-bac0-ffc7d757c3d0"
    }


   GET https://localhost:3001/api/crew/<job_id>

   ######

   Expect code 200 and

    {
        "events": [
            {
                "data": "Task Started",
                "timestamp": ""
            },
            {
                "data": "",
                "timestamp": ""
            }
        ],
        "job_id": "",
        "result": "",
        "status": "STARTED"
}
   


   
 
```

4. Setup frontend
    - Change directory to client `cd client`
    - Run `pnpm install`
    - Add api keys for clerk as mentioned in `.env.example`
    - Run `pnpm dev`




## License

This project is licensed under the [MIT License](LICENSE).

