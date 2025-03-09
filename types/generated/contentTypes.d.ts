import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiBrandBrand extends Struct.CollectionTypeSchema {
  collectionName: 'brands';
  info: {
    description: '\u54C1\u724C\u4FE1\u606F';
    displayName: 'Brand';
    pluralName: 'brands';
    singularName: 'brand';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    cases: Schema.Attribute.Relation<'oneToMany', 'api::case.case'>;
    coolers: Schema.Attribute.Relation<'oneToMany', 'api::cooler.cooler'>;
    cpus: Schema.Attribute.Relation<'oneToMany', 'api::cpu.cpu'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    gpus: Schema.Attribute.Relation<'oneToMany', 'api::gpu.gpu'>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    memory_products: Schema.Attribute.Relation<
      'oneToMany',
      'api::memory.memory'
    >;
    monitors: Schema.Attribute.Relation<'oneToMany', 'api::monitor.monitor'>;
    motherboard_products: Schema.Attribute.Relation<
      'oneToMany',
      'api::motherboard.motherboard'
    >;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    powerSupplies: Schema.Attribute.Relation<
      'oneToMany',
      'api::power-supply.power-supply'
    >;
    publishedAt: Schema.Attribute.DateTime;
    storage_products: Schema.Attribute.Relation<
      'oneToMany',
      'api::storage.storage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCaseCase extends Struct.CollectionTypeSchema {
  collectionName: 'cases';
  info: {
    description: '\u673A\u7BB1\u4FE1\u606F';
    displayName: 'case';
    pluralName: 'cases';
    singularName: 'case';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    color: Schema.Attribute.String;
    compatiblePowerSupplies: Schema.Attribute.Relation<
      'manyToMany',
      'api::power-supply.power-supply'
    >;
    coolingSystem: Schema.Attribute.Component<'case.cooling-system', false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    dimensions: Schema.Attribute.Component<'case.dimensions', false> &
      Schema.Attribute.Required;
    expansionSlots: Schema.Attribute.Component<'case.expansion-slots', false> &
      Schema.Attribute.Required;
    formFactor: Schema.Attribute.Enumeration<
      [
        'fullTower',
        'midTower',
        'miniTower',
        'sffpc',
        'htpc',
        'desktop',
        'cube',
        'slim',
      ]
    > &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true>;
    ioPorts: Schema.Attribute.Component<'case.io-ports', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::case.case'> &
      Schema.Attribute.Private;
    materialSpecs: Schema.Attribute.Component<'case.material-specs', false>;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    motherboardSupport: Schema.Attribute.Enumeration<
      ['eatx', 'atx', 'microAtx', 'miniItx', 'ssiEeb', 'ssiCeb']
    > &
      Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    psuShroud: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    publishedAt: Schema.Attribute.DateTime;
    releaseDate: Schema.Attribute.Date;
    rgbLighting: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    status: Schema.Attribute.Enumeration<
      ['inStock', 'discontinued', 'comingSoon']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'inStock'>;
    tempered: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    warranty: Schema.Attribute.Component<'common.warranty-info', false>;
  };
}

export interface ApiCoolerCooler extends Struct.CollectionTypeSchema {
  collectionName: 'coolers';
  info: {
    description: 'CPU\u6563\u70ED\u5668\u4FE1\u606F';
    displayName: 'cooler';
    pluralName: 'coolers';
    singularName: 'cooler';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    compatibleWith: Schema.Attribute.Relation<'manyToMany', 'api::cpu.cpu'>;
    coolant: Schema.Attribute.String;
    coolantCapacity: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    fanSpecs: Schema.Attribute.Component<'cooler.fan-specs', false>;
    heatsinkSpecs: Schema.Attribute.Component<'cooler.heatsink-specs', false>;
    images: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cooler.cooler'
    > &
      Schema.Attribute.Private;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    mountingSpecs: Schema.Attribute.Component<'cooler.mounting-specs', false> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    pumpSpecs: Schema.Attribute.Component<'cooler.pump-specs', false>;
    radiatorSpecs: Schema.Attribute.Component<'cooler.radiator-specs', false>;
    refillable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    releaseDate: Schema.Attribute.Date;
    status: Schema.Attribute.Enumeration<
      ['inStock', 'discontinued', 'comingSoon']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'inStock'>;
    thermalPerformance: Schema.Attribute.Component<
      'cooler.thermal-performance',
      false
    > &
      Schema.Attribute.Required;
    tubingLength: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    type: Schema.Attribute.Enumeration<
      ['airCooler', 'aio', 'customLoop', 'passiveCooler', 'hybridCooler']
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    warranty: Schema.Attribute.Component<'common.warranty-info', false>;
  };
}

export interface ApiCpuCpu extends Struct.CollectionTypeSchema {
  collectionName: 'cpus';
  info: {
    description: '';
    displayName: 'CPU';
    pluralName: 'cpus';
    singularName: 'cpu';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    BoostFrequency: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    compatibleCoolers: Schema.Attribute.Relation<
      'manyToMany',
      'api::cooler.cooler'
    >;
    CpuImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CpuSeries: Schema.Attribute.Enumeration<
      [
        '\u9177\u777Fi3',
        '\u9177\u777Fi5',
        '\u9177\u777Fi7',
        '\u9177\u777Fi9',
        'Ultra3',
        'Ultra5',
        'Ultra7',
        'Ultra9',
        'AM4',
        'AM5',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CPUsocket: Schema.Attribute.Enumeration<
      ['LGA 1200', 'LGA 1151', 'LGA 1700', 'LGA 1851', 'LGA 2011', 'AM4', 'AM5']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    is_having_cooler: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    is_integrated_graphics: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    L2Cache: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    L3Cache: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::cpu.cpu'>;
    MainFrequency: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Manufacturing: Schema.Attribute.Enumeration<
      ['Intel 14nm', 'Intel 10nm', 'Intel 7', 'Intel 4', 'Intel 3']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    marketSegment: Schema.Attribute.Enumeration<
      ['entry', 'mainstream', 'high_end', 'extreme']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Price: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    releaseDate: Schema.Attribute.Date &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    specifications: Schema.Attribute.JSON &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGpuGpu extends Struct.CollectionTypeSchema {
  collectionName: 'gpus';
  info: {
    description: '\u9AD8\u6027\u80FD\u663E\u5361\u4FE1\u606F';
    displayName: 'GPU';
    pluralName: 'gpus';
    singularName: 'gpu';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    benchmarks: Schema.Attribute.JSON;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    compatibleMonitors: Schema.Attribute.Relation<
      'manyToMany',
      'api::monitor.monitor'
    >;
    compatibleWith: Schema.Attribute.Relation<
      'manyToMany',
      'api::motherboard.motherboard'
    >;
    coreSpecs: Schema.Attribute.Component<'gpu.core-specs', false> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    displayOutputs: Schema.Attribute.Component<'gpu.display-outputs', false> &
      Schema.Attribute.Required;
    featuresSupport: Schema.Attribute.Component<'gpu.features-support', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    interfaceType: Schema.Attribute.Enumeration<
      ['PCIExpress4', 'PCIExpress5', 'PCIExpress3']
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::gpu.gpu'>;
    marketSegment: Schema.Attribute.Enumeration<
      ['entry', 'mainstream', 'highend', 'flagship', 'professional']
    > &
      Schema.Attribute.Required;
    memorySpecs: Schema.Attribute.Component<'gpu.memory-specs', false> &
      Schema.Attribute.Required;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    physicalSpecs: Schema.Attribute.Component<'gpu.physical-specs', false> &
      Schema.Attribute.Required;
    powerThermal: Schema.Attribute.Component<'gpu.power-thermal', false> &
      Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    releaseDate: Schema.Attribute.Date & Schema.Attribute.Required;
    series: Schema.Attribute.Enumeration<
      [
        'GeForceRTX40',
        'GeForceRTX30',
        'GeForceRTX20',
        'GeForceGTX16',
        'GeForceGTX10',
        'RadeonRX7000',
        'RadeonRX6000',
        'RadeonRX5000',
        'ArcA',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
    status: Schema.Attribute.Enumeration<
      ['inStock', 'discontinued', 'comingSoon']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'inStock'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    warranty: Schema.Attribute.Component<'common.warranty-info', false> &
      Schema.Attribute.Required;
  };
}

export interface ApiMemoryMemory extends Struct.CollectionTypeSchema {
  collectionName: 'memories';
  info: {
    description: '\u5185\u5B58\u6761\u6570\u636E\u6A21\u578B';
    displayName: 'Memory';
    pluralName: 'memories';
    singularName: 'memory';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    capacity: Schema.Attribute.Component<'memory.capacity-config', false> &
      Schema.Attribute.Required;
    compatibility: Schema.Attribute.Component<'memory.compatibility', false> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    lighting: Schema.Attribute.Component<'memory.lighting-features', false>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::memory.memory'>;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    performance: Schema.Attribute.Component<'memory.performance-specs', false> &
      Schema.Attribute.Required;
    physical: Schema.Attribute.Component<'memory.physical-specs', false> &
      Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    series: Schema.Attribute.String & Schema.Attribute.Required;
    technical: Schema.Attribute.Component<'memory.technical-specs', false> &
      Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['DDR4', 'DDR5']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    warranty: Schema.Attribute.Component<'common.warranty-info', false> &
      Schema.Attribute.Required;
  };
}

export interface ApiMonitorMonitor extends Struct.CollectionTypeSchema {
  collectionName: 'monitors';
  info: {
    description: '\u663E\u793A\u5668\u4EA7\u54C1\u4FE1\u606F';
    displayName: 'monitor';
    pluralName: 'monitors';
    singularName: 'monitor';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    accessories: Schema.Attribute.JSON;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    certifications: Schema.Attribute.JSON;
    colorPerformance: Schema.Attribute.Component<
      'monitor.color-performance',
      false
    >;
    compatibleWith: Schema.Attribute.Relation<'manyToMany', 'api::gpu.gpu'>;
    connectivity: Schema.Attribute.Component<'monitor.connectivity', false> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    displayPanel: Schema.Attribute.Component<'monitor.display-panel', false> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'monitor.features', false>;
    images: Schema.Attribute.Media<'images', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::monitor.monitor'
    > &
      Schema.Attribute.Private;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    physicalSpecs: Schema.Attribute.Component<'monitor.physical-specs', false> &
      Schema.Attribute.Required;
    powerSpecs: Schema.Attribute.Component<'monitor.power-specs', false>;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    releaseDate: Schema.Attribute.Date;
    status: Schema.Attribute.Enumeration<
      ['inStock', 'discontinued', 'comingSoon']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'inStock'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usage: Schema.Attribute.Enumeration<
      [
        'gaming',
        'professional',
        'business',
        'general',
        'multimedia',
        'ultrawide',
        'portable',
      ]
    >;
    warranty: Schema.Attribute.Component<'common.warranty-info', false>;
  };
}

export interface ApiMotherboardMotherboard extends Struct.CollectionTypeSchema {
  collectionName: 'motherboards';
  info: {
    description: '\u8BA1\u7B97\u673A\u4E3B\u677F\u6570\u636E\u6A21\u578B';
    displayName: 'Motherboard';
    pluralName: 'motherboards';
    singularName: 'motherboard';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    audioSolution: Schema.Attribute.String & Schema.Attribute.Required;
    bios: Schema.Attribute.Component<'specs.bios-features', false> &
      Schema.Attribute.Required;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    chipset: Schema.Attribute.Enumeration<
      [
        'Z790',
        'Z690',
        'B760',
        'B660',
        'H770',
        'H670',
        'X670E',
        'X670',
        'B650E',
        'B650',
        'A620',
      ]
    > &
      Schema.Attribute.Required;
    cpuSocket: Schema.Attribute.Enumeration<
      ['LGA1700', 'LGA1851', 'AM5', 'AM4']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dimensions: Schema.Attribute.String;
    expansionSlots: Schema.Attribute.Component<'specs.expansion-slots', false> &
      Schema.Attribute.Required;
    features: Schema.Attribute.JSON & Schema.Attribute.Required;
    formFactor: Schema.Attribute.Enumeration<
      ['ATX', 'Micro_ATX', 'Mini_ITX', 'Extended_ATX']
    > &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::motherboard.motherboard'
    >;
    manufacturer: Schema.Attribute.Enumeration<
      [
        'ASUS',
        'GIGABYTE',
        'MSI',
        'ASRock',
        'BIOSTAR',
        'EVGA',
        'Colorful',
        'Maxsun',
      ]
    > &
      Schema.Attribute.Required;
    marketSegment: Schema.Attribute.Enumeration<
      ['entry', 'mainstream', 'high_end', 'extreme']
    > &
      Schema.Attribute.Required;
    memorySpec: Schema.Attribute.Component<
      'specs.memory-specification',
      false
    > &
      Schema.Attribute.Required;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    networkFeatures: Schema.Attribute.Component<
      'specs.network-features',
      false
    > &
      Schema.Attribute.Required;
    powerDesign: Schema.Attribute.Component<'specs.power-design', false> &
      Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    productLine: Schema.Attribute.Enumeration<
      [
        'ROG_MAXIMUS',
        'ROG_STRIX',
        'TUF_GAMING',
        'PRIME',
        'ProArt',
        'WORKSTATION',
        'AORUS_XTREME',
        'AORUS_MASTER',
        'AORUS_PRO',
        'AORUS_ELITE',
        'GAMING_X',
        'UD_PRO',
        'UD',
        'MEG',
        'MPG',
        'MAG',
        'PRO',
        'Taichi',
        'Phantom_Gaming',
        'Steel_Legend',
        'PRO_RS',
        'PG_RIPTIDE',
        'RACING',
        'GAMING',
        'PRO_GAMING',
        'CVN',
        'BATTLE_AX',
        'ICRAFT',
        'GAMING_PRO',
        'OTHER',
      ]
    > &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releaseDate: Schema.Attribute.Date;
    rgb_headers: Schema.Attribute.Component<'specs.rgb-headers', false> &
      Schema.Attribute.Required;
    storageInterfaces: Schema.Attribute.Component<
      'specs.storage-interfaces',
      false
    > &
      Schema.Attribute.Required;
    subSeries: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    usbPorts: Schema.Attribute.Component<'specs.usb-ports', false> &
      Schema.Attribute.Required;
    weight: Schema.Attribute.Decimal;
  };
}

export interface ApiPowerSupplyPowerSupply extends Struct.CollectionTypeSchema {
  collectionName: 'power_supplies';
  info: {
    description: '\u7535\u6E90\u4F9B\u5E94\u5668\u4FE1\u606F';
    displayName: 'power-supply';
    pluralName: 'power-supplies';
    singularName: 'power-supply';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    compatibleWith: Schema.Attribute.Relation<'manyToMany', 'api::case.case'>;
    connectorSpecs: Schema.Attribute.Component<
      'power-supply.connector-specs',
      false
    > &
      Schema.Attribute.Required;
    coolingSpecs: Schema.Attribute.Component<
      'power-supply.cooling-specs',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    efficiencyCertification: Schema.Attribute.Component<
      'power-supply.efficiency-certification',
      false
    > &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true>;
    inputVoltage: Schema.Attribute.Enumeration<
      [
        'oneHundredToTwoFortyV',
        'oneHundredToOneHundredTwentyV',
        'twoTwentyToTwoFortyV',
        'autoRanging',
      ]
    > &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::power-supply.power-supply'
    > &
      Schema.Attribute.Private;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    mtbf: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    outputSpecs: Schema.Attribute.Component<
      'power-supply.output-specs',
      false
    > &
      Schema.Attribute.Required;
    physicalSpecs: Schema.Attribute.Component<
      'power-supply.physical-specs',
      false
    > &
      Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    protectionFeatures: Schema.Attribute.Component<
      'power-supply.protection-features',
      false
    >;
    publishedAt: Schema.Attribute.DateTime;
    releaseDate: Schema.Attribute.Date;
    status: Schema.Attribute.Enumeration<
      ['inStock', 'discontinued', 'comingSoon']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'inStock'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    warranty: Schema.Attribute.Component<'common.warranty-info', false>;
  };
}

export interface ApiStorageStorage extends Struct.CollectionTypeSchema {
  collectionName: 'storages';
  info: {
    description: '\u786C\u76D8/\u56FA\u6001\u786C\u76D8\u6570\u636E\u6A21\u578B';
    displayName: 'Storage';
    pluralName: 'storages';
    singularName: 'storage';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    basic_info: Schema.Attribute.Component<'storage.basic-info', false> &
      Schema.Attribute.Required;
    brand: Schema.Attribute.Relation<'manyToOne', 'api::brand.brand'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::storage.storage'
    >;
    model: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    performance: Schema.Attribute.Component<
      'storage.performance-specs',
      false
    > &
      Schema.Attribute.Required;
    price: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    series: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['SSD_NVMe', 'SSD_SATA', 'HDD_SATA']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    warranty: Schema.Attribute.Component<'common.warranty-info', false> &
      Schema.Attribute.Required;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::brand.brand': ApiBrandBrand;
      'api::case.case': ApiCaseCase;
      'api::cooler.cooler': ApiCoolerCooler;
      'api::cpu.cpu': ApiCpuCpu;
      'api::gpu.gpu': ApiGpuGpu;
      'api::memory.memory': ApiMemoryMemory;
      'api::monitor.monitor': ApiMonitorMonitor;
      'api::motherboard.motherboard': ApiMotherboardMotherboard;
      'api::power-supply.power-supply': ApiPowerSupplyPowerSupply;
      'api::storage.storage': ApiStorageStorage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
