# Untangle


```text
simpleicons-8/U/Untangle
```

```text
include('simpleicons-8/U/Untangle')
```



| Illustration | Untangle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Untangle.png) | ![illustration for Untangle](../../simpleicons-8/U/Untangle.Local.png) |




## Untangle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Untangle
include('simpleicons-8/U/Untangle')

' renders the element
Untangle('Untangle', 'Untangle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Untangle
include('simpleicons-8/U/Untangle')

' renders the element
Untangle('Untangle', 'Untangle', 'an optional tech label', 'an optional description')
@enduml
```

