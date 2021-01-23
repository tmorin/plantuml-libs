# Cloud Gpu

```text
gcp/Item/Compute/CloudGpu
```

```text
include('gcp/Item/Compute/CloudGpu')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudGpu.png)|![](CloudGpu.card.png)|![](CloudGpu.element.png)|![](CloudGpu.group.png)|



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
' loads the CloudGpu element
include('gcp/Item/Compute/CloudGpu')
CloudGpuCard('cloud_gpu', 'Cloud Gpu', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudGpu element
include('gcp/Item/Compute/CloudGpu')
CloudGpuCard('cloud_gpu', 'Cloud Gpu', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudGpu element
include('gcp/Item/Compute/CloudGpu')
CloudGpu('cloud_gpu', 'Cloud Gpu', 'an optional tech field')
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
' loads the CloudGpu element
include('gcp/Item/Compute/CloudGpu')
CloudGpu('cloud_gpu', 'Cloud Gpu', 'an optional tech field')
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
' loads the CloudGpu element
include('gcp/Item/Compute/CloudGpu')
CloudGpuGroup('cloud_gpu', 'Cloud Gpu', 'an optional tech field'){
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
' loads the CloudGpu element
include('gcp/Item/Compute/CloudGpu')
CloudGpuGroup('cloud_gpu', 'Cloud Gpu', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

