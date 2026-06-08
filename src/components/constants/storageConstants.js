export const LOCALSTORE_SELECTED_IOT_DEVICES =
  'LOCALSTORE_SELECTED_IOT_DEVICES';

export const DEFAULT_IOT_DEVICES = [
  {
    id: 1,
    title: 'Solar Panel Unit A',
    type: 'solar panel',
    description:
      'Primary rooftop photovoltaic module that monitors sunlight conversion, panel voltage, temperature, and real-time solar energy output.',
    efficiency: 94,
    energy: 128.6,
    energyProduced: 128.6,
    image: '/images/solar-panel.jpg',
    selected: 0,
  },
  {
    id: 2,
    title: 'Solar Panel Unit B',
    type: 'solar panel',
    description:
      'Secondary solar panel unit connected to the IoT gateway for monitoring inverter response, sunlight intensity, and production stability.',
    efficiency: 89,
    energy: 112.4,
    energyProduced: 112.4,
    image: '/images/solar-panel.jpg',
    selected: 0,
  },
  {
    id: 3,
    title: 'Battery Storage System',
    type: 'battery',
    description:
      'Smart battery storage system that tracks charge level, discharge load, backup capacity, and energy availability for the microgrid.',
    efficiency: 86,
    energy: 74.2,
    energyProduced: 74.2,
    image: '/images/battery.jpg',
    selected: 0,
  },
  {
    id: 4,
    title: 'Smart Energy Meter',
    type: 'meter',
    description:
      'Digital metering device that collects electricity consumption data, exported power values, and total renewable system performance.',
    efficiency: 91,
    energy: 98.9,
    energyProduced: 98.9,
    image: '/images/meter.jpg',
    selected: 0,
  },
  {
    id: 5,
    title: 'Wind Turbine',
    type: 'wind turbine',
    description:
      'Hybrid renewable IoT unit that measures wind-assisted generation, rotor activity, and contribution to the total energy balance.',
    efficiency: 82,
    energy: 64.7,
    energyProduced: 64.7,
    image: '/images/wind-turbine.jpg',
    selected: 0,
  },
];

const cloneDefaultDevices = () => DEFAULT_IOT_DEVICES.map((device) => ({ ...device }));

export const loadDevicesFromStorage = () => {
  if (typeof window === 'undefined') {
    return cloneDefaultDevices();
  }

  const savedDevices = window.localStorage.getItem(
    LOCALSTORE_SELECTED_IOT_DEVICES
  );

  if (!savedDevices) {
    return cloneDefaultDevices();
  }

  try {
    const parsed = JSON.parse(savedDevices);

    if (!Array.isArray(parsed)) {
      return cloneDefaultDevices();
    }

    return DEFAULT_IOT_DEVICES.map((device) => {
      const stored = parsed.find((item) => item.id === device.id);

      if (!stored) {
        return { ...device };
      }

      const energyProduced = Number(
        stored.energyProduced ?? stored.energy ?? device.energyProduced
      );

      const selectedValue =
        stored.selected === undefined || stored.selected === null
          ? 1
          : Number(stored.selected) || 0;

      return {
        ...device,
        ...stored,
        energy: Number(stored.energy ?? energyProduced),
        energyProduced,
        selected: selectedValue,
      };
    });
  } catch {
    return cloneDefaultDevices();
  }
};

export const saveDevicesToStorage = (devices) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(
    LOCALSTORE_SELECTED_IOT_DEVICES,
    JSON.stringify(devices)
  );
};

export const incrementDeviceSelection = (devices, deviceId) =>
  devices.map((device) =>
    device.id === deviceId
      ? { ...device, selected: Number(device.selected || 0) + 1 }
      : device
  );

export const decrementDeviceSelection = (devices, deviceId) =>
  devices.map((device) =>
    device.id === deviceId
      ? { ...device, selected: Math.max(0, Number(device.selected || 0) - 1) }
      : device
  );

export const getSelectedDevices = (devices) =>
  devices.filter((device) => Number(device.selected || 0) > 0);