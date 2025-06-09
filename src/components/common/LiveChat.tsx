import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to your chat service
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 w-80 h-96 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-sm opacity-90">We're here to help!</p>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-dark-700 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Hello! How can we help you today?</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Support Team</span>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-dark-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={sendMessage}
                  className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Open live chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
};

export default LiveChat;