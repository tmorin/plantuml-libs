# Cubes


```text
fontawesome/Solid/Cubes
```

```text
include('fontawesome/Solid/Cubes')
```



| Illustration | Cubes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cubes.png) | ![illustration for Cubes](../../fontawesome/Solid/Cubes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CubesXs>`
- `<$CubesSm>`
- `<$CubesMd>`
- `<$CubesLg>`





## Cubes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cubes
include('fontawesome/Solid/Cubes')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cubes
include('fontawesome/Solid/Cubes')

' renders the element
Cubes('Cubes', 'Cubes', 'an optional tech label', 'an optional description')
@enduml
```

