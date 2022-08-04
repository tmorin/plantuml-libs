# Openbadges


```text
simpleicons-7/O/Openbadges
```

```text
include('simpleicons-7/O/Openbadges')
```



| Illustration | Openbadges |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openbadges.png) | ![illustration for Openbadges](../../simpleicons-7/O/Openbadges.Local.png) |




## Openbadges

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openbadges
include('simpleicons-7/O/Openbadges')

' renders the element
Openbadges('Openbadges', 'Openbadges', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openbadges
include('simpleicons-7/O/Openbadges')

' renders the element
Openbadges('Openbadges', 'Openbadges', 'an optional tech label', 'an optional description')
@enduml
```

