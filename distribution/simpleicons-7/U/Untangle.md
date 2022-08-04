# Untangle


```text
simpleicons-7/U/Untangle
```

```text
include('simpleicons-7/U/Untangle')
```



| Illustration | Untangle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/U/Untangle.png) | ![illustration for Untangle](../../simpleicons-7/U/Untangle.Local.png) |




## Untangle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Untangle
include('simpleicons-7/U/Untangle')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Untangle
include('simpleicons-7/U/Untangle')

' renders the element
Untangle('Untangle', 'Untangle', 'an optional tech label', 'an optional description')
@enduml
```

