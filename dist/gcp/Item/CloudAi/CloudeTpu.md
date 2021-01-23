# Cloude Tpu

```text
gcp/Item/CloudAi/CloudeTpu
```

```text
include('gcp/Item/CloudAi/CloudeTpu')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudeTpu.png)|![](CloudeTpu.card.png)|![](CloudeTpu.element.png)|![](CloudeTpu.group.png)|



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
' loads the CloudeTpu element
include('gcp/Item/CloudAi/CloudeTpu')
CloudeTpuCard('cloude_tpu', 'Cloude Tpu', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudeTpu element
include('gcp/Item/CloudAi/CloudeTpu')
CloudeTpuCard('cloude_tpu', 'Cloude Tpu', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudeTpu element
include('gcp/Item/CloudAi/CloudeTpu')
CloudeTpu('cloude_tpu', 'Cloude Tpu', 'an optional tech field')
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
' loads the CloudeTpu element
include('gcp/Item/CloudAi/CloudeTpu')
CloudeTpu('cloude_tpu', 'Cloude Tpu', 'an optional tech field')
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
' loads the CloudeTpu element
include('gcp/Item/CloudAi/CloudeTpu')
CloudeTpuGroup('cloude_tpu', 'Cloude Tpu', 'an optional tech field'){
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
' loads the CloudeTpu element
include('gcp/Item/CloudAi/CloudeTpu')
CloudeTpuGroup('cloude_tpu', 'Cloude Tpu', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

