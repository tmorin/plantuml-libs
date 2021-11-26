# Unlock


```text
fontawesome-5/Solid/Unlock
```

```text
include('fontawesome-5/Solid/Unlock')
```



| Illustration | Unlock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Unlock.png) | ![illustration for Unlock](../../fontawesome-5/Solid/Unlock.Local.png) |




## Unlock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Unlock
include('fontawesome-5/Solid/Unlock')

' renders the element
Unlock('Unlock', 'Unlock', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Unlock
include('fontawesome-5/Solid/Unlock')

' renders the element
Unlock('Unlock', 'Unlock', 'an optional tech label')
@enduml
```

