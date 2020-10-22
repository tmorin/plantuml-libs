# Service Commit

```text
azure-v2/Item/General/ServiceCommit
```

```text
include('azure-v2/Item/General/ServiceCommit')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceCommit.png)|![](ServiceCommit.card.png)|![](ServiceCommit.element.png)|![](ServiceCommit.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCommit element
include('azure-v2/Item/General/ServiceCommit')
ServiceCommitCard('service_commit', 'Service Commit', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCommit element
include('azure-v2/Item/General/ServiceCommit')
ServiceCommitCard('service_commit', 'Service Commit', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCommit element
include('azure-v2/Item/General/ServiceCommit')
ServiceCommit('service_commit', 'Service Commit', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCommit element
include('azure-v2/Item/General/ServiceCommit')
ServiceCommit('service_commit', 'Service Commit', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCommit element
include('azure-v2/Item/General/ServiceCommit')
ServiceCommitGroup('service_commit', 'Service Commit', 'an optional tech field'){
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCommit element
include('azure-v2/Item/General/ServiceCommit')
ServiceCommitGroup('service_commit', 'Service Commit', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

