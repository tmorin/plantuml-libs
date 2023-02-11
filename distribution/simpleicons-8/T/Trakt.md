# Trakt


```text
simpleicons-8/T/Trakt
```

```text
include('simpleicons-8/T/Trakt')
```



| Illustration | Trakt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Trakt.png) | ![illustration for Trakt](../../simpleicons-8/T/Trakt.Local.png) |




## Trakt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Trakt
include('simpleicons-8/T/Trakt')

' renders the element
Trakt('Trakt', 'Trakt', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Trakt
include('simpleicons-8/T/Trakt')

' renders the element
Trakt('Trakt', 'Trakt', 'an optional tech label', 'an optional description')
@enduml
```

