# Playstationvita


```text
simpleicons-5/P/Playstationvita
```

```text
include('simpleicons-5/P/Playstationvita')
```



| Illustration | Playstationvita |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Playstationvita.png) | ![illustration for Playstationvita](../../simpleicons-5/P/Playstationvita.Local.png) |




## Playstationvita

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Playstationvita
include('simpleicons-5/P/Playstationvita')

' renders the element
Playstationvita('Playstationvita', 'Playstationvita', 'an optional tech label')
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

' loads the Item which embeds the element Playstationvita
include('simpleicons-5/P/Playstationvita')

' renders the element
Playstationvita('Playstationvita', 'Playstationvita', 'an optional tech label')
@enduml
```

