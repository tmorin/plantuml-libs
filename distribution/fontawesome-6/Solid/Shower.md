# Shower


```text
fontawesome-6/Solid/Shower
```

```text
include('fontawesome-6/Solid/Shower')
```



| Illustration | Shower |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Shower.png) | ![illustration for Shower](../../fontawesome-6/Solid/Shower.Local.png) |




## Shower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shower
include('fontawesome-6/Solid/Shower')

' renders the element
Shower('Shower', 'Shower', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shower
include('fontawesome-6/Solid/Shower')

' renders the element
Shower('Shower', 'Shower', 'an optional tech label', 'an optional description')
@enduml
```

