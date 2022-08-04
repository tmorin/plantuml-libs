# Lifx


```text
simpleicons-7/L/Lifx
```

```text
include('simpleicons-7/L/Lifx')
```



| Illustration | Lifx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Lifx.png) | ![illustration for Lifx](../../simpleicons-7/L/Lifx.Local.png) |




## Lifx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lifx
include('simpleicons-7/L/Lifx')

' renders the element
Lifx('Lifx', 'Lifx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lifx
include('simpleicons-7/L/Lifx')

' renders the element
Lifx('Lifx', 'Lifx', 'an optional tech label', 'an optional description')
@enduml
```

