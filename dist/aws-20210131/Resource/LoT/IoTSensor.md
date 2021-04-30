# Io T Sensor

```text
aws-20210131/Resource/LoT/IoTSensor
```

```text
include('aws-20210131/Resource/LoT/IoTSensor')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTSensor.png)|![](IoTSensor.card.png)|![](IoTSensor.element.png)|![](IoTSensor.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTSensor element
include('aws-20210131/Resource/LoT/IoTSensor')
IoTSensorCard('io_t_sensor', 'Io T Sensor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTSensor element
include('aws-20210131/Resource/LoT/IoTSensor')
IoTSensorCard('io_t_sensor', 'Io T Sensor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTSensor element
include('aws-20210131/Resource/LoT/IoTSensor')
IoTSensor('io_t_sensor', 'Io T Sensor', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTSensor element
include('aws-20210131/Resource/LoT/IoTSensor')
IoTSensor('io_t_sensor', 'Io T Sensor', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTSensor element
include('aws-20210131/Resource/LoT/IoTSensor')
IoTSensorGroup('io_t_sensor', 'Io T Sensor', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the IoTSensor element
include('aws-20210131/Resource/LoT/IoTSensor')
IoTSensorGroup('io_t_sensor', 'Io T Sensor', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

