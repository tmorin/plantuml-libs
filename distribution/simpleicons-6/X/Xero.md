# Xero


```text
simpleicons-6/X/Xero
```

```text
include('simpleicons-6/X/Xero')
```



| Illustration | Xero |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/X/Xero.png) | ![illustration for Xero](../../simpleicons-6/X/Xero.Local.png) |




## Xero

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xero
include('simpleicons-6/X/Xero')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Xero
include('simpleicons-6/X/Xero')

' renders the element
Xero('Xero', 'Xero', 'an optional tech label')
@enduml
```

