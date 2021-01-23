# Cloudarmor

```text
gcp/Item/Networking/Cloudarmor
```

```text
include('gcp/Item/Networking/Cloudarmor')
```

|icon|card|element|group|
|---|---|---|---|
|![](Cloudarmor.png)|![](Cloudarmor.card.png)|![](Cloudarmor.element.png)|![](Cloudarmor.group.png)|



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
' loads the Cloudarmor element
include('gcp/Item/Networking/Cloudarmor')
CloudarmorCard('cloudarmor', 'Cloudarmor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Cloudarmor element
include('gcp/Item/Networking/Cloudarmor')
CloudarmorCard('cloudarmor', 'Cloudarmor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Cloudarmor element
include('gcp/Item/Networking/Cloudarmor')
Cloudarmor('cloudarmor', 'Cloudarmor', 'an optional tech field')
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
' loads the Cloudarmor element
include('gcp/Item/Networking/Cloudarmor')
Cloudarmor('cloudarmor', 'Cloudarmor', 'an optional tech field')
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
' loads the Cloudarmor element
include('gcp/Item/Networking/Cloudarmor')
CloudarmorGroup('cloudarmor', 'Cloudarmor', 'an optional tech field'){
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
' loads the Cloudarmor element
include('gcp/Item/Networking/Cloudarmor')
CloudarmorGroup('cloudarmor', 'Cloudarmor', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

