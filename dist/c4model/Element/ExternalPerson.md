# External Person

```text
c4model/Element/ExternalPerson
```

```text
include('c4model/Element/ExternalPerson')
```

|element|
|---|
|![](ExternalPerson.element.local.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the c4model bootstrap
include('c4model/bootstrap')
' loads the ExternalPerson element
include('c4model/Element/ExternalPerson')
ExternalPerson('external_person', 'External Person', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the c4model bootstrap
include('c4model/bootstrap')
' loads the ExternalPerson element
include('c4model/Element/ExternalPerson')
ExternalPerson('external_person', 'External Person', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```

