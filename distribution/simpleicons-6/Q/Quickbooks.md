# Quickbooks


```text
simpleicons-6/Q/Quickbooks
```

```text
include('simpleicons-6/Q/Quickbooks')
```



| Illustration | Quickbooks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Quickbooks.png) | ![illustration for Quickbooks](../../simpleicons-6/Q/Quickbooks.Local.png) |




## Quickbooks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Quickbooks
include('simpleicons-6/Q/Quickbooks')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Quickbooks
include('simpleicons-6/Q/Quickbooks')

' renders the element
Quickbooks('Quickbooks', 'Quickbooks', 'an optional tech label')
@enduml
```

