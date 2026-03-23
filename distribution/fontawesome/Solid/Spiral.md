# Spiral


```text
fontawesome/Solid/Spiral
```

```text
include('fontawesome/Solid/Spiral')
```



| Illustration | Spiral |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Spiral.png) | ![illustration for Spiral](../../fontawesome/Solid/Spiral.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpiralXs>`
- `<$SpiralSm>`
- `<$SpiralMd>`
- `<$SpiralLg>`





## Spiral

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Spiral
include('fontawesome/Solid/Spiral')

' renders the element
Spiral('Spiral', 'Spiral', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spiral
include('fontawesome/Solid/Spiral')

' renders the element
Spiral('Spiral', 'Spiral', 'an optional tech label', 'an optional description')
@enduml
```

