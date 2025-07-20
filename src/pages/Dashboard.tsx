import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface User {
  name: string;
  email: string;
}

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-montserrat font-bold text-blue-200">
                HeoTex Dashboard
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-blue-200 font-medium">{user.name}</p>
                <p className="text-blue-400 text-sm">{user.email}</p>
              </div>
              <Button 
                onClick={onLogout}
                variant="outline"
                className="border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-montserrat font-bold text-white mb-2">
            Добро пожаловать, {user.name}! 🚀
          </h2>
          <p className="text-blue-300 font-open-sans">
            Управляйте вашими IT-решениями из единой панели управления
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-green-700 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Icon name="Shield" size={24} className="text-green-400" />
                <span className="text-2xl font-bold text-green-400">98%</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-green-300 font-medium">Уровень защиты</p>
              <p className="text-slate-400 text-sm">Кибербезопасность активна</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Icon name="Smartphone" size={24} className="text-blue-400" />
                <span className="text-2xl font-bold text-blue-400">12</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-300 font-medium">Активных устройств</p>
              <p className="text-slate-400 text-sm">Мобильные подключения</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-700 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Icon name="Cloud" size={24} className="text-purple-400" />
                <span className="text-2xl font-bold text-purple-400">5.2TB</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-purple-300 font-medium">Облачное хранилище</p>
              <p className="text-slate-400 text-sm">Доступно 10TB</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-red-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="ShieldCheck" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-red-200">Мониторинг безопасности</CardTitle>
              <p className="text-red-300 text-sm">Активное сканирование угроз в реальном времени</p>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-green-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="BarChart3" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-green-200">Аналитика производительности</CardTitle>
              <p className="text-green-300 text-sm">Детальная статистика работы всех систем</p>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-blue-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Settings" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-blue-200">Управление конфигурацией</CardTitle>
              <p className="text-blue-300 text-sm">Настройка параметров всех подключённых сервисов</p>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-purple-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-purple-200">ИИ-помощник</CardTitle>
              <p className="text-purple-300 text-sm">Автоматизация задач с помощью искусственного интеллекта</p>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-yellow-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-yellow-200">Управление командой</CardTitle>
              <p className="text-yellow-300 text-sm">Роли, права доступа и совместная работа</p>
            </CardHeader>
          </Card>

          <Card className="bg-slate-800/50 border-pink-700 hover:bg-slate-800/70 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <CardTitle className="font-montserrat text-pink-200">Отчёты и журналы</CardTitle>
              <p className="text-pink-300 text-sm">Подробные отчёты о работе всех систем</p>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}