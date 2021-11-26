# ReadModel


```text
eventstorming/Element/ReadModel
```

```text
include('eventstorming/Element/ReadModel')
```



| ReadModel |
| :---: |
| ![illustration for ReadModel](../../eventstorming/Element/ReadModel.Local.png) |




## ReadModel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element ReadModel
include('eventstorming/Element/ReadModel')

ReadModel('ReadModel') [
Read Model
--
A read model provides the information that needs to be available to take a given decision.
]
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element ReadModel
include('eventstorming/Element/ReadModel')

ReadModel('ReadModel') [
Read Model
--
A read model provides the information that needs to be available to take a given decision.
]
@enduml
```

