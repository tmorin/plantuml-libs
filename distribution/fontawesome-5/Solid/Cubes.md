# Cubes


```text
fontawesome-5/Solid/Cubes
```

```text
include('fontawesome-5/Solid/Cubes')
```



| Illustration | Cubes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cubes.png) | ![illustration for Cubes](../../fontawesome-5/Solid/Cubes.Local.png) |




## Cubes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cubes
include('fontawesome-5/Solid/Cubes')

' renders the element
Cubes('Cubes', 'Cubes', 'an optional tech label')
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

' loads the Item which embeds the element Cubes
include('fontawesome-5/Solid/Cubes')

' renders the element
Cubes('Cubes', 'Cubes', 'an optional tech label')
@enduml
```

