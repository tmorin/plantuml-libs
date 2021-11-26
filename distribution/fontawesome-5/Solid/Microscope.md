# Microscope


```text
fontawesome-5/Solid/Microscope
```

```text
include('fontawesome-5/Solid/Microscope')
```



| Illustration | Microscope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Microscope.png) | ![illustration for Microscope](../../fontawesome-5/Solid/Microscope.Local.png) |




## Microscope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Microscope
include('fontawesome-5/Solid/Microscope')

' renders the element
Microscope('Microscope', 'Microscope', 'an optional tech label')
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

' loads the Item which embeds the element Microscope
include('fontawesome-5/Solid/Microscope')

' renders the element
Microscope('Microscope', 'Microscope', 'an optional tech label')
@enduml
```

