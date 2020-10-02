import { ClienteModel } from './../model/cliente-model';
import { ClienteEntity } from './../entity/cliente-entity';
import { Mapper } from './../../../app/base/mapper';
export class ClienteMapper extends Mapper<ClienteEntity, ClienteModel> {
    mapFrom(entity: ClienteEntity): ClienteModel {
        return {
            id: entity.id,
            nome: entity.nome ? entity.nome : '',
            sobrenome: entity.sobrenome,
            telefones: entity.telefones,
            dataNasc: entity.dataNasc,
            cpf: entity.cpf,
            rg: entity.rg,
            email: entity.email,
            endereco: entity.endereco
        };
    }
    mapTo(model: ClienteModel): ClienteEntity {
        return {
            id: model.id,
            nome: model.nome,
            sobrenome: model.sobrenome,
            telefones: model.telefones,
            dataNasc: model.dataNasc,
            cpf: model.cpf,
            rg: model.rg,
            email: model.email,
            endereco: model.endereco
        };
    }
}