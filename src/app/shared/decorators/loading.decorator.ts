import { ToastrService } from 'ngx-toastr';
import { AppInjector } from 'src/app/app-injector';
import { LoadingMessages } from '../models/loading-messages';
import { LoadingService } from '../services/loading.service';

export function Loading(mensagens: LoadingMessages = null): MethodDecorator {
  const toastrService = AppInjector.get(ToastrService) as ToastrService;
  const loadingService = AppInjector.get(LoadingService) as LoadingService;

  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        loadingService.show();
        await originalMethod.apply(this, args);
        if (mensagens?.Sucesso) {
          toastrService.success(mensagens.Sucesso);
        }
      } catch (error) {
        console.error('Error in LoadingDecorator:', error);
        if (mensagens?.Erro) {
          toastrService.error(mensagens.Erro);
        }
      } finally {
        loadingService.hide();
      }
    };

    return descriptor;
  } as any;
}