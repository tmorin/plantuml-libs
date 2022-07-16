# Spinrilla


```text
simpleicons-7/S/Spinrilla
```

```text
include('simpleicons-7/S/Spinrilla')
```



| Illustration | Spinrilla |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Spinrilla.png) | ![illustration for Spinrilla](../../simpleicons-7/S/Spinrilla.Local.png) |




## Spinrilla

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spinrilla
include('simpleicons-7/S/Spinrilla')

' renders the element
Spinrilla('Spinrilla', 'Spinrilla', 'an optional tech label')
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

' loads the Item which embeds the element Spinrilla
include('simpleicons-7/S/Spinrilla')

' renders the element
Spinrilla('Spinrilla', 'Spinrilla', 'an optional tech label')
@enduml
```

