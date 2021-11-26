# Trello


```text
fontawesome-5/Brands/Trello
```

```text
include('fontawesome-5/Brands/Trello')
```



| Illustration | Trello |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Trello.png) | ![illustration for Trello](../../fontawesome-5/Brands/Trello.Local.png) |




## Trello

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Trello
include('fontawesome-5/Brands/Trello')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Trello
include('fontawesome-5/Brands/Trello')

' renders the element
Trello('Trello', 'Trello', 'an optional tech label')
@enduml
```

