# Quickbooks


```text
simpleicons-5/Q/Quickbooks
```

```text
include('simpleicons-5/Q/Quickbooks')
```



| Illustration | Quickbooks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Quickbooks.png) | ![illustration for Quickbooks](../../simpleicons-5/Q/Quickbooks.Local.png) |




## Quickbooks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quickbooks
include('simpleicons-5/Q/Quickbooks')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quickbooks
include('simpleicons-5/Q/Quickbooks')

' renders the element
Quickbooks('Quickbooks', 'Quickbooks', 'an optional tech label')
@enduml
```

