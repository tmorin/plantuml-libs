# Cssmodules


```text
simpleicons-7/C/Cssmodules
```

```text
include('simpleicons-7/C/Cssmodules')
```



| Illustration | Cssmodules |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cssmodules.png) | ![illustration for Cssmodules](../../simpleicons-7/C/Cssmodules.Local.png) |




## Cssmodules

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cssmodules
include('simpleicons-7/C/Cssmodules')

' renders the element
Cssmodules('Cssmodules', 'Cssmodules', 'an optional tech label')
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

' loads the Item which embeds the element Cssmodules
include('simpleicons-7/C/Cssmodules')

' renders the element
Cssmodules('Cssmodules', 'Cssmodules', 'an optional tech label')
@enduml
```

