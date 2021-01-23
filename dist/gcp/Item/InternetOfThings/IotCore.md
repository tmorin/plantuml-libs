# Iot Core

```text
gcp/Item/InternetOfThings/IotCore
```

```text
include('gcp/Item/InternetOfThings/IotCore')
```

|icon|card|element|group|
|---|---|---|---|
|![](IotCore.png)|![](IotCore.card.png)|![](IotCore.element.png)|![](IotCore.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the IotCore element
include('gcp/Item/InternetOfThings/IotCore')
IotCoreCard('iot_core', 'Iot Core', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the IotCore element
include('gcp/Item/InternetOfThings/IotCore')
IotCoreCard('iot_core', 'Iot Core', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the IotCore element
include('gcp/Item/InternetOfThings/IotCore')
IotCore('iot_core', 'Iot Core', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the IotCore element
include('gcp/Item/InternetOfThings/IotCore')
IotCore('iot_core', 'Iot Core', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the IotCore element
include('gcp/Item/InternetOfThings/IotCore')
IotCoreGroup('iot_core', 'Iot Core', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the IotCore element
include('gcp/Item/InternetOfThings/IotCore')
IotCoreGroup('iot_core', 'Iot Core', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

