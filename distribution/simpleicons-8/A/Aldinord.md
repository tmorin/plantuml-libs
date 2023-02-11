# Aldinord


```text
simpleicons-8/A/Aldinord
```

```text
include('simpleicons-8/A/Aldinord')
```



| Illustration | Aldinord |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Aldinord.png) | ![illustration for Aldinord](../../simpleicons-8/A/Aldinord.Local.png) |




## Aldinord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Aldinord
include('simpleicons-8/A/Aldinord')

' renders the element
Aldinord('Aldinord', 'Aldinord', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aldinord
include('simpleicons-8/A/Aldinord')

' renders the element
Aldinord('Aldinord', 'Aldinord', 'an optional tech label', 'an optional description')
@enduml
```

