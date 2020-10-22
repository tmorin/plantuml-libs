# Io T Thing Thermostat

```text
aws-20200911/Resource/LoT/IoTThingThermostat
```

```text
include('aws-20200911/Resource/LoT/IoTThingThermostat')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingThermostat.png)|![](IoTThingThermostat.card.png)|![](IoTThingThermostat.element.png)|![](IoTThingThermostat.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingThermostat element
include('aws-20200911/Resource/LoT/IoTThingThermostat')
IoTThingThermostatCard('io_t_thing_thermostat', 'Io T Thing Thermostat', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingThermostat element
include('aws-20200911/Resource/LoT/IoTThingThermostat')
IoTThingThermostatCard('io_t_thing_thermostat', 'Io T Thing Thermostat', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingThermostat element
include('aws-20200911/Resource/LoT/IoTThingThermostat')
IoTThingThermostat('io_t_thing_thermostat', 'Io T Thing Thermostat', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingThermostat element
include('aws-20200911/Resource/LoT/IoTThingThermostat')
IoTThingThermostat('io_t_thing_thermostat', 'Io T Thing Thermostat', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingThermostat element
include('aws-20200911/Resource/LoT/IoTThingThermostat')
IoTThingThermostatGroup('io_t_thing_thermostat', 'Io T Thing Thermostat', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the IoTThingThermostat element
include('aws-20200911/Resource/LoT/IoTThingThermostat')
IoTThingThermostatGroup('io_t_thing_thermostat', 'Io T Thing Thermostat', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

