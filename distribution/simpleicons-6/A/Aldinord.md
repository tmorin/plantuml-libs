# Aldinord


```text
simpleicons-6/A/Aldinord
```

```text
include('simpleicons-6/A/Aldinord')
```



| Illustration | Aldinord |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aldinord.png) | ![illustration for Aldinord](../../simpleicons-6/A/Aldinord.Local.png) |




## Aldinord

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aldinord
include('simpleicons-6/A/Aldinord')

' renders the element
Aldinord('Aldinord', 'Aldinord', 'an optional tech label')
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

' loads the Item which embeds the element Aldinord
include('simpleicons-6/A/Aldinord')

' renders the element
Aldinord('Aldinord', 'Aldinord', 'an optional tech label')
@enduml
```

