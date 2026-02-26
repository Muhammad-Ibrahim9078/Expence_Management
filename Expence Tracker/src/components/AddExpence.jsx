import React, { useState } from 'react';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { BsCoin, BsCalendarDate } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { FiBriefcase } from 'react-icons/fi';
import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function AddExpence({ closeModal }) {
  const [selectedEmoji, setSelectedEmoji] = useState('💰');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const onEmojiClick = (emojiData) => {
    setSelectedEmoji(emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleAddExpence = async () => {
    if (!title || !amount) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/data/data', {
        title,
        type: 'expense', // fixed as expense
        amount: Number(amount),
        date: date || new Date()  // optional, backend default Date.now
      });

      console.log('Response:', res.data);
      // closeModal(); // close modal after success
      toast('Here is your toast.');
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className='p-10 relative'>
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        onClick={closeModal}
      >
        ✕
      </button>

      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <BsCoin className="text-yellow-500" />
        Add Expense
      </h1>

      <div className="flex flex-col items-center my-4 relative">
        <div className="relative">
          <div 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            {selectedEmoji}
          </div>
          <button 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="absolute -bottom-1 -right-1 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
          >
            <HiOutlineEmojiHappy className="text-gray-600 text-sm" />
          </button>
        </div>

        {showEmojiPicker && (
          <div className="absolute mt-20 z-10">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <FiBriefcase className="text-blue-500 text-sm" />
            Expense Source
          </label>
          <input 
            type="text" 
            placeholder='Freelance, Grocery, Rent, etc..'
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <MdAttachMoney className="text-green-500 text-sm" />
            Amount
          </label>
          <input 
            type="number" 
            placeholder='Amount'
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <BsCalendarDate className="text-purple-500 text-sm" />
            Date
          </label>
          <input 
            type="date" 
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-600"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button 
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 rounded-lg font-semibold text-base hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg mt-2"
          onClick={handleAddExpence}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpence;