# Brush


```text
fontawesome-6/Solid/Brush
```

```text
include('fontawesome-6/Solid/Brush')
```



| Illustration | Brush |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Brush.png) | ![illustration for Brush](../../fontawesome-6/Solid/Brush.Local.png) |




## Brush

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Brush
include('fontawesome-6/Solid/Brush')

' renders the element
Brush('Brush', 'Brush', 'an optional tech label')
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

' loads the Item which embeds the element Brush
include('fontawesome-6/Solid/Brush')

' renders the element
Brush('Brush', 'Brush', 'an optional tech label')
@enduml
```

