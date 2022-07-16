# Stackoverflow


```text
simpleicons-7/S/Stackoverflow
```

```text
include('simpleicons-7/S/Stackoverflow')
```



| Illustration | Stackoverflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Stackoverflow.png) | ![illustration for Stackoverflow](../../simpleicons-7/S/Stackoverflow.Local.png) |




## Stackoverflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Stackoverflow
include('simpleicons-7/S/Stackoverflow')

' renders the element
Stackoverflow('Stackoverflow', 'Stackoverflow', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Stackoverflow
include('simpleicons-7/S/Stackoverflow')

' renders the element
Stackoverflow('Stackoverflow', 'Stackoverflow', 'an optional tech label')
@enduml
```

