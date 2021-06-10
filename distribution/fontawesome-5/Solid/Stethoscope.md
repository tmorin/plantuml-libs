# Stethoscope


```text
fontawesome-5/Solid/Stethoscope
```

```text
include('fontawesome-5/Solid/Stethoscope')
```



| Illustration | Stethoscope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Stethoscope.png) | ![illustration for Stethoscope](../../fontawesome-5/Solid/Stethoscope.Local.png) |




## Stethoscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Stethoscope
include('fontawesome-5/Solid/Stethoscope')

' renders the element
Stethoscope('Stethoscope', 'Stethoscope', 'an optional tech label')
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

' loads the Item which embeds the element Stethoscope
include('fontawesome-5/Solid/Stethoscope')

' renders the element
Stethoscope('Stethoscope', 'Stethoscope', 'an optional tech label')
@enduml
```

