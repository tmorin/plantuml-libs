# Trakt


```text
simpleicons-6/T/Trakt
```

```text
include('simpleicons-6/T/Trakt')
```



| Illustration | Trakt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Trakt.png) | ![illustration for Trakt](../../simpleicons-6/T/Trakt.Local.png) |




## Trakt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Trakt
include('simpleicons-6/T/Trakt')

' renders the element
Trakt('Trakt', 'Trakt', 'an optional tech label')
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

' loads the Item which embeds the element Trakt
include('simpleicons-6/T/Trakt')

' renders the element
Trakt('Trakt', 'Trakt', 'an optional tech label')
@enduml
```

