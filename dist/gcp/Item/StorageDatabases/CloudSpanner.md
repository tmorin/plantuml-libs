# Cloud Spanner

```text
gcp/Item/StorageDatabases/CloudSpanner
```

```text
include('gcp/Item/StorageDatabases/CloudSpanner')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudSpanner.png)|![](CloudSpanner.card.png)|![](CloudSpanner.element.png)|![](CloudSpanner.group.png)|



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
' loads the CloudSpanner element
include('gcp/Item/StorageDatabases/CloudSpanner')
CloudSpannerCard('cloud_spanner', 'Cloud Spanner', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudSpanner element
include('gcp/Item/StorageDatabases/CloudSpanner')
CloudSpannerCard('cloud_spanner', 'Cloud Spanner', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudSpanner element
include('gcp/Item/StorageDatabases/CloudSpanner')
CloudSpanner('cloud_spanner', 'Cloud Spanner', 'an optional tech field')
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
' loads the CloudSpanner element
include('gcp/Item/StorageDatabases/CloudSpanner')
CloudSpanner('cloud_spanner', 'Cloud Spanner', 'an optional tech field')
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
' loads the CloudSpanner element
include('gcp/Item/StorageDatabases/CloudSpanner')
CloudSpannerGroup('cloud_spanner', 'Cloud Spanner', 'an optional tech field'){
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
' loads the CloudSpanner element
include('gcp/Item/StorageDatabases/CloudSpanner')
CloudSpannerGroup('cloud_spanner', 'Cloud Spanner', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

