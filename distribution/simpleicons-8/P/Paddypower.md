# Paddypower


```text
simpleicons-8/P/Paddypower
```

```text
include('simpleicons-8/P/Paddypower')
```



| Illustration | Paddypower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Paddypower.png) | ![illustration for Paddypower](../../simpleicons-8/P/Paddypower.Local.png) |




## Paddypower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Paddypower
include('simpleicons-8/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Paddypower
include('simpleicons-8/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label', 'an optional description')
@enduml
```

