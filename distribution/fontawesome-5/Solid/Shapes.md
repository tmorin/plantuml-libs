# Shapes


```text
fontawesome-5/Solid/Shapes
```

```text
include('fontawesome-5/Solid/Shapes')
```



| Illustration | Shapes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Shapes.png) | ![illustration for Shapes](../../fontawesome-5/Solid/Shapes.Local.png) |




## Shapes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Shapes
include('fontawesome-5/Solid/Shapes')

' renders the element
Shapes('Shapes', 'Shapes', 'an optional tech label')
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

' loads the Item which embeds the element Shapes
include('fontawesome-5/Solid/Shapes')

' renders the element
Shapes('Shapes', 'Shapes', 'an optional tech label')
@enduml
```

