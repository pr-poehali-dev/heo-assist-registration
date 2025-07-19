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
            <div className="w-10 h-10 bg-gradient-to-r from-heo-blue-600 to-heo-blue-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl font-montserrat">H</span>
            </div>
            <span className="text-2xl font-bold font-montserrat text-heo-blue-900">HEOWAVE</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="font-open-sans">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-montserrat">Добро пожаловать обратно</DialogTitle>
                  <DialogDescription className="font-open-sans">
                    Войдите в свой аккаунт HeoWave
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-open-sans">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="font-open-sans">Пароль</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-heo-blue-600 to-heo-blue-700 hover:from-heo-blue-700 hover:to-heo-blue-800 font-open-sans">
                    Войти
                  </Button>
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
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-montserrat">Создать аккаунт</DialogTitle>
                  <DialogDescription className="font-open-sans">
                    Присоединяйтесь к HeoWave уже сегодня
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-name" className="font-open-sans">Имя</Label>
                    <Input id="reg-name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="font-open-sans">Email</Label>
                    <Input id="reg-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password" className="font-open-sans">Пароль</Label>
                    <Input id="reg-password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-heo-blue-600 to-heo-blue-700 hover:from-heo-blue-700 hover:to-heo-blue-800 font-open-sans">
                    Создать аккаунт
                  </Button>
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
            HEOWAVE
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
            Присоединяйтесь к тысячам пользователей HeoWave
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
            <div className="w-8 h-8 bg-gradient-to-r from-heo-blue-600 to-heo-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-montserrat">H</span>
            </div>
            <span className="text-lg font-bold font-montserrat text-heo-blue-900">HEOWAVE</span>
          </div>
          <p className="text-heo-blue-600 font-open-sans">
            © 2024 HeoWave. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;