# Paddypower


```text
simpleicons-5/P/Paddypower
```

```text
include('simpleicons-5/P/Paddypower')
```



| Illustration | Paddypower |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Paddypower.png) | ![illustration for Paddypower](../../simpleicons-5/P/Paddypower.Local.png) |




## Paddypower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Paddypower
include('simpleicons-5/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label')
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

' loads the Item which embeds the element Paddypower
include('simpleicons-5/P/Paddypower')

' renders the element
Paddypower('Paddypower', 'Paddypower', 'an optional tech label')
@enduml
```

