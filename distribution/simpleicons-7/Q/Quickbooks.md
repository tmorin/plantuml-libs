# Quickbooks


```text
simpleicons-7/Q/Quickbooks
```

```text
include('simpleicons-7/Q/Quickbooks')
```



| Illustration | Quickbooks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Q/Quickbooks.png) | ![illustration for Quickbooks](../../simpleicons-7/Q/Quickbooks.Local.png) |




## Quickbooks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Quickbooks
include('simpleicons-7/Q/Quickbooks')

' renders the element
Quickbooks('Quickbooks', 'Quickbooks', 'an optional tech label')
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

' loads the Item which embeds the element Quickbooks
include('simpleicons-7/Q/Quickbooks')

' renders the element
Quickbooks('Quickbooks', 'Quickbooks', 'an optional tech label')
@enduml
```

