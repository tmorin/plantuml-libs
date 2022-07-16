# Kik


```text
simpleicons-7/K/Kik
```

```text
include('simpleicons-7/K/Kik')
```



| Illustration | Kik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/K/Kik.png) | ![illustration for Kik](../../simpleicons-7/K/Kik.Local.png) |




## Kik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Kik
include('simpleicons-7/K/Kik')

' renders the element
Kik('Kik', 'Kik', 'an optional tech label')
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

' loads the Item which embeds the element Kik
include('simpleicons-7/K/Kik')

' renders the element
Kik('Kik', 'Kik', 'an optional tech label')
@enduml
```

