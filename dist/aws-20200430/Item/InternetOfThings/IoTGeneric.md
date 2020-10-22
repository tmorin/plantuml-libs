# Io T Generic

```text
aws-20200430/Item/InternetOfThings/IoTGeneric
```

```text
include('aws-20200430/Item/InternetOfThings/IoTGeneric')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTGeneric.png)|![](IoTGeneric.card.png)|![](IoTGeneric.element.png)|![](IoTGeneric.group.png)|



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
' loads the IoTGeneric element
include('aws-20200430/Item/InternetOfThings/IoTGeneric')
IoTGenericCard('io_t_generic', 'Io T Generic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTGeneric element
include('aws-20200430/Item/InternetOfThings/IoTGeneric')
IoTGenericCard('io_t_generic', 'Io T Generic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTGeneric element
include('aws-20200430/Item/InternetOfThings/IoTGeneric')
IoTGeneric('io_t_generic', 'Io T Generic', 'an optional tech field')
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
' loads the IoTGeneric element
include('aws-20200430/Item/InternetOfThings/IoTGeneric')
IoTGeneric('io_t_generic', 'Io T Generic', 'an optional tech field')
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
' loads the IoTGeneric element
include('aws-20200430/Item/InternetOfThings/IoTGeneric')
IoTGenericGroup('io_t_generic', 'Io T Generic', 'an optional tech field'){
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
' loads the IoTGeneric element
include('aws-20200430/Item/InternetOfThings/IoTGeneric')
IoTGenericGroup('io_t_generic', 'Io T Generic', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

