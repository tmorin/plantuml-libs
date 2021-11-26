# Trello


```text
simpleicons-5/T/Trello
```

```text
include('simpleicons-5/T/Trello')
```



| Illustration | Trello |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Trello.png) | ![illustration for Trello](../../simpleicons-5/T/Trello.Local.png) |




## Trello

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Trello
include('simpleicons-5/T/Trello')

' renders the element
Trello('Trello', 'Trello', 'an optional tech label')
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

' loads the Item which embeds the element Trello
include('simpleicons-5/T/Trello')

' renders the element
Trello('Trello', 'Trello', 'an optional tech label')
@enduml
```

