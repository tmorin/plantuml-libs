# Hippo


```text
fontawesome-5/Solid/Hippo
```

```text
include('fontawesome-5/Solid/Hippo')
```



| Illustration | Hippo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Hippo.png) | ![illustration for Hippo](../../fontawesome-5/Solid/Hippo.Local.png) |




## Hippo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Hippo
include('fontawesome-5/Solid/Hippo')

' renders the element
Hippo('Hippo', 'Hippo', 'an optional tech label')
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

' loads the Item which embeds the element Hippo
include('fontawesome-5/Solid/Hippo')

' renders the element
Hippo('Hippo', 'Hippo', 'an optional tech label')
@enduml
```

