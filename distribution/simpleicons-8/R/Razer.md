# Razer


```text
simpleicons-8/R/Razer
```

```text
include('simpleicons-8/R/Razer')
```



| Illustration | Razer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Razer.png) | ![illustration for Razer](../../simpleicons-8/R/Razer.Local.png) |




## Razer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Razer
include('simpleicons-8/R/Razer')

' renders the element
Razer('Razer', 'Razer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Razer
include('simpleicons-8/R/Razer')

' renders the element
Razer('Razer', 'Razer', 'an optional tech label', 'an optional description')
@enduml
```

