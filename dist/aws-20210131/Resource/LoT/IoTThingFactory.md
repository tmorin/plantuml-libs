# Io T Thing Factory

```text
aws-20210131/Resource/LoT/IoTThingFactory
```

```text
include('aws-20210131/Resource/LoT/IoTThingFactory')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTThingFactory.png)|![](IoTThingFactory.card.png)|![](IoTThingFactory.element.png)|![](IoTThingFactory.group.png)|



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
' loads the IoTThingFactory element
include('aws-20210131/Resource/LoT/IoTThingFactory')
IoTThingFactoryCard('io_t_thing_factory', 'Io T Thing Factory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingFactory element
include('aws-20210131/Resource/LoT/IoTThingFactory')
IoTThingFactoryCard('io_t_thing_factory', 'Io T Thing Factory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTThingFactory element
include('aws-20210131/Resource/LoT/IoTThingFactory')
IoTThingFactory('io_t_thing_factory', 'Io T Thing Factory', 'an optional tech field')
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
' loads the IoTThingFactory element
include('aws-20210131/Resource/LoT/IoTThingFactory')
IoTThingFactory('io_t_thing_factory', 'Io T Thing Factory', 'an optional tech field')
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
' loads the IoTThingFactory element
include('aws-20210131/Resource/LoT/IoTThingFactory')
IoTThingFactoryGroup('io_t_thing_factory', 'Io T Thing Factory', 'an optional tech field'){
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
' loads the IoTThingFactory element
include('aws-20210131/Resource/LoT/IoTThingFactory')
IoTThingFactoryGroup('io_t_thing_factory', 'Io T Thing Factory', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

