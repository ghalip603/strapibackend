import type { Schema, Struct } from '@strapi/strapi';

export interface BiosFeatureSet extends Struct.ComponentSchema {
  collectionName: 'components_bios_feature_sets';
  info: {
    description: 'BIOS\u529F\u80FD\u96C6\u5408';
    displayName: 'BIOS Feature Set';
    icon: 'list';
  };
  attributes: {
    additional_features: Schema.Attribute.JSON;
    ez_mode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    fan_control: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    gui_interface: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    language_support: Schema.Attribute.JSON;
    memory_oc: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    mouse_support: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    overclocking_support: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    rgb_control: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    secure_boot: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BiosUpdateMethods extends Struct.ComponentSchema {
  collectionName: 'components_bios_update_methods';
  info: {
    description: 'BIOS\u66F4\u65B0\u65B9\u5F0F';
    displayName: 'BIOS Update Methods';
    icon: 'upload';
  };
  attributes: {
    bios_rollback: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    cpu_less_update: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    dual_bios: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    internet_flash: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    usb_flashback: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    windows_utility: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface CaseCoolingSystem extends Struct.ComponentSchema {
  collectionName: 'components_case_cooling_systems';
  info: {
    description: '\u673A\u7BB1\u6563\u70ED\u7CFB\u7EDF\u4FE1\u606F';
    displayName: '\u6563\u70ED\u7CFB\u7EDF';
  };
  attributes: {
    bottomFanSupport: Schema.Attribute.String;
    bottomRadiatorSupport: Schema.Attribute.String;
    fanController: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    frontFanSupport: Schema.Attribute.String;
    frontRadiatorSupport: Schema.Attribute.String;
    includedFans: Schema.Attribute.String;
    rearFanSupport: Schema.Attribute.String;
    rearRadiatorSupport: Schema.Attribute.String;
    sideFanSupport: Schema.Attribute.String;
    sideRadiatorSupport: Schema.Attribute.String;
    topFanSupport: Schema.Attribute.String;
    topRadiatorSupport: Schema.Attribute.String;
  };
}

export interface CaseDimensions extends Struct.ComponentSchema {
  collectionName: 'components_case_dimensions';
  info: {
    description: '\u673A\u7BB1\u5C3A\u5BF8\u89C4\u683C\u4FE1\u606F';
    displayName: '\u5C3A\u5BF8\u89C4\u683C';
  };
  attributes: {
    cableManagementSpace: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    height: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    length: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    maxCpuCoolerHeight: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    maxGpuLength: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    maxPsuLength: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    volume: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    weight: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CaseExpansionSlots extends Struct.ComponentSchema {
  collectionName: 'components_case_expansion_slots';
  info: {
    description: '\u673A\u7BB1\u6269\u5C55\u69FD\u4F4D\u4FE1\u606F';
    displayName: '\u6269\u5C55\u69FD\u4F4D';
  };
  attributes: {
    externalThreePointFiveBays: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    externalTwoPointFiveBays: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    internalThreePointFiveBays: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    internalTwoPointFiveBays: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    pciSlots: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    verticalGpuMount: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface CaseIoPorts extends Struct.ComponentSchema {
  collectionName: 'components_case_io_ports';
  info: {
    description: '\u673A\u7BB1\u524D\u7F6EIO\u63A5\u53E3\u4FE1\u606F';
    displayName: 'IO\u63A5\u53E3';
  };
  attributes: {
    audioJack: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    fanController: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    microphoneJack: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    rgbController: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sdCardReader: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    usbThreePointOne: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    usbThreePointTwo: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    usbThreePointZero: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    usbTwoPointZero: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    usbTypeC: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CaseMaterialSpecs extends Struct.ComponentSchema {
  collectionName: 'components_case_material_specs';
  info: {
    description: '\u673A\u7BB1\u6750\u8D28\u89C4\u683C\u4FE1\u606F';
    displayName: '\u6750\u8D28\u89C4\u683C';
  };
  attributes: {
    dustFilters: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    frameMaterial: Schema.Attribute.Enumeration<
      ['steel', 'aluminum', 'plastic']
    >;
    frontPanelMaterial: Schema.Attribute.Enumeration<
      ['steel', 'aluminum', 'temperedGlass', 'acrylic', 'mesh', 'plastic']
    >;
    sidePanelMaterial: Schema.Attribute.Enumeration<
      ['steel', 'aluminum', 'temperedGlass', 'acrylic', 'mesh']
    >;
  };
}

export interface CommonContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_common_contact_infos';
  info: {
    description: '\u8054\u7CFB\u65B9\u5F0F\u4FE1\u606F';
    displayName: 'Contact Information';
    icon: 'address-book';
  };
  attributes: {
    additional_info: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    service_hours: Schema.Attribute.Text;
    website: Schema.Attribute.String;
  };
}

export interface CommonDimensions extends Struct.ComponentSchema {
  collectionName: 'components_common_dimensions';
  info: {
    description: '\u4EA7\u54C1\u5C3A\u5BF8\u89C4\u683C';
    displayName: 'Dimensions';
    icon: 'ruler-combined';
  };
  attributes: {
    height: Schema.Attribute.Decimal & Schema.Attribute.Required;
    length: Schema.Attribute.Decimal & Schema.Attribute.Required;
    special_features: Schema.Attribute.JSON;
    width: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface CommonWarrantyInfo extends Struct.ComponentSchema {
  collectionName: 'components_common_warranty_infos';
  info: {
    description: '\u4EA7\u54C1\u4FDD\u4FEE\u4FE1\u606F';
    displayName: 'Warranty Information';
    icon: 'shield-alt';
  };
  attributes: {
    coverage: Schema.Attribute.JSON;
    registration_required: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    service_type: Schema.Attribute.Enumeration<
      [
        'On_Site',
        'Return_to_Manufacturer',
        'Authorized_Service_Center',
        'Replacement_Only',
      ]
    > &
      Schema.Attribute.Required;
    support_contact: Schema.Attribute.Component<'common.contact-info', false>;
    terms_conditions: Schema.Attribute.Text;
    transferable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    warranty_period: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    warranty_type: Schema.Attribute.Enumeration<
      ['Limited_Lifetime', 'Standard', 'Extended', 'None']
    > &
      Schema.Attribute.Required;
  };
}

export interface CoolerFanSpecs extends Struct.ComponentSchema {
  collectionName: 'components_cooler_fan_specs';
  info: {
    description: '\u6563\u70ED\u5668\u98CE\u6247\u89C4\u683C\u4FE1\u606F';
    displayName: '\u98CE\u6247\u89C4\u683C';
  };
  attributes: {
    airflow: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    bearingType: Schema.Attribute.Enumeration<
      [
        'hydraulicBearing',
        'ballBearing',
        'sleeveBearing',
        'fluidDynamicBearing',
        'magneticLevitation',
        'twoballBearing',
      ]
    >;
    fanConnector: Schema.Attribute.Enumeration<
      ['threePin', 'fourPin', 'proprietary']
    >;
    fanCount: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    fanSize: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    fanSpeed: Schema.Attribute.String;
    noiseLevel: Schema.Attribute.String;
    pwmSupport: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgbLighting: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    staticPressure: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CoolerHeatsinkSpecs extends Struct.ComponentSchema {
  collectionName: 'components_cooler_heatsink_specs';
  info: {
    description: '\u6563\u70ED\u5668\u6563\u70ED\u7247\u89C4\u683C\u4FE1\u606F';
    displayName: '\u6563\u70ED\u7247\u89C4\u683C';
  };
  attributes: {
    finCount: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    finThickness: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    heatpipeDiameter: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    heatpipes: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    material: Schema.Attribute.Enumeration<
      ['aluminum', 'copper', 'aluminumAndCopper', 'nickelPlated']
    > &
      Schema.Attribute.Required;
    surfaceArea: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    surfaceTreatment: Schema.Attribute.Enumeration<
      ['none', 'nickelPlated', 'blackCoating', 'anodized']
    >;
  };
}

export interface CoolerMountingSpecs extends Struct.ComponentSchema {
  collectionName: 'components_cooler_mounting_specs';
  info: {
    description: '\u6563\u70ED\u5668\u5B89\u88C5\u89C4\u683C\u4FE1\u606F';
    displayName: '\u5B89\u88C5\u89C4\u683C';
  };
  attributes: {
    clearanceHeight: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    dimensions: Schema.Attribute.Component<'common.dimensions', false>;
    installationType: Schema.Attribute.Enumeration<
      ['pushPin', 'screwMount', 'clipOn', 'backplate']
    >;
    ramClearance: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    socketSupport: Schema.Attribute.JSON & Schema.Attribute.Required;
    vrm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    weight: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CoolerPumpSpecs extends Struct.ComponentSchema {
  collectionName: 'components_cooler_pump_specs';
  info: {
    description: '\u6C34\u51B7\u6563\u70ED\u5668\u6C34\u6CF5\u89C4\u683C\u4FE1\u606F';
    displayName: '\u6C34\u6CF5\u89C4\u683C';
  };
  attributes: {
    controlMethod: Schema.Attribute.Enumeration<
      ['pwm', 'dcVoltage', 'software', 'fixed']
    >;
    flowRate: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    mtbf: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    noiseLevel: Schema.Attribute.String;
    powerConsumption: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    pumpSpeed: Schema.Attribute.String;
  };
}

export interface CoolerRadiatorSpecs extends Struct.ComponentSchema {
  collectionName: 'components_cooler_radiator_specs';
  info: {
    description: '\u6C34\u51B7\u6563\u70ED\u5668\u6563\u70ED\u6392\u89C4\u683C\u4FE1\u606F';
    displayName: '\u6563\u70ED\u6392\u89C4\u683C';
  };
  attributes: {
    finDensity: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    material: Schema.Attribute.Enumeration<
      ['aluminum', 'copper', 'aluminumAndCopper']
    >;
    size: Schema.Attribute.Enumeration<
      [
        'onetwenty',
        'oneforty',
        'twofourty',
        'threesixty',
        'fourhundredtwenty',
        'fourhundredeighty',
      ]
    > &
      Schema.Attribute.Required;
    thickness: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CoolerThermalPerformance extends Struct.ComponentSchema {
  collectionName: 'components_cooler_thermal_performances';
  info: {
    description: '\u6563\u70ED\u5668\u6563\u70ED\u6027\u80FD\u4FE1\u606F';
    displayName: '\u6563\u70ED\u6027\u80FD';
  };
  attributes: {
    benchmarks: Schema.Attribute.JSON;
    maxTemperature: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    tdp: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    thermalResistance: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface GpuCoreSpecs extends Struct.ComponentSchema {
  collectionName: 'components_gpu_core_specs';
  info: {
    description: 'GPU\u6838\u5FC3\u89C4\u683C\u4FE1\u606F';
    displayName: '\u6838\u5FC3\u89C4\u683C';
  };
  attributes: {
    architecture: Schema.Attribute.String & Schema.Attribute.Required;
    boostClock: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    computeUnits: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    coreClock: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    coreCount: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    process: Schema.Attribute.Enumeration<
      [
        'TSMCfournm',
        'TSMCfivenm',
        'TSMCsevennm',
        'TSMCtwelvenm',
        'Samsungeightnm',
        'Samsungtennm',
        'Other',
      ]
    > &
      Schema.Attribute.Required;
    rtCores: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    tensorCores: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface GpuDisplayOutputs extends Struct.ComponentSchema {
  collectionName: 'components_gpu_display_outputs';
  info: {
    description: 'GPU\u663E\u793A\u8F93\u51FA\u63A5\u53E3';
    displayName: '\u663E\u793A\u8F93\u51FA';
  };
  attributes: {
    displayPort: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    displayPortVersion: Schema.Attribute.Enumeration<
      [
        'DisplayPortOnePointFour',
        'DisplayPortOnePointFourA',
        'DisplayPortTwoPointZero',
        'DisplayPortTwoPointOne',
      ]
    >;
    dvi: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    hdmi: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    hdmiVersion: Schema.Attribute.Enumeration<
      ['HDMItwoPointZero', 'HDMItwoPointOne', 'HDMItwoPointOneA']
    >;
    maxRefreshRate: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    maxResolution: Schema.Attribute.String;
    usbc: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    vga: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface GpuFeaturesSupport extends Struct.ComponentSchema {
  collectionName: 'components_gpu_features_support';
  info: {
    description: 'GPU\u7279\u6027\u4E0E\u6280\u672F\u652F\u6301';
    displayName: '\u7279\u6027\u4E0E\u652F\u6301';
  };
  attributes: {
    directX: Schema.Attribute.Enumeration<
      ['DirectXEleven', 'DirectXTwelve', 'DirectXTwelveUltimate']
    > &
      Schema.Attribute.Required;
    dlss: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    dlssVersion: Schema.Attribute.Enumeration<
      [
        'DLSSonePointZero',
        'DLSStwoPointZero',
        'DLSSthreePointZero',
        'DLSSthreePointFive',
      ]
    >;
    fsr: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    fsrVersion: Schema.Attribute.Enumeration<
      ['FSRonePointZero', 'FSRtwoPointZero', 'FSRthreePointZero']
    >;
    multiGpuSupport: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    multiGpuTechnology: Schema.Attribute.Enumeration<
      ['SLI', 'NVLink', 'CrossFire']
    >;
    openGL: Schema.Attribute.String & Schema.Attribute.Required;
    rayTracing: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    vrReady: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    vulkan: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GpuMemorySpecs extends Struct.ComponentSchema {
  collectionName: 'components_gpu_memory_specs';
  info: {
    description: 'GPU\u663E\u5B58\u89C4\u683C\u4FE1\u606F';
    displayName: '\u663E\u5B58\u89C4\u683C';
  };
  attributes: {
    bandwidth: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    busWidth: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    capacity: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    clockSpeed: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    effectiveClockSpeed: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    type: Schema.Attribute.Enumeration<
      ['GDDR6', 'GDDR6X', 'GDDR5', 'GDDR5X', 'HBMtwo', 'HBMtwoe', 'HBMthree']
    > &
      Schema.Attribute.Required;
  };
}

export interface GpuPhysicalSpecs extends Struct.ComponentSchema {
  collectionName: 'components_gpu_physical_specs';
  info: {
    description: 'GPU\u7269\u7406\u5C3A\u5BF8\u548C\u89C4\u683C\u4FE1\u606F';
    displayName: '\u7269\u7406\u89C4\u683C';
  };
  attributes: {
    backplate: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    backplateMaterial: Schema.Attribute.Enumeration<
      ['aluminum', 'stainlessSteel', 'carbonFiber', 'plastic', 'other']
    >;
    height: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    length: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    lighting: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    lightingControl: Schema.Attribute.Enumeration<
      ['softwareControl', 'hardwareControl', 'bothControls', 'noControl']
    >;
    slotSize: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    weight: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    width: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface GpuPowerThermal extends Struct.ComponentSchema {
  collectionName: 'components_gpu_power_thermal';
  info: {
    description: 'GPU\u529F\u8017\u4E0E\u6563\u70ED\u89C4\u683C';
    displayName: '\u529F\u8017\u4E0E\u6563\u70ED';
  };
  attributes: {
    coolingSystem: Schema.Attribute.Enumeration<
      [
        'dualFan',
        'tripleFan',
        'singleFan',
        'waterCooling',
        'hybridCooling',
        'passiveCooling',
      ]
    > &
      Schema.Attribute.Required;
    maxTemperature: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    powerConnectors: Schema.Attribute.Enumeration<
      [
        'eightPin',
        'sixPin',
        'eightPinPlusEightPin',
        'eightPinPlusSixPin',
        'sixteenPin',
        'noExternalPower',
      ]
    > &
      Schema.Attribute.Required;
    recommendedPsu: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    tdp: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface MemoryCapacityConfig extends Struct.ComponentSchema {
  collectionName: 'components_memory_capacity_configs';
  info: {
    description: '\u5185\u5B58\u5BB9\u91CF\u914D\u7F6E';
    displayName: 'Capacity Configuration';
    icon: 'database';
  };
  attributes: {
    kit_capacity: Schema.Attribute.Integer & Schema.Attribute.Required;
    kit_configuration: Schema.Attribute.Enumeration<
      [
        'Single',
        '2x4GB',
        '2x8GB',
        '2x16GB',
        '2x32GB',
        '4x4GB',
        '4x8GB',
        '4x16GB',
        '4x32GB',
      ]
    > &
      Schema.Attribute.Required;
    single_capacity: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface MemoryCompatibility extends Struct.ComponentSchema {
  collectionName: 'components_memory_compatibilities';
  info: {
    description: '\u5185\u5B58\u517C\u5BB9\u6027\u914D\u7F6E';
    displayName: 'Compatibility';
    icon: 'check-circle';
  };
  attributes: {
    amd_support: Schema.Attribute.Component<'memory.platform-support', false> &
      Schema.Attribute.Required;
    form_factor: Schema.Attribute.Enumeration<['DIMM', 'SO_DIMM']> &
      Schema.Attribute.Required;
    intel_support: Schema.Attribute.Component<
      'memory.platform-support',
      false
    > &
      Schema.Attribute.Required;
    pin_count: Schema.Attribute.Integer & Schema.Attribute.Required;
    qvl_list: Schema.Attribute.JSON;
  };
}

export interface MemoryLightingFeatures extends Struct.ComponentSchema {
  collectionName: 'components_memory_lighting_features';
  info: {
    description: '\u5185\u5B58\u6761RGB\u706F\u6548\u529F\u80FD';
    displayName: 'Lighting Features';
    icon: 'lightbulb';
  };
  attributes: {
    additional_features: Schema.Attribute.JSON;
    addressable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    brightness_levels: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    color_options: Schema.Attribute.JSON;
    default_effects: Schema.Attribute.JSON;
    led_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    lighting_zones: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    rgb_type: Schema.Attribute.Enumeration<['RGB', 'ARGB', 'None']> &
      Schema.Attribute.Required;
    software_support: Schema.Attribute.JSON & Schema.Attribute.Required;
    sync_features: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface MemoryOverclockProfile extends Struct.ComponentSchema {
  collectionName: 'components_memory_overclock_profiles';
  info: {
    description: 'XMP/EXPO\u914D\u7F6E\u6587\u4EF6';
    displayName: 'Overclock Profile';
    icon: 'bolt';
  };
  attributes: {
    frequency: Schema.Attribute.Integer & Schema.Attribute.Required;
    profile_name: Schema.Attribute.String & Schema.Attribute.Required;
    profile_type: Schema.Attribute.Enumeration<['XMP', 'EXPO']> &
      Schema.Attribute.Required;
    timing: Schema.Attribute.Component<'memory.timing-specs', false> &
      Schema.Attribute.Required;
    voltage: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface MemoryPerformanceSpecs extends Struct.ComponentSchema {
  collectionName: 'components_memory_performance_specs';
  info: {
    description: '\u5185\u5B58\u6027\u80FD\u89C4\u683C';
    displayName: 'Performance Specifications';
    icon: 'tachometer-alt';
  };
  attributes: {
    base_frequency: Schema.Attribute.Integer & Schema.Attribute.Required;
    tested_frequency: Schema.Attribute.Integer & Schema.Attribute.Required;
    timing: Schema.Attribute.Component<'memory.timing-specs', false> &
      Schema.Attribute.Required;
    voltage: Schema.Attribute.Decimal & Schema.Attribute.Required;
    xmp_expo_profiles: Schema.Attribute.Component<
      'memory.overclock-profile',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface MemoryPhysicalSpecs extends Struct.ComponentSchema {
  collectionName: 'components_memory_physical_specs';
  info: {
    description: '\u5185\u5B58\u6761\u7269\u7406\u89C4\u683C';
    displayName: 'Physical Specifications';
    icon: 'ruler';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.Required;
    dimensions: Schema.Attribute.Component<'common.dimensions', false> &
      Schema.Attribute.Required;
    heatsink: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    heatsink_design: Schema.Attribute.Text;
    heatsink_material: Schema.Attribute.Enumeration<
      ['Aluminum', 'Copper', 'Hybrid', 'None']
    >;
    height: Schema.Attribute.Decimal & Schema.Attribute.Required;
    special_features: Schema.Attribute.JSON;
    weight: Schema.Attribute.Decimal;
  };
}

export interface MemoryPlatformSupport extends Struct.ComponentSchema {
  collectionName: 'components_memory_platform_supports';
  info: {
    description: '\u5904\u7406\u5668\u5E73\u53F0\u652F\u6301';
    displayName: 'Platform Support';
    icon: 'microchip';
  };
  attributes: {
    max_supported_frequency: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    notes: Schema.Attribute.Text;
    supported_chipsets: Schema.Attribute.JSON & Schema.Attribute.Required;
    supported_generations: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface MemoryTechnicalSpecs extends Struct.ComponentSchema {
  collectionName: 'components_memory_technical_specs';
  info: {
    description: '\u5185\u5B58\u6280\u672F\u89C4\u683C';
    displayName: 'Technical Specifications';
    icon: 'microchip';
  };
  attributes: {
    ecc_support: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    memory_chips: Schema.Attribute.Enumeration<
      [
        'Samsung_B_Die',
        'Samsung_A_Die',
        'Samsung_M_Die',
        'Micron_B_Die',
        'Micron_E_Die',
        'Hynix_CJR',
        'Hynix_DJR',
        'Hynix_MJR',
        'Other',
      ]
    >;
    on_die_ecc: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pmic: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rank_type: Schema.Attribute.Enumeration<
      ['Single_Rank', 'Dual_Rank', 'Quad_Rank']
    > &
      Schema.Attribute.Required;
  };
}

export interface MemoryTimingSpecs extends Struct.ComponentSchema {
  collectionName: 'components_memory_timing_specs';
  info: {
    description: '\u5185\u5B58\u65F6\u5E8F\u89C4\u683C';
    displayName: 'Timing Specifications';
    icon: 'clock';
  };
  attributes: {
    active_to_precharge: Schema.Attribute.Integer & Schema.Attribute.Required;
    cas_latency: Schema.Attribute.Integer & Schema.Attribute.Required;
    command_rate: Schema.Attribute.Enumeration<['1T', '2T']> &
      Schema.Attribute.Required;
    ras_precharge: Schema.Attribute.Integer & Schema.Attribute.Required;
    ras_to_cas: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface MonitorColorPerformance extends Struct.ComponentSchema {
  collectionName: 'components_monitor_color_performances';
  info: {
    description: '\u663E\u793A\u5668\u8272\u5F69\u8868\u73B0\u76F8\u5173\u89C4\u683C';
    displayName: '\u8272\u5F69\u8868\u73B0';
  };
  attributes: {
    colorBitDisplay: Schema.Attribute.String;
    colorDepth: Schema.Attribute.Enumeration<
      ['eightBit', 'tenBit', 'twelveBit']
    >;
    colorGamut: Schema.Attribute.JSON;
    colorTemperature: Schema.Attribute.String;
    deltaE: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    dimmingZones: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    factoryCalibrated: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    gammaSupport: Schema.Attribute.String;
    hdrStandard: Schema.Attribute.Enumeration<
      [
        'hdrTen',
        'hdrTenPlus',
        'hdrFourHundred',
        'hdrSixHundred',
        'hdrOneThousand',
        'hdrOneThousandPlus',
        'hdrTrueBlack',
        'dolbyVision',
        'hlg',
      ]
    >;
    hdrSupport: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    localDimming: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface MonitorConnectivity extends Struct.ComponentSchema {
  collectionName: 'components_monitor_connectivities';
  info: {
    description: '\u663E\u793A\u5668\u63A5\u53E3\u548C\u8FDE\u63A5\u89C4\u683C';
    displayName: '\u63A5\u53E3\u89C4\u683C';
  };
  attributes: {
    audioIn: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    audioOut: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    displayPorts: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    displayPortVersion: Schema.Attribute.Enumeration<
      ['dpOnePointTwo', 'dpOnePointFour', 'dpTwoPointZero', 'dpTwoPointOne']
    >;
    dviPorts: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    dviType: Schema.Attribute.Enumeration<['dviD', 'dviI', 'dviA']>;
    ethernetPort: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    hdmiPorts: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    hdmiVersion: Schema.Attribute.Enumeration<
      [
        'hdmiOnePointFour',
        'hdmiTwoPointZero',
        'hdmiTwoPointOne',
        'hdmiTwoPointOneA',
      ]
    >;
    thunderboltPorts: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    thunderboltVersion: Schema.Attribute.Enumeration<
      ['thunderboltThree', 'thunderboltFour']
    >;
    usbCPorts: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usbCPowerDelivery: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    usbCVersion: Schema.Attribute.Enumeration<
      ['usbThreePointOne', 'usbThreePointTwo', 'usbFour']
    >;
    usbHubPorts: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usbHubVersion: Schema.Attribute.Enumeration<
      [
        'usbTwoPointZero',
        'usbThreePointZero',
        'usbThreePointOne',
        'usbThreePointTwo',
      ]
    >;
    vgaPorts: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    wirelessConnectivity: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    wirelessTypes: Schema.Attribute.JSON;
  };
}

export interface MonitorDisplayPanel extends Struct.ComponentSchema {
  collectionName: 'components_monitor_display_panels';
  info: {
    description: '\u663E\u793A\u5668\u9762\u677F\u7684\u57FA\u672C\u89C4\u683C\u4FE1\u606F';
    displayName: '\u663E\u793A\u9762\u677F\u89C4\u683C';
  };
  attributes: {
    adaptiveSync: Schema.Attribute.Enumeration<
      [
        'none',
        'freesync',
        'freesyncPremium',
        'freesyncPremiumPro',
        'gsync',
        'gsyncCompatible',
        'gsyncUltimate',
        'vrr',
      ]
    >;
    aspectRatio: Schema.Attribute.Enumeration<
      [
        'fourThree',
        'sixteenNine',
        'sixteenTen',
        'twentyOneNine',
        'thirtyTwoNine',
        'other',
      ]
    >;
    backlightType: Schema.Attribute.Enumeration<
      ['wLed', 'rgbLed', 'miniLed', 'none']
    >;
    brightness: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    contrastRatio: Schema.Attribute.String;
    curvatureRadius: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    curvedScreen: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    customResolution: Schema.Attribute.String;
    flickerFree: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    lowBlueLight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mbrTechnology: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    panelType: Schema.Attribute.Enumeration<
      ['ips', 'va', 'tn', 'oled', 'qled', 'miniLed', 'microLed', 'pls', 'ahva']
    > &
      Schema.Attribute.Required;
    pixelDensity: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    pixelPitch: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    refreshRate: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    resolution: Schema.Attribute.Enumeration<
      [
        'hd',
        'fhd',
        'wuxga',
        'qhd',
        'wqhd',
        'uwqhd',
        'fourK',
        'fiveK',
        'eightK',
        'custom',
      ]
    > &
      Schema.Attribute.Required;
    responseTime: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    touchscreen: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    viewingAngle: Schema.Attribute.String;
  };
}

export interface MonitorFeatures extends Struct.ComponentSchema {
  collectionName: 'components_monitor_features';
  info: {
    description: '\u663E\u793A\u5668\u9644\u52A0\u529F\u80FD\u548C\u7279\u6027';
    displayName: '\u529F\u80FD\u7279\u6027';
  };
  attributes: {
    ambientLighting: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    ambientLightSensor: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    eyeCareTechnology: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    gameMode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    kvm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    microphone: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    multipleInputs: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    osd: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    osdLanguages: Schema.Attribute.JSON;
    picByPic: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    picInPic: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    picturePresets: Schema.Attribute.JSON;
    proximityDetection: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    rgbLighting: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    softwareSupport: Schema.Attribute.JSON;
    speakerPower: Schema.Attribute.String;
    speakers: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    webcam: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    webcamResolution: Schema.Attribute.String;
  };
}

export interface MonitorPhysicalSpecs extends Struct.ComponentSchema {
  collectionName: 'components_monitor_physical_specs';
  info: {
    description: '\u663E\u793A\u5668\u7269\u7406\u5C3A\u5BF8\u548C\u5916\u89C2\u89C4\u683C';
    displayName: '\u7269\u7406\u7279\u6027';
  };
  attributes: {
    bezelMeasurements: Schema.Attribute.JSON;
    bezelWidth: Schema.Attribute.Enumeration<
      ['ultraThin', 'thin', 'standard', 'thick']
    >;
    cableManagement: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    colorFinish: Schema.Attribute.String;
    controlType: Schema.Attribute.Enumeration<
      ['buttons', 'joystick', 'touchSensitive', 'remote']
    >;
    customVesaSize: Schema.Attribute.String;
    detachableStand: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    dimensions: Schema.Attribute.Component<'common.dimensions', false>;
    frontControls: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heightAdjustment: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    pivot: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    screenSize: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    standAdjustments: Schema.Attribute.JSON;
    swivel: Schema.Attribute.String;
    tiltRange: Schema.Attribute.String;
    vesa: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    vesaSize: Schema.Attribute.Enumeration<
      ['seventyFive', 'oneHundred', 'twoHundred', 'fourHundred', 'custom']
    >;
    weight: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface MonitorPowerSpecs extends Struct.ComponentSchema {
  collectionName: 'components_monitor_power_specs';
  info: {
    description: '\u663E\u793A\u5668\u7535\u6E90\u548C\u529F\u8017\u89C4\u683C';
    displayName: '\u7535\u6E90\u89C4\u683C';
  };
  attributes: {
    energyEfficiencyClass: Schema.Attribute.String;
    energyStar: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    frequencyRange: Schema.Attribute.String;
    maxPowerConsumption: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    powerConsumption: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    powerSavingModes: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    powerSupply: Schema.Attribute.Enumeration<['internal', 'external']>;
    powerSupplyRating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    standbyPower: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    voltageRange: Schema.Attribute.String;
  };
}

export interface NetworkBluetoothModule extends Struct.ComponentSchema {
  collectionName: 'components_network_bluetooth_modules';
  info: {
    description: '\u84DD\u7259\u6A21\u5757\u89C4\u683C';
    displayName: 'Bluetooth Module';
    icon: 'bluetooth';
  };
  attributes: {
    chip_model: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    low_energy: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    max_devices: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    version: Schema.Attribute.Enumeration<
      ['BT_5_3', 'BT_5_2', 'BT_5_1', 'BT_5_0', 'BT_4_2', 'None']
    > &
      Schema.Attribute.Required;
  };
}

export interface NetworkEthernetPort extends Struct.ComponentSchema {
  collectionName: 'components_network_ethernet_ports';
  info: {
    description: '\u4EE5\u592A\u7F51\u7AEF\u53E3\u89C4\u683C';
    displayName: 'Ethernet Port';
    icon: 'ethernet';
  };
  attributes: {
    chip_model: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    speed: Schema.Attribute.Enumeration<
      ['10_Gbps', '5_Gbps', '2.5_Gbps', '1_Gbps']
    > &
      Schema.Attribute.Required;
  };
}

export interface NetworkWifiModule extends Struct.ComponentSchema {
  collectionName: 'components_network_wifi_modules';
  info: {
    description: 'WiFi\u6A21\u5757\u89C4\u683C';
    displayName: 'WiFi Module';
    icon: 'wifi';
  };
  attributes: {
    antenna_included: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    bands: Schema.Attribute.Enumeration<['Dual_Band', 'Tri_Band', 'None']> &
      Schema.Attribute.Required;
    chip_model: Schema.Attribute.String;
    features: Schema.Attribute.JSON;
    max_speed: Schema.Attribute.String;
    version: Schema.Attribute.Enumeration<
      ['WiFi_6E', 'WiFi_6', 'WiFi_5', 'None']
    > &
      Schema.Attribute.Required;
  };
}

export interface PortsTypeCFeatures extends Struct.ComponentSchema {
  collectionName: 'components_ports_type_c_features';
  info: {
    description: 'Type-C\u63A5\u53E3\u7279\u6027';
    displayName: 'Type-C Features';
    icon: 'usb';
  };
  attributes: {
    display_port: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    max_power_output: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    power_delivery: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    thunderbolt: Schema.Attribute.Enumeration<
      ['None', 'Thunderbolt_3', 'Thunderbolt_4']
    > &
      Schema.Attribute.DefaultTo<'None'>;
  };
}

export interface PortsUsbPortGroup extends Struct.ComponentSchema {
  collectionName: 'components_ports_usb_port_groups';
  info: {
    description: 'USB\u7AEF\u53E3\u7EC4';
    displayName: 'USB Port Group';
    icon: 'plug';
  };
  attributes: {
    type_c_count: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usb_2_0: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usb_3_2_gen1: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usb_3_2_gen2: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usb_3_2_gen2x2: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    usb_4_0: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface PowerSupplyConnectorSpecs extends Struct.ComponentSchema {
  collectionName: 'components_power_supply_connector_specs';
  info: {
    description: '\u7535\u6E90\u63A5\u53E3\u89C4\u683C\u4FE1\u606F';
    displayName: '\u63A5\u53E3\u89C4\u683C';
  };
  attributes: {
    eps: Schema.Attribute.Enumeration<
      [
        'fourPlusFourPin',
        'eightPin',
        'fourPlusFourPinAndEightPin',
        'eightPlusFourPin',
        'eightPluseightPin',
      ]
    > &
      Schema.Attribute.Required;
    floppy: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    mainConnector: Schema.Attribute.Enumeration<
      ['twentyFourPin', 'twentyPlusFourPin', 'twentyPin']
    > &
      Schema.Attribute.Required;
    molex: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    pciE: Schema.Attribute.Enumeration<
      ['sixPlusTwoPin', 'eightPin', 'sixPin', 'sixteenPin']
    > &
      Schema.Attribute.Required;
    pciECount: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sata: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface PowerSupplyCoolingSpecs extends Struct.ComponentSchema {
  collectionName: 'components_power_supply_cooling_specs';
  info: {
    description: '\u7535\u6E90\u6563\u70ED\u89C4\u683C\u4FE1\u606F';
    displayName: '\u6563\u70ED\u89C4\u683C';
  };
  attributes: {
    fanlessMode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    fanSize: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    fanSpeed: Schema.Attribute.String;
    fanType: Schema.Attribute.Enumeration<
      [
        'hydraulicBearing',
        'ballBearing',
        'sleeveBearing',
        'fluidDynamicBearing',
        'magneticLevitation',
        'fanless',
      ]
    >;
    noiseLevel: Schema.Attribute.String;
    smartFan: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PowerSupplyEfficiencyCertification
  extends Struct.ComponentSchema {
  collectionName: 'components_power_supply_efficiency_certifications';
  info: {
    description: '\u7535\u6E90\u6548\u7387\u8BA4\u8BC1\u4FE1\u606F';
    displayName: '\u6548\u7387\u8BA4\u8BC1';
  };
  attributes: {
    efficiency100Load: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    efficiency20Load: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    efficiency50Load: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
    standard: Schema.Attribute.Enumeration<
      [
        'eightyPlusBronze',
        'eightyPlusSilver',
        'eightyPlusGold',
        'eightyPlusPlatinum',
        'eightyPlusTitanium',
        'none',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface PowerSupplyOutputSpecs extends Struct.ComponentSchema {
  collectionName: 'components_power_supply_output_specs';
  info: {
    description: '\u7535\u6E90\u8F93\u51FA\u89C4\u683C\u4FE1\u606F';
    displayName: '\u8F93\u51FA\u89C4\u683C';
  };
  attributes: {
    continuousPower: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    dcOutput: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    maxPower: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    minusTwelveV: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    plusFiveV: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    plusFiveVSB: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    plusThreePointThreeV: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    plusTwelveV: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    plusTwelveVRails: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface PowerSupplyPhysicalSpecs extends Struct.ComponentSchema {
  collectionName: 'components_power_supply_physical_specs';
  info: {
    description: '\u7535\u6E90\u7269\u7406\u89C4\u683C\u4FE1\u606F';
    displayName: '\u7269\u7406\u89C4\u683C';
  };
  attributes: {
    cableLength: Schema.Attribute.String;
    cableManagement: Schema.Attribute.Enumeration<
      ['fixed', 'semiModular', 'fullyModular']
    > &
      Schema.Attribute.Required;
    color: Schema.Attribute.String;
    formFactor: Schema.Attribute.Enumeration<
      ['atx', 'sfx', 'tfx', 'flexAtx', 'eatx', 'ps2', 'sffLtx']
    > &
      Schema.Attribute.Required;
    height: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    length: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    weight: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    width: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface PowerSupplyProtectionFeatures extends Struct.ComponentSchema {
  collectionName: 'components_power_supply_protection_features';
  info: {
    description: '\u7535\u6E90\u4FDD\u62A4\u529F\u80FD\u4FE1\u606F';
    displayName: '\u4FDD\u62A4\u529F\u80FD';
  };
  attributes: {
    nop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ocp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    opp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    otp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ovp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    scp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sip: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    uvp: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PowerPowerConnectors extends Struct.ComponentSchema {
  collectionName: 'components_power_power_connectors';
  info: {
    description: '\u4E3B\u677F\u7535\u6E90\u63A5\u53E3\u914D\u7F6E';
    displayName: 'Power Connectors';
    icon: 'plug';
  };
  attributes: {
    additional_power: Schema.Attribute.String;
    cpu_power: Schema.Attribute.Enumeration<
      ['8_PIN', '8_4_PIN', '8_8_PIN', '8_8_4_PIN']
    > &
      Schema.Attribute.Required;
    main_power: Schema.Attribute.Enumeration<['24_PIN', '20_PIN']> &
      Schema.Attribute.Required;
    pcie_power: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SlotsPcieSlot extends Struct.ComponentSchema {
  collectionName: 'components_slots_pcie_slots';
  info: {
    description: 'PCIe\u63D2\u69FD\u8BE6\u7EC6\u89C4\u683C';
    displayName: 'PCIe Slot';
    icon: 'expand';
  };
  attributes: {
    generation: Schema.Attribute.Enumeration<
      ['PCIe_3_0', 'PCIe_4_0', 'PCIe_5_0']
    > &
      Schema.Attribute.Required;
    lanes: Schema.Attribute.Enumeration<['x1', 'x4', 'x8', 'x16']> &
      Schema.Attribute.Required;
    physical_size: Schema.Attribute.Enumeration<['x16', 'x8', 'x4', 'x1']> &
      Schema.Attribute.Required;
    reinforced: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    shared_bandwidth: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SpecsBiosFeatures extends Struct.ComponentSchema {
  collectionName: 'components_specs_bios_features';
  info: {
    description: '\u4E3B\u677FBIOS\u529F\u80FD\u914D\u7F6E';
    displayName: 'BIOS Features';
    icon: 'microchip';
  };
  attributes: {
    bios_type: Schema.Attribute.Enumeration<['UEFI', 'UEFI_LEGACY']> &
      Schema.Attribute.Required;
    features: Schema.Attribute.Component<'bios.feature-set', false> &
      Schema.Attribute.Required;
    flash_size: Schema.Attribute.String & Schema.Attribute.Required;
    update_methods: Schema.Attribute.Component<'bios.update-methods', false> &
      Schema.Attribute.Required;
  };
}

export interface SpecsExpansionSlots extends Struct.ComponentSchema {
  collectionName: 'components_specs_expansion_slots';
  info: {
    description: '\u4E3B\u677F\u6269\u5C55\u63D2\u69FD\u914D\u7F6E';
    displayName: 'Expansion Slots';
    icon: 'plug';
  };
  attributes: {
    additional_info: Schema.Attribute.Text;
    multi_gpu_support: Schema.Attribute.Enumeration<
      ['NVIDIA_SLI', 'AMD_CrossFireX', 'Both', 'None']
    >;
    pcie_x1_slots: Schema.Attribute.Component<'slots.pcie-slot', true>;
    pcie_x16_slots: Schema.Attribute.Component<'slots.pcie-slot', true> &
      Schema.Attribute.Required;
    pcie_x4_slots: Schema.Attribute.Component<'slots.pcie-slot', true>;
    pcie_x8_slots: Schema.Attribute.Component<'slots.pcie-slot', true>;
  };
}

export interface SpecsMemorySpecification extends Struct.ComponentSchema {
  collectionName: 'components_specs_memory_specifications';
  info: {
    description: '\u4E3B\u677F\u5185\u5B58\u89C4\u683C\u914D\u7F6E';
    displayName: 'Memory Specification';
    icon: 'memory';
  };
  attributes: {
    ecc_support: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    maxMemorySize: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 1024;
          min: 1;
        },
        number
      >;
    maxMemorySpeed: Schema.Attribute.Enumeration<
      [
        'DDR4_2133',
        'DDR4_2400',
        'DDR4_2666',
        'DDR4_2933',
        'DDR4_3200',
        'DDR4_3600',
        'DDR4_4000',
        'DDR4_4400',
        'DDR5_4800',
        'DDR5_5200',
        'DDR5_5600',
        'DDR5_6000',
        'DDR5_6400',
        'DDR5_7200',
        'DDR5_7800',
      ]
    > &
      Schema.Attribute.Required;
    memoryChannels: Schema.Attribute.Enumeration<
      ['Dual_Channel', 'Quad_Channel']
    > &
      Schema.Attribute.Required;
    memorySlots: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
          min: 1;
        },
        number
      >;
    memoryType: Schema.Attribute.Enumeration<['DDR4', 'DDR5']> &
      Schema.Attribute.Required;
    xmp_expo_support: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SpecsNetworkFeatures extends Struct.ComponentSchema {
  collectionName: 'components_specs_network_features';
  info: {
    description: '\u4E3B\u677F\u7F51\u7EDC\u529F\u80FD\u914D\u7F6E';
    displayName: 'Network Features';
    icon: 'wifi';
  };
  attributes: {
    bluetooth: Schema.Attribute.Component<'network.bluetooth-module', false>;
    lan_ports: Schema.Attribute.Component<'network.ethernet-port', true> &
      Schema.Attribute.Required;
    wifi: Schema.Attribute.Component<'network.wifi-module', false>;
  };
}

export interface SpecsPowerDesign extends Struct.ComponentSchema {
  collectionName: 'components_specs_power_designs';
  info: {
    description: '\u4E3B\u677F\u4F9B\u7535\u8BBE\u8BA1\u89C4\u683C';
    displayName: 'Power Design';
    icon: 'bolt';
  };
  attributes: {
    additional_features: Schema.Attribute.JSON;
    cpu_power_phases: Schema.Attribute.String & Schema.Attribute.Required;
    digital_pwm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    memory_phases: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    power_connectors: Schema.Attribute.Component<
      'power.power-connectors',
      false
    > &
      Schema.Attribute.Required;
    power_stages: Schema.Attribute.String;
    soc_phases: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    vcore_phases: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    vrm_cooling: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SpecsRgbHeaders extends Struct.ComponentSchema {
  collectionName: 'components_specs_rgb_headers';
  info: {
    description: '\u4E3B\u677FRGB/ARGB\u63A5\u53E3\u914D\u7F6E';
    displayName: 'RGB Headers';
    icon: 'lightbulb';
  };
  attributes: {
    additional_features: Schema.Attribute.JSON;
    argb_headers: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    max_power_per_port: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    onboard_led: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rgb_headers: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    rgb_software: Schema.Attribute.Enumeration<
      [
        'ASUS_Aura_Sync',
        'MSI_Mystic_Light',
        'Gigabyte_RGB_Fusion',
        'ASRock_Polychrome_Sync',
        'Other',
      ]
    >;
    sync_features: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SpecsStorageInterfaces extends Struct.ComponentSchema {
  collectionName: 'components_specs_storage_interfaces';
  info: {
    description: '\u4E3B\u677F\u5B58\u50A8\u63A5\u53E3\u914D\u7F6E';
    displayName: 'Storage Interfaces';
    icon: 'database';
  };
  attributes: {
    m2_slots: Schema.Attribute.Component<'storage.m2-slot', true> &
      Schema.Attribute.Required;
    sata_ports: Schema.Attribute.Component<'storage.sata-port', false> &
      Schema.Attribute.Required;
  };
}

export interface SpecsUsbPorts extends Struct.ComponentSchema {
  collectionName: 'components_specs_usb_ports';
  info: {
    description: '\u4E3B\u677FUSB\u63A5\u53E3\u914D\u7F6E';
    displayName: 'USB Ports';
    icon: 'usb';
  };
  attributes: {
    internal_headers: Schema.Attribute.Component<
      'ports.usb-port-group',
      false
    > &
      Schema.Attribute.Required;
    rear_ports: Schema.Attribute.Component<'ports.usb-port-group', false> &
      Schema.Attribute.Required;
    type_c_features: Schema.Attribute.Component<'ports.type-c-features', false>;
  };
}

export interface StorageBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_storage_basic_infos';
  info: {
    description: '\u5B58\u50A8\u8BBE\u5907\u57FA\u672C\u4FE1\u606F';
    displayName: 'Basic Information';
    icon: 'info-circle';
  };
  attributes: {
    capacity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    controller: Schema.Attribute.String & Schema.Attribute.Required;
    dram_cache: Schema.Attribute.Component<'storage.cache-config', false> &
      Schema.Attribute.Required;
    form_factor: Schema.Attribute.Enumeration<
      ['M2_2280', 'M2_2260', 'M2_2242', 'M2_22110', 'SATA_2.5', 'SATA_3.5']
    > &
      Schema.Attribute.Required;
    hmb_support: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    interface: Schema.Attribute.Enumeration<
      ['PCIe_4.0_x4', 'PCIe_3.0_x4', 'SATA_III', 'SATA_II']
    > &
      Schema.Attribute.Required;
    nand_type: Schema.Attribute.Enumeration<
      ['SLC', 'MLC', 'TLC', 'QLC', 'PLC', 'None']
    > &
      Schema.Attribute.Required;
  };
}

export interface StorageCacheConfig extends Struct.ComponentSchema {
  collectionName: 'components_storage_cache_configs';
  info: {
    description: '\u7F13\u5B58\u914D\u7F6E\u4FE1\u606F';
    displayName: 'Cache Configuration';
    icon: 'memory';
  };
  attributes: {
    cache_size: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    cache_type: Schema.Attribute.Enumeration<
      ['DDR4', 'DDR3', 'LPDDR4', 'None']
    > &
      Schema.Attribute.Required;
  };
}

export interface StorageM2Slot extends Struct.ComponentSchema {
  collectionName: 'components_storage_m2_slots';
  info: {
    description: 'M.2\u63A5\u53E3\u89C4\u683C';
    displayName: 'M.2 Slot';
    icon: 'memory';
  };
  attributes: {
    form_factor: Schema.Attribute.Enumeration<
      ['2280', '2260', '2242', '22110']
    > &
      Schema.Attribute.Required;
    heatsink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    interface_type: Schema.Attribute.Enumeration<
      ['PCIe_5_x4', 'PCIe_4_x4', 'PCIe_3_x4', 'SATA', 'PCIe_SATA']
    > &
      Schema.Attribute.Required;
    location: Schema.Attribute.String;
    max_speed: Schema.Attribute.String;
  };
}

export interface StoragePerformanceSpecs extends Struct.ComponentSchema {
  collectionName: 'components_storage_performance_specs';
  info: {
    description: '\u5B58\u50A8\u8BBE\u5907\u6027\u80FD\u89C4\u683C';
    displayName: 'Performance Specifications';
    icon: 'tachometer-alt';
  };
  attributes: {
    endurance: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    mtbf: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    power_consumption: Schema.Attribute.Component<
      'storage.power-specs',
      false
    > &
      Schema.Attribute.Required;
    random_read_iops: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    random_write_iops: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sequential_read: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    sequential_write: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface StoragePowerSpecs extends Struct.ComponentSchema {
  collectionName: 'components_storage_power_specs';
  info: {
    description: '\u529F\u8017\u89C4\u683C';
    displayName: 'Power Specifications';
    icon: 'bolt';
  };
  attributes: {
    average: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    idle: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    max: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface StorageSataPort extends Struct.ComponentSchema {
  collectionName: 'components_storage_sata_ports';
  info: {
    description: 'SATA\u63A5\u53E3\u914D\u7F6E';
    displayName: 'SATA Port';
    icon: 'hdd';
  };
  attributes: {
    port_multiplier: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    raid_support: Schema.Attribute.Enumeration<
      ['RAID_0', 'RAID_1', 'RAID_5', 'RAID_10', 'None']
    >;
    sata_3_ports: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bios.feature-set': BiosFeatureSet;
      'bios.update-methods': BiosUpdateMethods;
      'case.cooling-system': CaseCoolingSystem;
      'case.dimensions': CaseDimensions;
      'case.expansion-slots': CaseExpansionSlots;
      'case.io-ports': CaseIoPorts;
      'case.material-specs': CaseMaterialSpecs;
      'common.contact-info': CommonContactInfo;
      'common.dimensions': CommonDimensions;
      'common.warranty-info': CommonWarrantyInfo;
      'cooler.fan-specs': CoolerFanSpecs;
      'cooler.heatsink-specs': CoolerHeatsinkSpecs;
      'cooler.mounting-specs': CoolerMountingSpecs;
      'cooler.pump-specs': CoolerPumpSpecs;
      'cooler.radiator-specs': CoolerRadiatorSpecs;
      'cooler.thermal-performance': CoolerThermalPerformance;
      'gpu.core-specs': GpuCoreSpecs;
      'gpu.display-outputs': GpuDisplayOutputs;
      'gpu.features-support': GpuFeaturesSupport;
      'gpu.memory-specs': GpuMemorySpecs;
      'gpu.physical-specs': GpuPhysicalSpecs;
      'gpu.power-thermal': GpuPowerThermal;
      'memory.capacity-config': MemoryCapacityConfig;
      'memory.compatibility': MemoryCompatibility;
      'memory.lighting-features': MemoryLightingFeatures;
      'memory.overclock-profile': MemoryOverclockProfile;
      'memory.performance-specs': MemoryPerformanceSpecs;
      'memory.physical-specs': MemoryPhysicalSpecs;
      'memory.platform-support': MemoryPlatformSupport;
      'memory.technical-specs': MemoryTechnicalSpecs;
      'memory.timing-specs': MemoryTimingSpecs;
      'monitor.color-performance': MonitorColorPerformance;
      'monitor.connectivity': MonitorConnectivity;
      'monitor.display-panel': MonitorDisplayPanel;
      'monitor.features': MonitorFeatures;
      'monitor.physical-specs': MonitorPhysicalSpecs;
      'monitor.power-specs': MonitorPowerSpecs;
      'network.bluetooth-module': NetworkBluetoothModule;
      'network.ethernet-port': NetworkEthernetPort;
      'network.wifi-module': NetworkWifiModule;
      'ports.type-c-features': PortsTypeCFeatures;
      'ports.usb-port-group': PortsUsbPortGroup;
      'power-supply.connector-specs': PowerSupplyConnectorSpecs;
      'power-supply.cooling-specs': PowerSupplyCoolingSpecs;
      'power-supply.efficiency-certification': PowerSupplyEfficiencyCertification;
      'power-supply.output-specs': PowerSupplyOutputSpecs;
      'power-supply.physical-specs': PowerSupplyPhysicalSpecs;
      'power-supply.protection-features': PowerSupplyProtectionFeatures;
      'power.power-connectors': PowerPowerConnectors;
      'slots.pcie-slot': SlotsPcieSlot;
      'specs.bios-features': SpecsBiosFeatures;
      'specs.expansion-slots': SpecsExpansionSlots;
      'specs.memory-specification': SpecsMemorySpecification;
      'specs.network-features': SpecsNetworkFeatures;
      'specs.power-design': SpecsPowerDesign;
      'specs.rgb-headers': SpecsRgbHeaders;
      'specs.storage-interfaces': SpecsStorageInterfaces;
      'specs.usb-ports': SpecsUsbPorts;
      'storage.basic-info': StorageBasicInfo;
      'storage.cache-config': StorageCacheConfig;
      'storage.m2-slot': StorageM2Slot;
      'storage.performance-specs': StoragePerformanceSpecs;
      'storage.power-specs': StoragePowerSpecs;
      'storage.sata-port': StorageSataPort;
    }
  }
}
