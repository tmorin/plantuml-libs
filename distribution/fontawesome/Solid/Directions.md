# Directions


```text
fontawesome/Solid/Directions
```

```text
include('fontawesome/Solid/Directions')
```



| Illustration | Directions |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Directions.png) | ![illustration for Directions](../../fontawesome/Solid/Directions.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirectionsXs>`
- `<$DirectionsSm>`
- `<$DirectionsMd>`
- `<$DirectionsLg>`





## Directions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Directions
include('fontawesome/Solid/Directions')

' renders the element
Directions('Directions', 'Directions', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Directions
include('fontawesome/Solid/Directions')

' renders the element
Directions('Directions', 'Directions', 'an optional tech label', 'an optional description')
@enduml
```

