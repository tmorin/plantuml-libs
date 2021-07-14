# Quantconnect


```text
simpleicons-5/Q/Quantconnect
```

```text
include('simpleicons-5/Q/Quantconnect')
```



| Illustration | Quantconnect |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Q/Quantconnect.png) | ![illustration for Quantconnect](../../simpleicons-5/Q/Quantconnect.Local.png) |




## Quantconnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quantconnect
include('simpleicons-5/Q/Quantconnect')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Quantconnect
include('simpleicons-5/Q/Quantconnect')

' renders the element
Quantconnect('Quantconnect', 'Quantconnect', 'an optional tech label')
@enduml
```

