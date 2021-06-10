# Shower


```text
fontawesome-5/Solid/Shower
```

```text
include('fontawesome-5/Solid/Shower')
```



| Illustration | Shower |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Shower.png) | ![illustration for Shower](../../fontawesome-5/Solid/Shower.Local.png) |




## Shower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Shower
include('fontawesome-5/Solid/Shower')

' renders the element
Shower('Shower', 'Shower', 'an optional tech label')
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

' loads the Item which embeds the element Shower
include('fontawesome-5/Solid/Shower')

' renders the element
Shower('Shower', 'Shower', 'an optional tech label')
@enduml
```

