# Cubes


```text
fontawesome-6/Solid/Cubes
```

```text
include('fontawesome-6/Solid/Cubes')
```



| Illustration | Cubes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Cubes.png) | ![illustration for Cubes](../../fontawesome-6/Solid/Cubes.Local.png) |




## Cubes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cubes
include('fontawesome-6/Solid/Cubes')

' renders the element
Cubes('Cubes', 'Cubes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cubes
include('fontawesome-6/Solid/Cubes')

' renders the element
Cubes('Cubes', 'Cubes', 'an optional tech label', 'an optional description')
@enduml
```

