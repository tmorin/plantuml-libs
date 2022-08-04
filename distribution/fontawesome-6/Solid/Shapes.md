# Shapes


```text
fontawesome-6/Solid/Shapes
```

```text
include('fontawesome-6/Solid/Shapes')
```



| Illustration | Shapes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Shapes.png) | ![illustration for Shapes](../../fontawesome-6/Solid/Shapes.Local.png) |




## Shapes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Shapes
include('fontawesome-6/Solid/Shapes')

' renders the element
Shapes('Shapes', 'Shapes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shapes
include('fontawesome-6/Solid/Shapes')

' renders the element
Shapes('Shapes', 'Shapes', 'an optional tech label', 'an optional description')
@enduml
```

