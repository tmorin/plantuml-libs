# Xero


```text
simpleicons-5/X/Xero
```

```text
include('simpleicons-5/X/Xero')
```



| Illustration | Xero |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/X/Xero.png) | ![illustration for Xero](../../simpleicons-5/X/Xero.Local.png) |




## Xero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Xero
include('simpleicons-5/X/Xero')

' renders the element
Xero('Xero', 'Xero', 'an optional tech label')
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

' loads the Item which embeds the element Xero
include('simpleicons-5/X/Xero')

' renders the element
Xero('Xero', 'Xero', 'an optional tech label')
@enduml
```

