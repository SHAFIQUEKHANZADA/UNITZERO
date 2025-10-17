"use client"

import { CheckCircle, Zap, Database, Bot, BarChart3, Users, Phone, FileText, Mail, Workflow, Play, Pause, Settings } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function WorkflowAutomation() {
  const isBrowser = typeof window !== 'undefined'
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentFlow, setCurrentFlow] = useState(0)
  const [draggedNode, setDraggedNode] = useState<string | null>(null)
  const [canvasOffset, setCanvasOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const workflowRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  // Responsive node positions
  const getInitialPositions = () => {
    const isMobile = isBrowser && window.innerWidth < 640
    if (isMobile) {
      return {
        // Stack nodes vertically (top -> bottom) on small screens
        'trigger': { x: 100, y: 40 },
        'ai-chat': { x: 100, y: 120 },
        'ai-voice': { x: 100, y: 200 },
        'crm': { x: 100, y: 280 },
        'contract': { x: 100, y: 360 },
        'email': { x: 100, y: 440 },
        'analytics': { x: 100, y: 520 }
      }
    }
    return {
      'trigger': { x: 50, y: 200 },
      'ai-chat': { x: 250, y: 150 },
      'ai-voice': { x: 250, y: 250 },
      'crm': { x: 450, y: 200 },
      'contract': { x: 650, y: 150 },
      'email': { x: 650, y: 250 },
      'analytics': { x: 850, y: 200 }
    }
  }

  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>(getInitialPositions())

  // Workflow nodes configuration
  const workflowNodes = [
    {
      id: 'trigger',
      type: 'trigger',
      title: 'Customer Interaction',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      inputs: [],
      outputs: ['data'],
      description: 'Customer initiates contact via chat, call, or form'
    },
    {
      id: 'ai-chat',
      type: 'ai',
      title: 'AI Chatbot',
      icon: Bot,
      color: 'from-omniv-primary to-omniv-secondary',
      inputs: ['data'],
      outputs: ['qualified-lead'],
      description: 'AI analyzes intent and qualifies the lead'
    },
    {
      id: 'ai-voice',
      type: 'ai',
      title: 'AI Voice Receptionist',
      icon: Phone,
      color: 'from-omniv-primary to-omniv-secondary',
      inputs: ['data'],
      outputs: ['call-data'],
      description: 'Handles calls, schedules appointments automatically'
    },
    {
      id: 'crm',
      type: 'database',
      title: 'Mini CRM',
      icon: Database,
      color: 'from-green-500 to-green-600',
      inputs: ['qualified-lead', 'call-data'],
      outputs: ['lead-info'],
      description: 'Captures and organizes all lead information'
    },
    {
      id: 'contract',
      type: 'automation',
      title: 'Contract Generator',
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      inputs: ['lead-info'],
      outputs: ['contract'],
      description: 'Auto-generates personalized contracts'
    },
    {
      id: 'email',
      type: 'automation',
      title: 'Email Engine',
      icon: Mail,
      color: 'from-orange-500 to-orange-600',
      inputs: ['lead-info', 'contract'],
      outputs: ['notification'],
      description: 'Sends confirmations and follow-ups'
    },
    {
      id: 'analytics',
      type: 'analytics',
      title: 'Analytics Dashboard',
      icon: BarChart3,
      color: 'from-cyan-500 to-cyan-600',
      inputs: ['notification'],
      outputs: ['insights'],
      description: 'Real-time performance insights'
    }
  ]

  // Workflow connections
  const connections = [
    { from: 'trigger', to: 'ai-chat', type: 'data' },
    { from: 'trigger', to: 'ai-voice', type: 'data' },
    { from: 'ai-chat', to: 'crm', type: 'qualified-lead' },
    { from: 'ai-voice', to: 'crm', type: 'call-data' },
    { from: 'crm', to: 'contract', type: 'lead-info' },
    { from: 'crm', to: 'email', type: 'lead-info' },
    { from: 'contract', to: 'email', type: 'contract' },
    { from: 'email', to: 'analytics', type: 'notification' }
  ]

  // Animation flow sequence
  const animationFlow = [
    { node: 'trigger', delay: 0 },
    { node: 'ai-chat', delay: 1000 },
    { node: 'ai-voice', delay: 1500 },
    { node: 'crm', delay: 2500 },
    { node: 'contract', delay: 3500 },
    { node: 'email', delay: 4000 },
    { node: 'analytics', delay: 5000 }
  ]

  const startAnimation = () => {
    setIsPlaying(true)
    setCurrentFlow(0)
    setActiveNode(null)
    
    animationFlow.forEach((step, index) => {
      setTimeout(() => {
        setActiveNode(step.node)
        setCurrentFlow(index)
      }, step.delay)
    })

    setTimeout(() => {
      setIsPlaying(false)
      setActiveNode(null)
    }, 6000)
  }

  const stopAnimation = () => {
    setIsPlaying(false)
    setActiveNode(null)
    setCurrentFlow(0)
    if (animationRef.current) {
      clearTimeout(animationRef.current)
    }
  }

  // Handle window resize for responsive positioning
  useEffect(() => {
    const handleResize = () => {
      setNodePositions(getInitialPositions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getInitialPositions])

  // Get touch or mouse coordinates
  const getEventCoords = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e && e.touches.length > 0) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY }
    } else if ('changedTouches' in e && e.changedTouches.length > 0) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }
    } else {
      return { x: (e as React.MouseEvent).clientX, y: (e as React.MouseEvent).clientY }
    }
  }

  // Drag and drop handlers (mouse + touch)
  const handleNodeStart = (e: React.MouseEvent | React.TouchEvent, nodeId: string) => {
    e.preventDefault()
    e.stopPropagation()
    setDraggedNode(nodeId)
    setIsDragging(true)
    const coords = getEventCoords(e)
    setDragStart(coords)
  }

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !draggedNode) return
    
    const coords = getEventCoords(e)
    const deltaX = coords.x - dragStart.x
    const deltaY = coords.y - dragStart.y

    setNodePositions(prev => ({
      ...prev,
      [draggedNode]: {
        x: Math.max(0, Math.min((isBrowser ? window.innerWidth : 1200) - 120, prev[draggedNode].x + deltaX)),
        y: Math.max(0, Math.min((isBrowser ? window.innerHeight : 800) - 60, prev[draggedNode].y + deltaY))
      }
    }))

    setDragStart(coords)
  }

  const handleEnd = () => {
    setIsDragging(false)
    setDraggedNode(null)
  }

  // Canvas pan handlers (mouse + touch)
  const handleCanvasStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      const coords = getEventCoords(e)
      setDragStart(coords)
      setIsDragging(true)
    }
  }

  const handleCanvasMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || draggedNode) return

    const coords = getEventCoords(e)
    const deltaX = coords.x - dragStart.x
    const deltaY = coords.y - dragStart.y

    setCanvasOffset(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }))

    setDragStart(coords)
  }

  const getConnectionPath = (from: string, to: string) => {
    const fromPos = nodePositions[from]
    const toPos = nodePositions[to]
    if (!fromPos || !toPos) return ''

    // Responsive node dimensions
    const isMobile = isBrowser && window.innerWidth < 640
    const nodeWidth = isMobile ? 100 : 120
    const nodeHeight = isMobile ? 50 : 60

    // For mobile (vertical flow): draw from bottom of source to top of target
    if (isMobile) {
      const fromX = fromPos.x + (nodeWidth / 2) + canvasOffset.x
      const fromY = fromPos.y + nodeHeight + canvasOffset.y
      const toX = toPos.x + (nodeWidth / 2) + canvasOffset.x
      const toY = toPos.y + canvasOffset.y
      const midY = (fromY + toY) / 2
      return `M ${fromX} ${fromY} Q ${fromX} ${midY} ${toX} ${toY}`
    }

    // Desktop/tablet (horizontal flow): center of source to left edge of target
    const fromX = fromPos.x + (nodeWidth / 2) + canvasOffset.x
    const fromY = fromPos.y + (nodeHeight / 2) + canvasOffset.y
    const toX = toPos.x + canvasOffset.x
    const toY = toPos.y + (nodeHeight / 2) + canvasOffset.y

    const midX = (fromX + toX) / 2
    return `M ${fromX} ${fromY} Q ${midX} ${fromY} ${toX} ${toY}`
  }

  const getNodeStatus = (nodeId: string) => {
    if (activeNode === nodeId) return 'active'
    if (currentFlow > animationFlow.findIndex(f => f.node === nodeId)) return 'completed'
    return 'inactive'
  }

  return (
    <section className="relative min-h-screen bg-omniv-dark text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,170,0.05),transparent_50%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {[...Array(400)].map((_, i) => (
              <div key={i} className="border border-omniv-primary/20"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-20 pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-omniv-card/50 backdrop-blur-sm border border-omniv-primary/30 mb-8">
            <Workflow className="w-5 h-5 text-omniv-primary" />
            <span className="text-omniv-primary font-medium">AI Automation Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-omniv-primary to-omniv-secondary bg-clip-text text-transparent mb-6">
            How Our AI Works
          </h2>
          <p className="text-xl text-omniv-muted max-w-3xl mx-auto leading-relaxed mb-8">
            Watch how customer interactions flow through our intelligent automation system
          </p>
          
          {/* Animation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={isPlaying ? stopAnimation : startAnimation}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-omniv-primary to-omniv-secondary hover:from-omniv-primary/90 hover:to-omniv-secondary/90 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Stop' : 'Play'} Animation
            </button>
            <button
              onClick={() => {
                setCanvasOffset({ x: 0, y: 0 })
                setNodePositions(getInitialPositions())
              }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-omniv-muted/20 hover:bg-omniv-muted/30 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 border border-omniv text-xs sm:text-sm"
            >
              <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Reset Layout</span>
              <span className="sm:hidden">Reset</span>
            </button>
            <div className="text-sm text-omniv-muted">
              Step {currentFlow + 1} of {animationFlow.length}
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-xs sm:text-sm text-omniv-muted px-4">
              💡 <strong>Tip:</strong> 
              <span className="hidden sm:inline"> Drag nodes to rearrange the workflow • Click and drag empty space to pan the canvas</span>
              <span className="sm:hidden"> Touch and drag nodes to rearrange • Touch and drag empty space to pan</span>
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Canvas */}
      <div ref={workflowRef} className="relative z-10 container mx-auto px-4 sm:px-6 pb-20">
        <div 
          ref={canvasRef}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-omniv-card/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-omniv-primary/20 overflow-hidden cursor-grab active:cursor-grabbing touch-none"
          onMouseDown={handleCanvasStart}
          onMouseMove={draggedNode ? handleMove : handleCanvasMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleCanvasStart}
          onTouchMove={draggedNode ? handleMove : handleCanvasMove}
          onTouchEnd={handleEnd}
          style={{
            transform: `translate(${canvasOffset.x}px, ${canvasOffset.y}px)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            touchAction: 'none'
          }}
        >
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {connections.map((connection, index) => {
              const path = getConnectionPath(connection.from, connection.to)
              const isActive = animationFlow.slice(0, currentFlow + 1).some(flow => 
                flow.node === connection.from || flow.node === connection.to
              )
              
              return (
                <path
                  key={index}
                  d={path}
                  stroke={isActive ? '#ff6b35' : '#374151'}
                  strokeWidth="2"
                  fill="none"
                  className="transition-all duration-1000"
                  strokeDasharray={isActive ? "5,5" : "0"}
                  style={{
                    animation: isActive ? 'dash 1s linear infinite' : 'none'
                  }}
                />
              )
            })}
            
            {/* Data flow particles */}
            {connections.map((connection, index) => {
              const isActive = animationFlow.slice(0, currentFlow + 1).some(flow => 
                flow.node === connection.from
              )
              
              if (!isActive) return null
              
              return (
                <circle
                  key={`particle-${index}`}
                  r="4"
                  fill="#ff6b35"
                  className="animate-pulse"
                  style={{
                    animation: 'flow 2s linear infinite',
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={getConnectionPath(connection.from, connection.to)}
                  />
                </circle>
              )
            })}
          </svg>

          {/* Workflow Nodes */}
          <div className="relative w-full h-full" style={{ zIndex: 2 }}>
            {workflowNodes.map((node) => {
              const status = getNodeStatus(node.id)
              const IconComponent = node.icon
              const position = nodePositions[node.id]
              
              return (
                <div
                  key={node.id}
                  className={`absolute transition-all duration-500 cursor-move group select-none ${
                    status === 'active' ? 'scale-110 z-10' : 
                    status === 'completed' ? 'scale-105' : 'scale-100'
                  } ${draggedNode === node.id ? 'z-20' : ''}`}
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: status === 'active' ? 'scale(1.1)' : 'scale(1)',
                    transition: draggedNode === node.id ? 'none' : 'all 0.3s ease',
                    touchAction: 'none'
                  }}
                  onMouseDown={(e) => handleNodeStart(e, node.id)}
                  onTouchStart={(e) => handleNodeStart(e, node.id)}
                  onClick={() => {
                    if (!isDragging) {
                      setActiveNode(node.id)
                      setCurrentFlow(animationFlow.findIndex(f => f.node === node.id))
                    }
                  }}
                >
                  {/* Node Container */}
                  <div className={`relative w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] rounded-lg sm:rounded-xl border-2 transition-all duration-500 ${
                    status === 'active' 
                      ? `bg-gradient-to-r ${node.color} border-white shadow-2xl shadow-omniv-primary/50` 
                      : status === 'completed'
                      ? `bg-gradient-to-r ${node.color} border-omniv-secondary shadow-lg`
                      : 'bg-omniv-card border-omniv hover:border-omniv-primary/50'
                  }`}>
                    
                    {/* Node Content */}
                    <div className="flex items-center justify-center h-full px-2 sm:px-3">
                      <IconComponent className={`w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-500 ${
                        status === 'active' ? 'text-white' : 
                        status === 'completed' ? 'text-white' : 'text-omniv-muted'
                      }`} />
                      <span className={`ml-1 sm:ml-2 text-[10px] sm:text-xs font-medium transition-colors duration-500 ${
                        status === 'active' ? 'text-white' : 
                        status === 'completed' ? 'text-white' : 'text-omniv-muted'
                      }`}>
                        {node.title.split(' ')[0]}
                      </span>
                    </div>

                    {/* Active indicator */}
                    {status === 'active' && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-omniv-primary rounded-full animate-ping"></div>
                    )}

                    {/* Completed indicator */}
                    {status === 'completed' && (
                      <CheckCircle className="absolute -top-2 -right-2 w-4 h-4 text-omniv-secondary" />
                    )}

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-omniv-dark border border-omniv-primary/30 rounded-lg p-3 text-sm whitespace-nowrap">
                        <div className="font-medium text-white">{node.title}</div>
                        <div className="text-omniv-muted text-xs mt-1">{node.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Data flow indicators */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none">
              {connections.map((connection, index) => {
                const isActive = animationFlow.slice(0, currentFlow + 1).some(flow => 
                  flow.node === connection.from
                )
                
                if (!isActive) return null
                
                const fromPos = nodePositions[connection.from]
                
                const isMobile = isBrowser && window.innerWidth < 640
                const nodeWidth = isMobile ? 100 : 120
                const nodeHeight = isMobile ? 50 : 60
                
                return (
                  <div
                    key={`flow-${index}`}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-omniv-primary rounded-full animate-pulse"
                    style={{
                      left: `${(fromPos?.x || 0) + (nodeWidth / 2) + canvasOffset.x}px`,
                      top: `${(fromPos?.y || 0) + (nodeHeight / 2) + canvasOffset.y}px`,
                      animation: `flow-${index} 2s linear infinite`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  />
                )
              })}
            </div>
          )}
        </div>

        {/* Workflow Legend */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-omniv-muted">Trigger</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-gradient-to-r from-omniv-primary to-omniv-secondary rounded"></div>
            <span className="text-omniv-muted">AI Processing</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-omniv-muted">Data Storage</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span className="text-omniv-muted">Automation</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-omniv-primary/10 to-omniv-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-omniv-primary/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h3>
            <p className="text-xl text-omniv-muted mb-8">
              See this workflow in action with our free pilot program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] hover:from-omniv-primary/90 hover:to-omniv-secondary/90 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-omniv-primary/25">
                <Zap className="w-5 h-5" />
                Start Free Pilot
              </button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-omniv-muted/10 hover:bg-omniv-muted/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 border border-omniv">
                <Settings className="w-5 h-5" />
                Customize Workflow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
        
        @keyframes flow {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
