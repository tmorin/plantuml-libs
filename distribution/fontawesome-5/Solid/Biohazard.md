# Biohazard


```text
fontawesome-5/Solid/Biohazard
```

```text
include('fontawesome-5/Solid/Biohazard')
```



| Illustration | Biohazard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Biohazard.png) | ![illustration for Biohazard](../../fontawesome-5/Solid/Biohazard.Local.png) |




## Biohazard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Biohazard
include('fontawesome-5/Solid/Biohazard')

' renders the element
Biohazard('Biohazard', 'Biohazard', 'an optional tech label')
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

' loads the Item which embeds the element Biohazard
include('fontawesome-5/Solid/Biohazard')

' renders the element
Biohazard('Biohazard', 'Biohazard', 'an optional tech label')
@enduml
```

