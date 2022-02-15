# Aeromexico


```text
simpleicons-6/A/Aeromexico
```

```text
include('simpleicons-6/A/Aeromexico')
```



| Illustration | Aeromexico |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Aeromexico.png) | ![illustration for Aeromexico](../../simpleicons-6/A/Aeromexico.Local.png) |




## Aeromexico

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Aeromexico
include('simpleicons-6/A/Aeromexico')

' renders the element
Aeromexico('Aeromexico', 'Aeromexico', 'an optional tech label')
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

' loads the Item which embeds the element Aeromexico
include('simpleicons-6/A/Aeromexico')

' renders the element
Aeromexico('Aeromexico', 'Aeromexico', 'an optional tech label')
@enduml
```

