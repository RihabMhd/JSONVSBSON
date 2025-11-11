import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Zap, Code, FileText, CheckCircle, XCircle, ArrowRight, Eye, Feather, Globe, Rocket, Settings, Smartphone, Search, Calendar, Key, HardDrive, DollarSign, Clock, Store, MessageSquare, BarChart3, Leaf } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "JSON vs BSON",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-6xl font-bold text-center bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            JSON vs BSON
          </div>
          <div className="text-2xl text-gray-600 text-center">
            Comparaison complète des formats de données
          </div>
          <div className="flex gap-16 mt-12">
            <div className="flex flex-col items-center">
              <FileText className="w-24 h-24 text-blue-600 mb-4" />
              <span className="text-xl font-semibold text-blue-600">JSON</span>
              <span className="text-sm text-gray-500">Format Texte</span>
            </div>
            <div className="text-4xl text-gray-400 self-center">VS</div>
            <div className="flex flex-col items-center">
              <Database className="w-24 h-24 text-red-600 mb-4" />
              <span className="text-xl font-semibold text-red-600">BSON</span>
              <span className="text-sm text-gray-500">Format Binaire</span>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 2: JSON Introduction
    {
      title: "Qu'est-ce que JSON ?",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="flex flex-col justify-center items-center space-y-8">
            <div className="text-center">
              <FileText className="w-32 h-32 text-blue-600 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-blue-600 mb-4">JSON</h3>
              <p className="text-2xl text-gray-700">JavaScript Object Notation</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-blue-50 p-6 rounded-xl text-center border-2 border-blue-200">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-blue-700">Lisible</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center border-2 border-blue-200">
                <Feather className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-blue-700">Léger</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center border-2 border-blue-200">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-blue-700">Universel</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center border-2 border-blue-200">
                <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-blue-700">APIs REST</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-sm text-gray-400 mb-2">Exemple JSON</div>
            <pre className="text-green-400 text-sm overflow-auto">
{`{
  "nom": "Alice Dubois",
  "age": 28,
  "actif": true,
  "email": null,
  "score": 95.5,
  "adresse": {
    "rue": "123 Rue de la Paix",
    "ville": "Paris"
  },
  "hobbies": [
    "lecture",
    "voyages",
    "photographie"
  ]
}`}
            </pre>
            <div className="mt-4 text-yellow-400 text-sm flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              100% lisible et compréhensible !
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 3: JSON Types
    {
      title: "Types de données JSON",
      content: (
        <div className="flex flex-col h-full">
          <div className="text-center mb-8">
            <span className="text-4xl font-bold text-blue-600">6 Types Seulement</span>
          </div>
          
          <div className="grid grid-cols-3 gap-6 flex-grow">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-2 text-blue-700 text-center">String</h3>
              <code className="text-sm bg-white p-2 rounded block text-center">"Alice"</code>
              <code className="text-sm bg-white p-2 rounded block mt-1 text-center">"Paris"</code>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-2 text-blue-700 text-center">Number</h3>
              <code className="text-sm bg-white p-2 rounded block text-center">28</code>
              <code className="text-sm bg-white p-2 rounded block mt-1 text-center">95.5</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Entiers + Décimaux</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-2 text-blue-700 text-center">Boolean</h3>
              <code className="text-sm bg-white p-2 rounded block text-center">true</code>
              <code className="text-sm bg-white p-2 rounded block mt-1 text-center">false</code>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <XCircle className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-2 text-blue-700 text-center">Null</h3>
              <code className="text-sm bg-white p-2 rounded block text-center">null</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Absence de valeur</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <Database className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-2 text-blue-700 text-center">Object</h3>
              <code className="text-sm bg-white p-2 rounded block text-xs text-center">{"{ key: value }"}</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Paires clé-valeur</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-xl mb-2 text-blue-700 text-center">Array</h3>
              <code className="text-sm bg-white p-2 rounded block text-center">["a", "b", "c"]</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Liste ordonnée</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 4: BSON Introduction
    {
      title: "Qu'est-ce que BSON ?",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="flex flex-col justify-center items-center space-y-8">
            <div className="text-center">
              <Database className="w-32 h-32 text-red-600 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-red-600 mb-4">BSON</h3>
              <p className="text-2xl text-gray-700">Binary JSON</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-red-50 p-6 rounded-xl text-center border-2 border-red-200">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <p className="font-bold text-red-700">Rapide</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl text-center border-2 border-red-200">
                <BarChart3 className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <p className="font-bold text-red-700">15+ Types</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl text-center border-2 border-red-200">
                <Leaf className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <p className="font-bold text-red-700">MongoDB</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl text-center border-2 border-red-200">
                <HardDrive className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <p className="font-bold text-red-700">Binaire</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-gray-800 flex items-center justify-center">
                <XCircle className="w-5 h-5 mr-2" />
                Non lisible par l'homme
              </p>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="text-sm text-gray-400 mb-2">Structure BSON (visualisation)</div>
            <div className="space-y-2 text-xs font-mono">
              <div className="bg-red-900 text-white p-2 rounded flex items-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                Length: 156 bytes
              </div>
              <div className="bg-gray-800 text-green-400 p-2 rounded">
                <span className="text-red-400">0x02</span> name → "Alice" (string)
              </div>
              <div className="bg-gray-800 text-green-400 p-2 rounded">
                <span className="text-red-400">0x10</span> age → 28 (int32)
              </div>
              <div className="bg-gray-800 text-green-400 p-2 rounded">
                <span className="text-red-400">0x08</span> actif → true (bool)
              </div>
              <div className="bg-gray-800 text-green-400 p-2 rounded">
                <span className="text-red-400">0x0A</span> email → null
              </div>
              <div className="bg-gray-800 text-green-400 p-2 rounded">
                <span className="text-red-400">0x01</span> score → 95.5 (double)
              </div>
              <div className="bg-gray-800 text-green-400 p-2 rounded">
                <span className="text-red-400">0x09</span> dateNaissance → ISODate()
              </div>
              <div className="bg-gray-800 text-green-400 p-2 rounded">
                <span className="text-red-400">0x07</span> _id → ObjectId(...)
              </div>
              <div className="bg-red-900 text-white p-2 rounded flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                End marker: 0x00
              </div>
            </div>
            <div className="mt-4 text-yellow-400 text-sm flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Optimisé pour la vitesse machine !
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 5: BSON Types
    {
      title: "Types de données BSON",
      content: (
        <div className="flex flex-col h-full">
          <div className="text-center mb-6">
            <span className="text-4xl font-bold text-red-600">15+ Types de Données</span>
            <p className="text-gray-600 mt-2">Tous les types JSON + types spéciaux</p>
          </div>
          
          <div className="grid grid-cols-4 gap-4 flex-grow">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-green-700 mb-1 text-center">Types JSON</h4>
              <div className="text-xs space-y-1 text-center">
                <div>String</div>
                <div>Number</div>
                <div>Boolean</div>
                <div>Null</div>
                <div>Object</div>
                <div>Array</div>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Date</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">ISODate("2024-01-15")</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Date/Time UTC</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <Key className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">ObjectId</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">507f1f77bcf...</code>
              <p className="text-xs text-gray-600 mt-2 text-center">ID unique MongoDB</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <HardDrive className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Binary</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">BinData(...)</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Images, fichiers</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <BarChart3 className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Int32</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">28</code>
              <p className="text-xs text-gray-600 mt-2 text-center">32-bit integer</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <BarChart3 className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Int64</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">9223372036...</code>
              <p className="text-xs text-gray-600 mt-2 text-center">64-bit integer</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <DollarSign className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Decimal128</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">1234.56</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Haute précision</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Timestamp</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">Timestamp(...)</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Pour réplication</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <Search className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Regex</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">/^[A-Z]/</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Expressions</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <Code className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-bold text-sm text-red-700 text-center">Code</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">Code("...")</code>
              <p className="text-xs text-gray-600 mt-2 text-center">JavaScript</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <ArrowRight className="w-8 h-8 text-red-600 mx-auto mb-2 transform rotate-90" />
              <h4 className="font-bold text-sm text-red-700 text-center">MinKey</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">MinKey()</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Valeur min</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
              <ArrowRight className="w-8 h-8 text-red-600 mx-auto mb-2 transform -rotate-90" />
              <h4 className="font-bold text-sm text-red-700 text-center">MaxKey</h4>
              <code className="text-xs bg-white p-1 rounded block mt-1">MaxKey()</code>
              <p className="text-xs text-gray-600 mt-2 text-center">Valeur max</p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 6: Comparison Table
    {
      title: "Comparaison Technique",
      content: (
        <div className="flex flex-col h-full">
          <div className="overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
                  <th className="p-4 text-left text-lg">Caractéristique</th>
                  <th className="p-4 text-center text-lg">
                    <div className="flex items-center justify-center">
                      <FileText className="w-6 h-6 mr-2" />
                      JSON
                    </div>
                  </th>
                  <th className="p-4 text-center text-lg">
                    <div className="flex items-center justify-center">
                      <Database className="w-6 h-6 mr-2" />
                      BSON
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-base">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold">Format</td>
                  <td className="p-4 text-center bg-blue-50">Texte (lisible)</td>
                  <td className="p-4 text-center bg-red-50">Binaire (machine)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold">Taille</td>
                  <td className="p-4 text-center bg-blue-50">
                    <span className="text-green-600 font-bold">Plus léger</span>
                  </td>
                  <td className="p-4 text-center bg-red-50">
                    Légèrement plus lourd
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold">Types de données</td>
                  <td className="p-4 text-center bg-blue-50">6 types</td>
                  <td className="p-4 text-center bg-red-50">
                    <span className="text-green-600 font-bold">15+ types</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold">Vitesse lecture/écriture</td>
                  <td className="p-4 text-center bg-blue-50">Plus lent</td>
                  <td className="p-4 text-center bg-red-50">
                    <span className="text-green-600 font-bold">Plus rapide</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold">Lisibilité humaine</td>
                  <td className="p-4 text-center bg-blue-50">
                    <span className="text-green-600 font-bold flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-1" />
                      Excellente
                    </span>
                  </td>
                  <td className="p-4 text-center bg-red-50">
                    <span className="text-red-600 flex items-center justify-center">
                      <XCircle className="w-5 h-5 mr-1" />
                      Non lisible
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold">Support Date/Binary</td>
                  <td className="p-4 text-center bg-blue-50">
                    <span className="text-red-600 flex items-center justify-center">
                      <XCircle className="w-5 h-5 mr-1" />
                      Non
                    </span>
                  </td>
                  <td className="p-4 text-center bg-red-50">
                    <span className="text-green-600 font-bold flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-1" />
                      Oui
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold">Cas d'usage principal</td>
                  <td className="p-4 text-center bg-blue-50">APIs, Web</td>
                  <td className="p-4 text-center bg-red-50">Bases de données</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold">Compatibilité</td>
                  <td className="p-4 text-center bg-blue-50">
                    <span className="text-green-600 font-bold flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-1" />
                      Universelle
                    </span>
                  </td>
                  <td className="p-4 text-center bg-red-50">MongoDB principalement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    
    // Slide 7: Performance Graph
    {
      title: "Performance : JSON vs BSON",
      content: (
        <div className="flex flex-col h-full justify-center space-y-12">
          {/* Bar Chart - Reading Speed */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-600" />
              Vitesse de Lecture & Écriture
            </h3>
            <div className="grid grid-cols-2 gap-12">
              {/* Reading */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-700">Lecture</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-600 font-semibold flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        JSON
                      </span>
                      <span className="text-gray-600 font-bold">100ms</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-8"></div>
                      <div className="absolute top-0 bg-blue-600 h-8 rounded-full flex items-center justify-end pr-2" style={{width: '60%'}}>
                        <span className="text-white text-xs font-bold">60%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-red-600 font-semibold flex items-center">
                        <Database className="w-4 h-4 mr-2" />
                        BSON
                      </span>
                      <span className="text-gray-600 font-bold">35ms</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-8"></div>
                      <div className="absolute top-0 bg-red-600 h-8 rounded-full flex items-center justify-end pr-2" style={{width: '100%'}}>
                        <span className="text-white text-xs font-bold">3x plus rapide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Writing */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-700">Écriture</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-600 font-semibold flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        JSON
                      </span>
                      <span className="text-gray-600 font-bold">85ms</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-8"></div>
                      <div className="absolute top-0 bg-blue-600 h-8 rounded-full flex items-center justify-end pr-2" style={{width: '55%'}}>
                        <span className="text-white text-xs font-bold">55%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-red-600 font-semibold flex items-center">
                        <Database className="w-4 h-4 mr-2" />
                        BSON
                      </span>
                      <span className="text-gray-600 font-bold">30ms</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded-full h-8"></div>
                      <div className="absolute top-0 bg-red-600 h-8 rounded-full flex items-center justify-end pr-2" style={{width: '100%'}}>
                        <span className="text-white text-xs font-bold">2.8x plus rapide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File Size Comparison */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center">
                <HardDrive className="w-5 h-5 mr-2 text-gray-600" />
                Taille des Fichiers
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-600 font-semibold flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      JSON
                    </span>
                    <span className="text-gray-600 font-bold">1.2 KB</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-6"></div>
                    <div className="absolute top-0 bg-blue-600 h-6 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-red-600 font-semibold flex items-center">
                      <Database className="w-4 h-4 mr-2" />
                      BSON
                    </span>
                    <span className="text-gray-600 font-bold">1.4 KB</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-6"></div>
                    <div className="absolute top-0 bg-red-600 h-6 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4 flex items-center justify-center">
                <Feather className="w-4 h-4 mr-2" />
                JSON légèrement plus léger
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg border-2 border-yellow-400">
              <h3 className="text-xl font-bold mb-4 text-center text-orange-800">Verdict</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>JSON :</strong> Meilleur pour transmission réseau</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>BSON :</strong> Meilleur pour stockage et traitement</span>
                </div>
                <div className="mt-4 p-3 bg-white rounded text-center">
                  <strong className="text-orange-700">Le choix dépend du cas d'usage !</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 8: Use Cases JSON
    {
      title: "Cas d'usage : JSON",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-96 h-96 relative">
                {/* Central JSON icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-8 shadow-xl z-10">
                  <FileText className="w-20 h-20 text-white" />
                </div>
                
                {/* API REST */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-blue-100 p-4 rounded-lg shadow-md border-2 border-blue-300">
                  <Code className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">APIs REST</p>
                </div>
                
                {/* Configuration */}
                <div className="absolute top-1/2 right-0 transform translate-x-12 -translate-y-1/2 bg-blue-100 p-4 rounded-lg shadow-md border-2 border-blue-300">
                  <Settings className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">Config</p>
                </div>
                
                {/* Web Apps */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-blue-100 p-4 rounded-lg shadow-md border-2 border-blue-300">
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">Web Apps</p>
                </div>
                
                {/* Mobile */}
                <div className="absolute top-1/2 left-0 transform -translate-x-12 -translate-y-1/2 bg-blue-100 p-4 rounded-lg shadow-md border-2 border-blue-300">
                  <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">Mobile</p>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                  <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5"/>
                  <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5"/>
                  <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5"/>
                  <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Exemples Concrets</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-bold text-blue-700">package.json</p>
                    <code className="text-xs text-gray-600">Configuration Node.js</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <ArrowRight className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-bold text-blue-700">GET /api/users</p>
                    <code className="text-xs text-gray-600">Réponse API REST</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <Store className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-bold text-blue-700">E-commerce</p>
                    <code className="text-xs text-gray-600">Produits, panier</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-bold text-blue-700">Chat</p>
                    <code className="text-xs text-gray-600">Messages temps réel</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 9: Use Cases BSON
    {
      title: "Cas d'usage : BSON",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-96 h-96 relative">
                {/* Central BSON icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full p-8 shadow-xl z-10">
                  <Database className="w-20 h-20 text-white" />
                </div>
                
                {/* MongoDB */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-red-100 p-4 rounded-lg shadow-md border-2 border-red-300">
                  <Leaf className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">MongoDB</p>
                </div>
                
                {/* Performance */}
                <div className="absolute top-1/2 right-0 transform translate-x-12 -translate-y-1/2 bg-red-100 p-4 rounded-lg shadow-md border-2 border-red-300">
                  <Zap className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">Vitesse</p>
                </div>
                
                {/* Complex Data */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 bg-red-100 p-4 rounded-lg shadow-md border-2 border-red-300">
                  <BarChart3 className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">Big Data</p>
                </div>
                
                {/* Queries */}
                <div className="absolute top-1/2 left-0 transform -translate-x-12 -translate-y-1/2 bg-red-100 p-4 rounded-lg shadow-md border-2 border-red-300">
                  <Search className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  <p className="font-bold text-sm text-center whitespace-nowrap">Requêtes</p>
                </div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                  <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5"/>
                  <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5"/>
                  <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5"/>
                  <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300">
              <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">Types Spéciaux</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <Calendar className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-bold text-red-700">ISODate()</p>
                    <code className="text-xs text-gray-600">Dates avec timezone</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <Key className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-bold text-red-700">ObjectId()</p>
                    <code className="text-xs text-gray-600">ID unique automatique</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <HardDrive className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-bold text-red-700">BinData()</p>
                    <code className="text-xs text-gray-600">Images, fichiers PDF</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <DollarSign className="w-6 h-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-bold text-red-700">Decimal128</p>
                    <code className="text-xs text-gray-600">Finance, précision</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 10: Advantages
    {
      title: "Avantages et Limites",
      content: (
        <div className="grid grid-cols-2 gap-8 h-full">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">JSON</h3>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-lg mb-3 text-green-800 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Avantages
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Lisible et facile à comprendre
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Léger pour transmission réseau
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Compatible avec tous langages
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Standard universel pour APIs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Facile à débugger
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Pas de dépendances
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-lg mb-3 text-red-800 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                Limites
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Seulement 6 types de données
                </li>
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Pas de support Date natif
                </li>
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Pas de Binary
                </li>
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Plus lent à parser
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-2">BSON</h3>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-lg mb-3 text-green-800 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Avantages
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  15+ types de données
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Lecture/écriture ultra-rapide
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Optimisé pour MongoDB
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  Support Date, Binary, ObjectId
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h4 className="font-bold text-lg mb-3 text-red-800 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                Limites
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Non lisible par l'homme
                </li>
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Taille légèrement plus grande
                </li>
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Besoin encodage/décodage
                </li>
                <li className="flex items-center">
                  <XCircle className="w-4 h-4 text-red-600 mr-2" />
                  Moins universel que JSON
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 11: When to use what
    {
      title: "Quand utiliser quoi ?",
      content: (
        <div className="flex flex-col justify-center h-full space-y-8">
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border-2 border-blue-300">
              <div className="flex items-center justify-center mb-6">
                <FileText className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">Utilisez JSON pour :</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>APIs REST</strong>
                    <p className="text-sm">Communication client-serveur</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Applications Web/Mobile</strong>
                    <p className="text-sm">Transmission de données</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Settings className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Fichiers de configuration</strong>
                    <p className="text-sm">Settings, parameters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Données lisibles</strong>
                    <p className="text-sm">Debug et développement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg border-2 border-red-300">
              <div className="flex items-center justify-center mb-6">
                <Database className="w-16 h-16 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-center text-red-700 mb-6">Utilisez BSON pour :</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <HardDrive className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Bases de données NoSQL</strong>
                    <p className="text-sm">Stockage MongoDB</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Performance critique</strong>
                    <p className="text-sm">Millions d'opérations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Données complexes</strong>
                    <p className="text-sm">Date, Binary, ObjectId</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Search className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Requêtes avancées</strong>
                    <p className="text-sm">Documents imbriqués</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl shadow-lg border-2 border-yellow-400">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-600" />
                En pratique : Combinez les deux !
              </p>
              <p className="text-gray-700">
                <strong>API (JSON)</strong> → Communication → <strong>Base de données (BSON)</strong>
              </p>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 12: Conclusion
    {
      title: "Conclusion",
      content: (
        <div className="flex flex-col justify-center items-center h-full space-y-8">
          <div className="grid grid-cols-2 gap-8 w-full max-w-4xl mt-7">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300 text-center">
              <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-blue-700 mb-3">JSON</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Format <strong>texte léger</strong> et <strong>lisible</strong>,
                idéal pour <strong>APIs</strong> et <strong>communication</strong> entre applications
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl border-2 border-$red-300 text-center">
              <Database className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-red-700 mb-3">BSON</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Format <strong>binaire optimisé</strong> pour <strong>stockage</strong> et <strong>performance</strong> dans les bases de données
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl shadow-xl border-2 border-green-400 max-w-3xl">
            <h3 className="text-2xl font-bold text-center text-green-800 mb-4 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 mr-2" />
              La clé du succès
            </h3>
            <div className="space-y-3 text-gray-700 text-lg">
              <p className="flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <strong>JSON</strong> → Communication, APIs, affichage
              </p>
              <p className="flex items-center">
                <Database className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                <strong>BSON</strong> → Stockage, performance, MongoDB
              </p>
              <p className="flex items-center">
                <Zap className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                Les deux se complètent parfaitement dans une architecture moderne !
              </p>
            </div>
          </div>
          
          <div className="text-5xl font-bold text-gray-800 mt-8 flex items-center">
            MERCI ! 
            <CheckCircle className="w-12 h-12 ml-4 text-green-600" />
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4 overflow-hidden">
        <div className="bg-white rounded-xl shadow-xl w-full h-full flex flex-col overflow-hidden">
          {/* Slide Title */}
          {slides[currentSlide].title && (
            <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 flex-shrink-0">
              <h2 className="text-2xl font-bold text-center">
                {slides[currentSlide].title}
              </h2>
            </div>
          )}

          {/* Slide Content */}
          <div className="p-6 flex-grow overflow-auto">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md px-6 py-3 flex-shrink-0">
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Précédent
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            Suivant
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;