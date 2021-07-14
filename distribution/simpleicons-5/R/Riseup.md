# Riseup


```text
simpleicons-5/R/Riseup
```

```text
include('simpleicons-5/R/Riseup')
```



| Illustration | Riseup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Riseup.png) | ![illustration for Riseup](../../simpleicons-5/R/Riseup.Local.png) |




## Riseup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Riseup
include('simpleicons-5/R/Riseup')

' renders the element
Riseup('Riseup', 'Riseup', 'an optional tech label')
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

' loads the Item which embeds the element Riseup
include('simpleicons-5/R/Riseup')

' renders the element
Riseup('Riseup', 'Riseup', 'an optional tech label')
@enduml
```

