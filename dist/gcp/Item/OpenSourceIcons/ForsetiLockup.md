# Forseti Lockup

```text
gcp/Item/OpenSourceIcons/ForsetiLockup
```

```text
include('gcp/Item/OpenSourceIcons/ForsetiLockup')
```

|icon|card|element|group|
|---|---|---|---|
|![](ForsetiLockup.png)|![](ForsetiLockup.card.png)|![](ForsetiLockup.element.png)|![](ForsetiLockup.group.png)|



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
' loads the ForsetiLockup element
include('gcp/Item/OpenSourceIcons/ForsetiLockup')
ForsetiLockupCard('forseti_lockup', 'Forseti Lockup', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ForsetiLockup element
include('gcp/Item/OpenSourceIcons/ForsetiLockup')
ForsetiLockupCard('forseti_lockup', 'Forseti Lockup', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ForsetiLockup element
include('gcp/Item/OpenSourceIcons/ForsetiLockup')
ForsetiLockup('forseti_lockup', 'Forseti Lockup', 'an optional tech field')
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
' loads the ForsetiLockup element
include('gcp/Item/OpenSourceIcons/ForsetiLockup')
ForsetiLockup('forseti_lockup', 'Forseti Lockup', 'an optional tech field')
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
' loads the ForsetiLockup element
include('gcp/Item/OpenSourceIcons/ForsetiLockup')
ForsetiLockupGroup('forseti_lockup', 'Forseti Lockup', 'an optional tech field'){
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
' loads the ForsetiLockup element
include('gcp/Item/OpenSourceIcons/ForsetiLockup')
ForsetiLockupGroup('forseti_lockup', 'Forseti Lockup', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

