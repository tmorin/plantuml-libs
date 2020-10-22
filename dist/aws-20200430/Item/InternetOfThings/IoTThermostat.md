# Io T Thermostat

```text
aws-20200430/Item/InternetOfThings/IoTThermostat
```

```text
include('aws-20200430/Item/InternetOfThings/IoTThermostat')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThermostat.png)|![](IoTThermostat.card.png)|![](IoTThermostat.element.png)|![](IoTThermostat.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTThermostat element
include('aws-20200430/Item/InternetOfThings/IoTThermostat')
IoTThermostatCard('io_t_thermostat', 'Io T Thermostat', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTThermostat element
include('aws-20200430/Item/InternetOfThings/IoTThermostat')
IoTThermostatCard('io_t_thermostat', 'Io T Thermostat', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTThermostat element
include('aws-20200430/Item/InternetOfThings/IoTThermostat')
IoTThermostat('io_t_thermostat', 'Io T Thermostat', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTThermostat element
include('aws-20200430/Item/InternetOfThings/IoTThermostat')
IoTThermostat('io_t_thermostat', 'Io T Thermostat', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTThermostat element
include('aws-20200430/Item/InternetOfThings/IoTThermostat')
IoTThermostatGroup('io_t_thermostat', 'Io T Thermostat', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the IoTThermostat element
include('aws-20200430/Item/InternetOfThings/IoTThermostat')
IoTThermostatGroup('io_t_thermostat', 'Io T Thermostat', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

