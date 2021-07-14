# Veepee


```text
simpleicons-5/V/Veepee
```

```text
include('simpleicons-5/V/Veepee')
```



| Illustration | Veepee |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Veepee.png) | ![illustration for Veepee](../../simpleicons-5/V/Veepee.Local.png) |




## Veepee

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Veepee
include('simpleicons-5/V/Veepee')

' renders the element
Veepee('Veepee', 'Veepee', 'an optional tech label')
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

' loads the Item which embeds the element Veepee
include('simpleicons-5/V/Veepee')

' renders the element
Veepee('Veepee', 'Veepee', 'an optional tech label')
@enduml
```

