# Person


```text
eventstorming/Element/Person
```

```text
include('eventstorming/Element/Person')
```



| Person |
| :---: |
| ![illustration for Person](../../eventstorming/Element/Person.Local.png) |




## Person

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Person
include('eventstorming/Element/Person')

Person('Person', 'Person')
note as note
A person who executes a command through a view.
end note
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

' loads the Item which embeds the element Person
include('eventstorming/Element/Person')

Person('Person', 'Person')
note as note
A person who executes a command through a view.
end note
@enduml
```

