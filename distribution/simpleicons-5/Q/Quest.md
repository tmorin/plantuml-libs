# Quest


```text
simpleicons-5/Q/Quest
```

```text
include('simpleicons-5/Q/Quest')
```



| Illustration | Quest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Quest.png) | ![illustration for Quest](../../simpleicons-5/Q/Quest.Local.png) |




## Quest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quest
include('simpleicons-5/Q/Quest')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quest
include('simpleicons-5/Q/Quest')

' renders the element
Quest('Quest', 'Quest', 'an optional tech label')
@enduml
```

