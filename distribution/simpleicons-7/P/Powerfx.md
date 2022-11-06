# Powerfx


```text
simpleicons-7/P/Powerfx
```

```text
include('simpleicons-7/P/Powerfx')
```



| Illustration | Powerfx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Powerfx.png) | ![illustration for Powerfx](../../simpleicons-7/P/Powerfx.Local.png) |




## Powerfx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Powerfx
include('simpleicons-7/P/Powerfx')

' renders the element
Powerfx('Powerfx', 'Powerfx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Powerfx
include('simpleicons-7/P/Powerfx')

' renders the element
Powerfx('Powerfx', 'Powerfx', 'an optional tech label', 'an optional description')
@enduml
```

