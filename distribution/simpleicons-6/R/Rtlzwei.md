# Rtlzwei


```text
simpleicons-6/R/Rtlzwei
```

```text
include('simpleicons-6/R/Rtlzwei')
```



| Illustration | Rtlzwei |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rtlzwei.png) | ![illustration for Rtlzwei](../../simpleicons-6/R/Rtlzwei.Local.png) |




## Rtlzwei

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rtlzwei
include('simpleicons-6/R/Rtlzwei')

' renders the element
Rtlzwei('Rtlzwei', 'Rtlzwei', 'an optional tech label')
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

' loads the Item which embeds the element Rtlzwei
include('simpleicons-6/R/Rtlzwei')

' renders the element
Rtlzwei('Rtlzwei', 'Rtlzwei', 'an optional tech label')
@enduml
```

