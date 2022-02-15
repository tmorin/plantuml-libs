# Unitedairlines


```text
simpleicons-6/U/Unitedairlines
```

```text
include('simpleicons-6/U/Unitedairlines')
```



| Illustration | Unitedairlines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/U/Unitedairlines.png) | ![illustration for Unitedairlines](../../simpleicons-6/U/Unitedairlines.Local.png) |




## Unitedairlines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Unitedairlines
include('simpleicons-6/U/Unitedairlines')

' renders the element
Unitedairlines('Unitedairlines', 'Unitedairlines', 'an optional tech label')
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

' loads the Item which embeds the element Unitedairlines
include('simpleicons-6/U/Unitedairlines')

' renders the element
Unitedairlines('Unitedairlines', 'Unitedairlines', 'an optional tech label')
@enduml
```

