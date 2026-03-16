'use client'

import { useState, useRef, useEffect } from 'react'

export default function PortfolioTerminal() {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    { command: '/welcome', output: `
<glow>████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     ██╗  ██╗   ██╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     ██║  ╚██╗ ██╔╝
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     ██║   ╚████╔╝ 
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     ██║    ╚██╔╝  
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗███████╗██║   
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝</glow>   

[SYSTEM INITIALIZED] - Terminal Portfolio v1.0

Welcome to Terminally! Type help to see available commands.` },
  ])
  const [currentCommand, setCurrentCommand] = useState('')
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = {
    'help': () => `
[AVAILABLE_COMMANDS]

about       Display personal information
awards      View honors & awards
skills      Show technical skills
experience  Display work history
education   View educational background
contact     Show contact information
clear       Clear terminal screen
help        Display this help message
    `,
    'about': () => `
Name: Nandhu Pillai (He/Him)
Role: CS + Math @ University of Maryland | Tech Lead @ ADC
Location: Washington DC-Baltimore Area
Status: Open to ML Engineer, Software Engineer, Data Engineer & Data Scientist roles

Bio: Building cool tech with AI/ML, hmu if you wanna build something.
Currently an Undergraduate Researcher at UMIACS and ML Bootcamp Director
at App Dev Club. Honors College: University Honors, Dean's List.
    `,
    'awards': () => `
[HONORS & AWARDS]

🏆 2024 National Economics Challenge — International Champion (1st Place)
   • Adam Smith Division (AP/IB level)
   • Issued by Council for Economic Education, Jun 2024
   • Won 1st place against China's championship team, Shanghai Starriver Bilingual School
   • Coached the David Ricardo International Round 1st place winners as Captain

🏆 2024 National Economics Challenge — National Champion (1st Place)
   • Adam Smith Division, 8,000+ students across the United States
   • Issued by Council for Economic Education, Jun 2024
   • Coverage: https://www.youtube.com/watch?v=zg6f5MaT0ao&t=6819s

🏅 Judges' Award — FIRST Robotics Competition
   • Issued Mar 2024, Severn MD Event
   • Recognized for unique efforts, performance, and team dynamics

🥈 Outstanding Delegate (2nd Place) — WAMUNC XXVI
   • Washington Area Model UN Conference (International), Mar 2024
   • 700+ competitors worldwide, NSA Cold War Papers crisis committee

🥇 Best Delegate (1st Place) — WAMUNC XXV
   • Washington Area Model UN Conference (International), Apr 2023
   • 700+ competitors worldwide, UN Security Council crisis committee

🤖 FIRST Robotics Alexandria District Finalist (2nd Place)
   • FIRST Robotics Chesapeake District, Mar 2023
    `,
    'skills': () => `
[TECHNICAL SKILLS MATRIX]

ML / AI Frameworks:
  Python                <glow>████████████████████</glow> Expert
  TensorFlow            <glow>██████████████████</glow>   Advanced
  PyTorch               <glow>██████████████████</glow>   Advanced
  NumPy / Pandas        <glow>████████████████████</glow> Expert

Machine Learning:
  Supervised Learning   <glow>████████████████████</glow> Expert
  Unsupervised Learning <glow>██████████████████</glow>   Advanced
  Reinforcement Learning<glow>██████████████████</glow>   Advanced
  Recommender Systems   <glow>████████████████</glow>     Proficient

Domain Skills:
  Computer Vision       <glow>██████████████████</glow>   Advanced
  NLP                   <glow>████████████████</glow>     Proficient
  Signal Processing     <glow>██████████████</glow>       Intermediate
  Semantic Segmentation <glow>██████████████████</glow>   Advanced

Other:
  Public Speaking       <glow>████████████████████</glow> Expert
  Technical Leadership  <glow>████████████████████</glow> Expert
  Teaching              <glow>██████████████████</glow>   Advanced
  Engineering Data Mgmt <glow>████████████████</glow>     Proficient
    `,
    'experience': () => `
[WORK EXPERIENCE]

Jan 2026 - Present | Undergraduate Researcher
UMIACS, University of Maryland
• Developing and testing RL policies, navigation, EQA tasks for quadruped robots
• Physical AI research

Jan 2026 - Present | ML Bootcamp Director
App Dev Club, University of Maryland
• Created and currently teach a semester-long rigorous ML Bootcamp
• Cohort of 30 students learning supervised, unsupervised, recommender systems, and RL
• Students start with no prerequisites and become competent ML engineers

Sep 2025 - Dec 2025 | ML Technical Lead
Amazon (Contract via App Dev Club)
• ADC x Amazon Leo — Semantic segmentation for airport exclusion zones 🛰️
• Leading team of 7 ML engineers developing DeepLabv3, U-Net models
• Built production data pipeline for airport boundary regulatory compliance

Sep 2025 - Dec 2025 | Technical Lead
App Dev Club, University of Maryland

Feb 2025 - Sep 2025 | Machine Learning Engineer
App Dev Club, University of Maryland

Feb 2025 - May 2025 | Machine Learning Engineer
Children's National Hospital (Contract)
• Created Graph Convolutional Neural Network using Brain Functional Connectivity
• For Autism Spectrum Disorder assessment, in collaboration with App Dev Club

Jul 2024 - Aug 2024 | MIT Beaver Works Teaching Assistant
Massachusetts Institute of Technology
• Developed Jupyter Notebooks for signal processing, CV, and NLP exercises
• Guided students through Fourier Analysis, CNNs, RNNs, and Transformers
    `,
    'education': () => `
[EDUCATION & CERTIFICATIONS]

Bachelor of Science — Computer Science and Mathematics
University of Maryland
• Honors College: University Honors, Dean's List
• Activities: App Dev Club, Resident Assistant (RA)

Certifications:
• Machine Learning Specialization — Stanford Online (Jan 2025)
  Credential ID: 1NCTK3W9A93H
• BWSI Summer 2023 Program Certificate — MIT Beaver Works (Jan 2023)
    `,
    'contact': () => `
[CONTACT INFORMATION]

📧 Email: nandhu@terpmail.umd.edu
🐙 GitHub: https://github.com/NandhuPillai
💼 LinkedIn: https://www.linkedin.com/in/nandhupillai/
📱 Phone: 443-632-6851
📍 Location: Washington DC-Baltimore Area

Feel free to reach out for opportunities, collaborations, or just to chat about tech!

Best Contact Method: Email or LinkedIn
    `,
    'clear': () => {
      setHistory([])
      return ''
    },
  }

  const handleCommand = () => {
    const cmd = currentCommand.trim().toLowerCase()
    const commandFn = commands[cmd as keyof typeof commands]
    const output = commandFn ? commandFn() : \`Command not found: \${cmd}
Type help to see available commands.\`

    if (cmd !== 'clear') {
      setHistory(prev => [...prev, { command: currentCommand, output }])
    }
    
    setCurrentCommand('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.min(prev + 1, history.length - 1)
        if (history.length > 0) {
          setCurrentCommand(history[history.length - 1 - newIndex]?.command || '')
        }
        return newIndex
      })
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHistoryIndex(prev => {
        const newIndex = Math.max(prev - 1, -1)
        setCurrentCommand(newIndex === -1 ? '' : history[history.length - 1 - newIndex]?.command || '')
        return newIndex
      })
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    // Focus input when component mounts or when terminal is clicked
    const handleClick = () => {
      inputRef.current?.focus()
    }
    
    if (terminalRef.current) {
      terminalRef.current.addEventListener('click', handleClick)
    }
    
    return () => {
      if (terminalRef.current) {
        terminalRef.current.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const renderOutput = (output: string) => {
    const glowRegex = /(<glow>[\\s\\S]*?<\\/glow>)/g
    const urlRegex = /(https?:\\/\\/[^\\s]+)/g
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})/g
    
    const parts = output.split(glowRegex)
    
    return parts.map((part, index) => {
      if (part.startsWith('<glow>') && part.endsWith('</glow>')) {
        const content = part.slice(6, -7)
        return (
          <span key={index} className="text-green-400" style={{ textShadow: '0 0 10px #4ade80, 0 0 20px #4ade80' }}>
            {content}
          </span>
        )
      }
      
      let subParts = part.split(urlRegex)
      subParts = subParts.flatMap(subPart => 
        subPart.match(/^https?:\\/\\/[^\\s]+$/) ? [subPart] : subPart.split(emailRegex)
      )
      
      return (
        <span key={index}>
          {subParts.map((subPart, subIndex) => {
            const key = \`\${index}-\${subIndex}\`
            if (subPart.match(/^https?:\\/\\/[^\\s]+$/)) {
              return (
                <a key={key} href={subPart} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
                  {subPart}
                </a>
              )
            } else if (subPart.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/)) {
              return (
                <a key={key} href={\`mailto:\${subPart}\`} className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
                  {subPart}
                </a>
              )
            }
            return <span key={key}>{subPart}</span>
          })}
        </span>
      )
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-green-400 p-4" style={{ fontFamily: "'Consolas', 'Courier New', 'Liberation Mono', 'Menlo', monospace" }}>
      <div className="w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl border border-green-400">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-3 bg-gray-800 text-xs text-gray-400">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
          </div>
          <div className="flex-1 text-center font-semibold">nandhu@portfolio-terminal:~$ | Interactive Portfolio v1.0</div>
          <div className="text-xs">
            <span className="text-green-400">●</span> ONLINE
          </div>
        </div>

        {/* Terminal Output */}
        <div 
          ref={terminalRef} 
          className="h-[75vh] overflow-y-auto p-4 space-y-3 bg-black cursor-text"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#10b981 #1f2937'
          }}
        >
          {history.map((entry, i) => (
            <div key={i} className="space-y-2">
              <div className="flex gap-2">
                <span className="text-cyan-400 font-semibold">nandhu@portfolio:~$</span>
                <span className="text-white">{entry.command}</span>
              </div>
              <div className="whitespace-pre text-gray-300 pl-6 leading-tight">
                {renderOutput(entry.output)}
              </div>
            </div>
          ))}

          {/* Current Command Input */}
          <div className="flex gap-2 items-center">
            <span className="text-cyan-400 font-semibold">nandhu@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={e => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white caret-green-400"
              autoFocus
              spellCheck="false"
            />
            <span className="text-green-400 animate-pulse">█</span>
          </div>

          {/* Auto-scroll anchor */}
          <div ref={bottomRef} />
        </div>
        
        {/* Terminal Footer */}
        <div className="bg-gray-800 px-4 py-2 text-xs text-gray-500 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <span>Type help for available commands • Use ↑/↓ arrows for command history</span>
            <span>Press Ctrl+C to interrupt • clear to reset terminal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
