# Quest


```text
simpleicons-6/Q/Quest
```

```text
include('simpleicons-6/Q/Quest')
```



| Illustration | Quest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Quest.png) | ![illustration for Quest](../../simpleicons-6/Q/Quest.Local.png) |




## Quest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Quest
include('simpleicons-6/Q/Quest')

' renders the element
Quest('Quest', 'Quest', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Quest
include('simpleicons-6/Q/Quest')

' renders the element
Quest('Quest', 'Quest', 'an optional tech label')
@enduml
```

