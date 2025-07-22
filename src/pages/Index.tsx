import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface IndexProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

const VoiceAssistant = () => {
  const [isListening, setIsListening] = React.useState(false);
  const [transcript, setTranscript] = React.useState('');

  const startListening = () => {
    setIsListening(true);
    // Имитация голосового ввода
    setTimeout(() => {
      setTranscript('Привет, HelTex! Создай для меня лендинг страницу.');
      setIsListening(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {transcript && (
          <div className="bg-slate-800/95 border border-blue-500 rounded-lg p-3 max-w-xs backdrop-blur-sm">
            <p className="text-blue-200 text-sm font-open-sans">{transcript}</p>
          </div>
        )}
        <Button
          onClick={startListening}
          disabled={isListening}
          className={`w-14 h-14 rounded-full ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700'
          } shadow-lg`}
        >
          <Icon 
            name={isListening ? 'MicOff' : 'Mic'} 
            size={24} 
            className="text-white" 
          />
        </Button>
      </div>
    </div>
  );
};

const Index = ({ onShowLogin, onShowRegister }: IndexProps) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col items-center space-y-1">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Icon name="Zap" size={24} className="text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-lg font-bold font-montserrat bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent tracking-wider">HEOTEX</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={onShowLogin}
              variant="outline" 
              className="font-open-sans border-blue-400 text-blue-200 hover:bg-blue-800/20 hover:border-blue-300"
            >
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
              <DialogContent className="sm:max-w-lg bg-slate-800 border-blue-600 text-blue-100">
                <DialogHeader>
                  <DialogTitle className="font-montserrat text-2xl text-center text-blue-200">Добро пожаловать обратно</DialogTitle>
                  <DialogDescription className="font-open-sans text-center text-blue-300">
                    Войдите в свой аккаунт HeoTex
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Social Login Buttons */}
                  <div className="space-y-3">
                    <p className="text-sm text-blue-300 font-open-sans text-center">Быстрый вход через:</p>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform border-blue-500 text-blue-200 hover:bg-blue-700/30">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">ВК</span>
                          </div>
                          <span className="text-sm font-open-sans">ВКонтакте</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform border-blue-500 text-blue-200 hover:bg-blue-700/30">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                            <Icon name="Send" size={12} className="text-white" />
                          </div>
                          <span className="text-sm font-open-sans">Telegram</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform border-blue-500 text-blue-200 hover:bg-blue-700/30">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">Я</span>
                          </div>
                          <span className="text-sm font-open-sans">Яндекс</span>
                        </div>
                      </Button>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-blue-600" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-slate-800 px-2 text-blue-400 font-open-sans">или</span>
                    </div>
                  </div>

                  {/* Regular Login Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-open-sans text-blue-200">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="h-12 bg-slate-700 border-blue-600 text-blue-100 placeholder:text-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="font-open-sans text-blue-200">Пароль</Label>
                      <Input id="password" type="password" placeholder="••••••••" className="h-12 bg-slate-700 border-blue-600 text-blue-100 placeholder:text-blue-400" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded bg-slate-700 border-blue-600" />
                        <Label htmlFor="remember" className="text-sm font-open-sans text-blue-200">Запомнить меня</Label>
                      </div>
                      <button className="text-sm text-blue-400 hover:text-blue-300 hover:underline font-open-sans">
                        Забыли пароль?
                      </button>
                    </div>
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 font-open-sans text-lg text-white">
                      <Icon name="LogIn" size={20} className="mr-2" />
                      Войти
                    </Button>
                  </div>


            <Button 
              onClick={onShowRegister}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 font-open-sans text-white"
            >
              <Icon name="UserPlus" size={16} className="mr-2" />
              Регистрация
            </Button>

          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent mb-6">
            HEOTEX
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-open-sans mb-8 max-w-2xl mx-auto">
            Современная платформа для инновационных решений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 font-open-sans text-lg px-8 text-white"
              onClick={onShowRegister}
            >
              Начать работу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-200 hover:bg-blue-800/30 hover:border-blue-300 font-open-sans text-lg px-8"
            >
              Узнать больше
              <Icon name="Info" size={20} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="ShieldCheck" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Кибербезопасность</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                Комплексная защита от киберугроз и обеспечение безопасности данных
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Smartphone" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Мобильные технологии</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                Разработка и оптимизация мобильных приложений нового поколения
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Globe" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Веб-платформы</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                Создание современных веб-решений с передовыми технологиями
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Искусственный интеллект</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                ИИ-решения для автоматизации и оптимизации бизнес-процессов
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Database" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Облачные решения</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                Масштабируемая облачная инфраструктура и сервисы
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Cog" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Автоматизация</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                Умные системы автоматизации для повышения эффективности
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Icon name="Cog" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Настройки</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                Конфигурация аккаунта и приложения
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                <Icon name="HelpCircle" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Поддержка</CardTitle>
              <CardDescription className="font-open-sans text-blue-300">
                Справка и техническая поддержка пользователей
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-800/80 via-blue-700/80 to-cyan-700/80 backdrop-blur-sm rounded-2xl p-12 text-white border border-blue-600/30 shadow-xl shadow-blue-500/20">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-blue-100">
            Готовы начать?
          </h2>
          <p className="text-xl font-open-sans mb-8 text-blue-200">
            Присоединяйтесь к тысячам пользователей HeoTex
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-open-sans text-lg px-8 text-white shadow-lg"
            onClick={onShowRegister}
          >
            Зарегистрироваться сейчас
            <Icon name="Zap" size={20} className="ml-2" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-blue-700/30">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="flex flex-col items-center space-y-1">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg rotate-6 hover:rotate-0 transition-transform duration-300">
                  <Icon name="Zap" size={16} className="text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-sm font-bold font-montserrat bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent tracking-wider">HEOTEX</span>
            </div>
          </div>
          <p className="text-blue-300 font-open-sans">
            © 2024 HeoTex. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;