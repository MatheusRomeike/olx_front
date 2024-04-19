import { ToastrService } from 'ngx-toastr';
import { AppInjector } from 'src/app/app-injector';
import { LoadingMessages } from '../models/loading-messages';
import { LoadingService } from '../services/loading.service';

export function Loading(
  mensagens: LoadingMessages = null,
  mostrarErroApi = false
): MethodDecorator {
  const toastrService = AppInjector.get(ToastrService) as ToastrService;
  const loadingService = AppInjector.get(LoadingService) as LoadingService;

  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        if (mensagens?.Inicio) {
          toastrService.info(
            mensagens.Inicio.Conteudo,
            mensagens.Inicio.Titulo
          );
        }
        loadingService.show();
        await originalMethod.apply(this, args);
        if (mensagens?.Sucesso) {
          toastrService.success(
            mensagens.Sucesso.Conteudo,
            mensagens.Sucesso.Titulo
          );
        }
      } catch (error) {
        let titulo = `${mensagens?.Erro?.Titulo ?? 'Erro'}`;
        let conteudo = `${
          mensagens?.Erro?.Conteudo ?? 'Ocorreu um erro inesperado'
        }`;
        if (mostrarErroApi) conteudo += ` ${error.error.message}`;

        toastrService.error(conteudo, titulo);
      } finally {
        loadingService.hide();
      }
    };

    return descriptor;
  } as any;
}
