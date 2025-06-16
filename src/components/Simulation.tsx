import React, { useState, useRef, useEffect } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import {
  Send,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  Clock,
  User,
  Bot,
} from "lucide-react";
import { scenarios } from "../data/scenarios";
import { Message } from "../types";

interface SimulationProps {
  scenarioId: string;
}

export const Simulation: React.FC<SimulationProps> = ({ scenarioId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionStartTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scenario = scenarios.find((s) => s.id === scenarioId);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    // Initialize with scenario context
    const initialMessage: Message = {
      id: "1",
      content: `Welcome to the "${scenario?.title}" simulation. You are a registered nurse working in the ${scenario?.specialty} unit. The scenario begins now. Please describe your initial assessment approach.`,
      sender: "ai",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, [scenario]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response with feedback
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse.content,
        sender: "ai",
        timestamp: new Date(),
        feedback: aiResponse.feedback,
        isCorrect: aiResponse.isCorrect,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string) => {
    // Simplified AI response logic - in production, this would connect to an AI service
    const responses = [
      {
        content:
          "Good approach! You've correctly identified the need to assess vital signs first. The patient's blood pressure is 140/90, heart rate 95, respiratory rate 18, and temperature 99.2°F. What would be your next priority?",
        feedback: "Excellent prioritization of vital signs assessment.",
        isCorrect: true,
      },
      {
        content:
          "That's a reasonable action, but consider the patient's current pain level first. On a scale of 1-10, the patient rates their pain as 8/10. How does this information change your approach?",
        feedback: "Remember to always assess pain as the 5th vital sign.",
        isCorrect: false,
      },
      {
        content:
          "Perfect! You've demonstrated evidence-based practice by following the nursing process. The patient responds well to your intervention. Document your findings and continue monitoring.",
        feedback: "Outstanding clinical reasoning and intervention.",
        isCorrect: true,
      },
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getElapsedTime = () => {
    const elapsed = Math.floor(
      (currentTime.getTime() - sessionStartTime.getTime()) / 1000,
    );
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleEndSimulation = () => {
    router.navigate({ to: "/dashboard/scenarios" });
  };

  if (!scenario) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">
            Scenario Not Found
          </h1>
          <p className="mb-6 text-gray-600">
            The requested scenario could not be found.
          </p>
          <Link
            to="/dashboard/scenarios"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            Back to Scenarios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard/scenarios"
              className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                {scenario.title}
              </h1>
              <p className="text-sm text-gray-600">
                {scenario.specialty} • {scenario.difficulty}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>{getElapsedTime()}</span>
            </div>
            <button
              onClick={handleEndSimulation}
              className="rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-700 transition-colors duration-200 hover:bg-red-200"
            >
              End Simulation
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="mx-auto max-w-4xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-3xl rounded-lg px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200 bg-white text-gray-900"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === "ai" && (
                    <Bot className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  )}
                  {message.sender === "user" && (
                    <User className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={`mt-1 text-xs ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>

                {message.feedback && (
                  <div
                    className={`mt-3 rounded-md p-2 ${
                      message.isCorrect
                        ? "border border-green-200 bg-green-50"
                        : "border border-yellow-200 bg-yellow-50"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isCorrect ? (
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-600" />
                      )}
                      <p
                        className={`text-xs ${message.isCorrect ? "text-green-800" : "text-yellow-800"}`}
                      >
                        {message.feedback}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs rounded-lg border border-gray-200 bg-white px-4 py-3">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Describe your nursing action or assessment..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
