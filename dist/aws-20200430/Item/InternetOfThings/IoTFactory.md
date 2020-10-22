# Io T Factory

```text
aws-20200430/Item/InternetOfThings/IoTFactory
```

```text
include('aws-20200430/Item/InternetOfThings/IoTFactory')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTFactory.png)|![](IoTFactory.card.png)|![](IoTFactory.element.png)|![](IoTFactory.group.png)|



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
' loads the IoTFactory element
include('aws-20200430/Item/InternetOfThings/IoTFactory')
IoTFactoryCard('io_t_factory', 'Io T Factory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTFactory element
include('aws-20200430/Item/InternetOfThings/IoTFactory')
IoTFactoryCard('io_t_factory', 'Io T Factory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTFactory element
include('aws-20200430/Item/InternetOfThings/IoTFactory')
IoTFactory('io_t_factory', 'Io T Factory', 'an optional tech field')
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
' loads the IoTFactory element
include('aws-20200430/Item/InternetOfThings/IoTFactory')
IoTFactory('io_t_factory', 'Io T Factory', 'an optional tech field')
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
' loads the IoTFactory element
include('aws-20200430/Item/InternetOfThings/IoTFactory')
IoTFactoryGroup('io_t_factory', 'Io T Factory', 'an optional tech field'){
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
' loads the IoTFactory element
include('aws-20200430/Item/InternetOfThings/IoTFactory')
IoTFactoryGroup('io_t_factory', 'Io T Factory', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

