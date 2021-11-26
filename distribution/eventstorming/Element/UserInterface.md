# UserInterface


```text
eventstorming/Element/UserInterface
```

```text
include('eventstorming/Element/UserInterface')
```



| UserInterface |
| :---: |
| ![illustration for UserInterface](../../eventstorming/Element/UserInterface.Local.png) |




## UserInterface

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element UserInterface
include('eventstorming/Element/UserInterface')

UserInterface('UserInterface') [
User Interface
--
A user interface helps users to interact with the system.
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

' loads the Item which embeds the element UserInterface
include('eventstorming/Element/UserInterface')

UserInterface('UserInterface') [
User Interface
--
A user interface helps users to interact with the system.
]
@enduml
```

