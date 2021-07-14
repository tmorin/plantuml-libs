# Tidal


```text
simpleicons-5/T/Tidal
```

```text
include('simpleicons-5/T/Tidal')
```



| Illustration | Tidal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tidal.png) | ![illustration for Tidal](../../simpleicons-5/T/Tidal.Local.png) |




## Tidal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tidal
include('simpleicons-5/T/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label')
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

' loads the Item which embeds the element Tidal
include('simpleicons-5/T/Tidal')

' renders the element
Tidal('Tidal', 'Tidal', 'an optional tech label')
@enduml
```

