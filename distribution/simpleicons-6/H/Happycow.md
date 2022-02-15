# Happycow


```text
simpleicons-6/H/Happycow
```

```text
include('simpleicons-6/H/Happycow')
```



| Illustration | Happycow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Happycow.png) | ![illustration for Happycow](../../simpleicons-6/H/Happycow.Local.png) |




## Happycow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Happycow
include('simpleicons-6/H/Happycow')

' renders the element
Happycow('Happycow', 'Happycow', 'an optional tech label')
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

' loads the Item which embeds the element Happycow
include('simpleicons-6/H/Happycow')

' renders the element
Happycow('Happycow', 'Happycow', 'an optional tech label')
@enduml
```

