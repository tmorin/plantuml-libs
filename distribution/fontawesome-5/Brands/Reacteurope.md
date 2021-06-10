# Reacteurope


```text
fontawesome-5/Brands/Reacteurope
```

```text
include('fontawesome-5/Brands/Reacteurope')
```



| Illustration | Reacteurope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Reacteurope.png) | ![illustration for Reacteurope](../../fontawesome-5/Brands/Reacteurope.Local.png) |




## Reacteurope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Reacteurope
include('fontawesome-5/Brands/Reacteurope')

' renders the element
Reacteurope('Reacteurope', 'Reacteurope', 'an optional tech label')
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

' loads the Item which embeds the element Reacteurope
include('fontawesome-5/Brands/Reacteurope')

' renders the element
Reacteurope('Reacteurope', 'Reacteurope', 'an optional tech label')
@enduml
```

