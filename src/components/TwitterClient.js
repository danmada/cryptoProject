import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3000";

function TwitterClient ({query}) {
const [response, setResponse] = useState("");

useEffect(() => {
  const socket = socketIOClient(ENDPOINT);
  socket.on('https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id', data => {
    setResponse(data);
  });
}, []);
    
    return (
      <div>
        <h2>
        Tweet Info: {response}
        </h2>
      </div>
    );
    
}

export default TwitterClient