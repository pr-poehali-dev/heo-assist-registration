import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-heo-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-black to-heo-blue-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl font-montserrat">H</span>
            </div>
            <span className="text-2xl font-bold font-montserrat bg-gradient-to-r from-black to-heo-blue-900 bg-clip-text text-transparent">HEOTEX</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="font-open-sans">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-montserrat text-2xl text-center">Добро пожаловать обратно</DialogTitle>
                  <DialogDescription className="font-open-sans text-center">
                    Войдите в свой аккаунт HeoTex
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Social Login Buttons */}
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-open-sans text-center">Быстрый вход через:</p>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">ВК</span>
                          </div>
                          <span className="text-sm font-open-sans">ВКонтакте</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                            <Icon name="Send" size={12} className="text-white" />
                          </div>
                          <span className="text-sm font-open-sans">Telegram</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-2">
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
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500 font-open-sans">или</span>
                    </div>
                  </div>

                  {/* Regular Login Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-open-sans">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="font-open-sans">Пароль</Label>
                      <Input id="password" type="password" placeholder="••••••••" className="h-12" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded" />
                        <Label htmlFor="remember" className="text-sm font-open-sans">Запомнить меня</Label>
                      </div>
                      <button className="text-sm text-heo-blue-600 hover:underline font-open-sans">
                        Забыли пароль?
                      </button>
                    </div>
                    <Button className="w-full h-12 bg-gradient-to-r from-black to-heo-blue-900 hover:from-gray-800 hover:to-heo-blue-800 font-open-sans text-lg">
                      <Icon name="LogIn" size={20} className="mr-2" />
                      Войти
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-600 font-open-sans">
                    Нет аккаунта? 
                    <button 
                      onClick={() => { setIsLoginOpen(false); setIsRegisterOpen(true); }}
                      className="text-heo-blue-600 hover:underline ml-1"
                    >
                      Зарегистрироваться
                    </button>
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-heo-blue-600 to-heo-blue-700 hover:from-heo-blue-700 hover:to-heo-blue-800 font-open-sans">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Регистрация
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="font-montserrat text-2xl text-center">Создать аккаунт</DialogTitle>
                  <DialogDescription className="font-open-sans text-center">
                    Присоединяйтесь к HeoTex уже сегодня
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Social Login Buttons */}
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-open-sans text-center">Быстрая регистрация через:</p>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">ВК</span>
                          </div>
                          <span className="text-sm font-open-sans">ВКонтакте</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-2">
                            <Icon name="Send" size={12} className="text-white" />
                          </div>
                          <span className="text-sm font-open-sans">Telegram</span>
                        </div>
                      </Button>
                      <Button variant="outline" className="h-12 relative group hover:scale-105 transition-transform">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-2">
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
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500 font-open-sans">или</span>
                    </div>
                  </div>

                  {/* Regular Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reg-name" className="font-open-sans">Имя</Label>
                      <Input id="reg-name" placeholder="Ваше полное имя" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email" className="font-open-sans">Email</Label>
                      <Input id="reg-email" type="email" placeholder="your@email.com" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password" className="font-open-sans">Пароль</Label>
                      <Input id="reg-password" type="password" placeholder="Минимум 8 символов" className="h-12" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="rounded" />
                      <Label htmlFor="terms" className="text-sm font-open-sans">
                        Я согласен с <span className="text-heo-blue-600 hover:underline cursor-pointer">условиями использования</span>
                      </Label>
                    </div>
                    <Button className="w-full h-12 bg-gradient-to-r from-black to-heo-blue-900 hover:from-gray-800 hover:to-heo-blue-800 font-open-sans text-lg">
                      <Icon name="UserPlus" size={20} className="mr-2" />
                      Создать аккаунт
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-600 font-open-sans">
                    Уже есть аккаунт? 
                    <button 
                      onClick={() => { setIsRegisterOpen(false); setIsLoginOpen(true); }}
                      className="text-heo-blue-600 hover:underline ml-1"
                    >
                      Войти
                    </button>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-montserrat bg-gradient-to-r from-heo-blue-600 to-heo-blue-800 bg-clip-text text-transparent mb-6">
            HEOTEX
          </h1>
          <p className="text-xl md:text-2xl text-heo-blue-700 font-open-sans mb-8 max-w-2xl mx-auto">
            Современная платформа для инновационных решений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-heo-blue-600 to-heo-blue-700 hover:from-heo-blue-700 hover:to-heo-blue-800 font-open-sans text-lg px-8"
              onClick={() => setIsRegisterOpen(true)}
            >
              Начать работу
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-heo-blue-600 text-heo-blue-600 hover:bg-heo-blue-50 font-open-sans text-lg px-8"
            >
              Узнать больше
              <Icon name="Info" size={20} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-heo-blue-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-heo-blue-500 to-heo-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="User" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-heo-blue-900">Регистрация пользователей</CardTitle>
              <CardDescription className="font-open-sans">
                Быстрая и безопасная регистрация новых пользователей
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-heo-blue-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-heo-blue-500 to-heo-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-heo-blue-900">Безопасный вход</CardTitle>
              <CardDescription className="font-open-sans">
                Защищенная авторизация для существующих пользователей
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-heo-blue-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-heo-blue-500 to-heo-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Settings" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-heo-blue-900">Личный кабинет</CardTitle>
              <CardDescription className="font-open-sans">
                Управление профилем и настройками аккаунта
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-heo-blue-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-heo-blue-500 to-heo-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-heo-blue-900">Главная страница</CardTitle>
              <CardDescription className="font-open-sans">
                Центральная точка доступа ко всем функциям
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-heo-blue-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-heo-blue-500 to-heo-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Cog" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-heo-blue-900">Настройки</CardTitle>
              <CardDescription className="font-open-sans">
                Конфигурация аккаунта и приложения
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-heo-blue-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-heo-blue-500 to-heo-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Icon name="HelpCircle" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-heo-blue-900">Поддержка</CardTitle>
              <CardDescription className="font-open-sans">
                Справка и техническая поддержка пользователей
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-heo-blue-600 to-heo-blue-800 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl font-open-sans mb-8 opacity-90">
            Присоединяйтесь к тысячам пользователей HeoTex
          </p>
          <Button 
            size="lg" 
            className="bg-white text-heo-blue-600 hover:bg-heo-blue-50 font-open-sans text-lg px-8"
            onClick={() => setIsRegisterOpen(true)}
          >
            Зарегистрироваться сейчас
            <Icon name="Zap" size={20} className="ml-2" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-heo-blue-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-black to-heo-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-montserrat">H</span>
            </div>
            <span className="text-lg font-bold font-montserrat bg-gradient-to-r from-black to-heo-blue-900 bg-clip-text text-transparent">HEOTEX</span>
          </div>
          <p className="text-heo-blue-600 font-open-sans">
            © 2024 HeoTex. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;