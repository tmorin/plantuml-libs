# Quantconnect


```text
simpleicons-6/Q/Quantconnect
```

```text
include('simpleicons-6/Q/Quantconnect')
```



| Illustration | Quantconnect |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Q/Quantconnect.png) | ![illustration for Quantconnect](../../simpleicons-6/Q/Quantconnect.Local.png) |




## Quantconnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Quantconnect
include('simpleicons-6/Q/Quantconnect')

' renders the element
Quantconnect('Quantconnect', 'Quantconnect', 'an optional tech label')
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

' loads the Item which embeds the element Quantconnect
include('simpleicons-6/Q/Quantconnect')

' renders the element
Quantconnect('Quantconnect', 'Quantconnect', 'an optional tech label')
@enduml
```

