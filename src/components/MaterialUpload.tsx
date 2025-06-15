import React, { useState } from 'react';
import { Upload, FileText, Video, Plus, X, CheckCircle } from 'lucide-react';

export const MaterialUpload: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; type: string; size: string }>>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const newFiles = files.map(file => ({
      name: file.name,
      type: file.type.includes('pdf') ? 'PDF' : file.type.includes('video') ? 'Video' : 'Other',
      size: (file.size / 1024 / 1024).toFixed(1) + ' MB'
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const generateScenarios = () => {
    setIsGenerating(true);
    // Simulate scenario generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Scenarios generated successfully! Check the Scenarios tab to see your custom scenarios.');
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Course Materials</h1>
        <p className="text-gray-600">Upload your course materials to generate custom nursing simulation scenarios.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <div className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
              dragActive
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Upload your materials</h3>
            <p className="text-gray-600 mb-4">Drag and drop files here, or click to browse</p>
            <input
              type="file"
              multiple
              accept=".pdf,.mp4,.mov,.avi"
              onChange={(e) => handleFiles(Array.from(e.target.files || []))}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 cursor-pointer transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Choose Files
            </label>
            <p className="text-xs text-gray-500 mt-2">Supports PDF documents and video files (MP4, MOV, AVI)</p>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Uploaded Files</h3>
              <div className="space-y-3">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {file.type === 'PDF' ? (
                        <FileText className="h-8 w-8 text-red-600" />
                      ) : file.type === 'Video' ? (
                        <Video className="h-8 w-8 text-purple-600" />
                      ) : (
                        <FileText className="h-8 w-8 text-gray-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-600">{file.type} • {file.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
              
              <button
                onClick={generateScenarios}
                disabled={isGenerating}
                className="w-full mt-6 bg-green-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Generating Scenarios...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Generate Scenarios</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">How it works</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                <div>
                  <h4 className="font-medium text-gray-900">Upload Materials</h4>
                  <p className="text-sm text-gray-600">Upload your course PDFs, lecture videos, or study materials.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                <div>
                  <h4 className="font-medium text-gray-900">AI Analysis</h4>
                  <p className="text-sm text-gray-600">Our AI analyzes your content to identify key nursing concepts and scenarios.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                <div>
                  <h4 className="font-medium text-gray-900">Custom Scenarios</h4>
                  <p className="text-sm text-gray-600">Practice with scenarios tailored to your specific course content.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">Tips for Better Results</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Upload clear, high-quality PDF files</li>
              <li>• Include lecture notes, textbook chapters, and care plans</li>
              <li>• Video content should have clear audio</li>
              <li>• Organize materials by topic or module</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Privacy & Security</h3>
            <p className="text-sm text-blue-700">
              Your uploaded materials are processed securely and are not shared with third parties. 
              Files are automatically deleted after scenario generation is complete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};