# Shoelace


```text
fontawesome/Brands/Shoelace
```

```text
include('fontawesome/Brands/Shoelace')
```



| Illustration | Shoelace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Shoelace.png) | ![illustration for Shoelace](../../fontawesome/Brands/Shoelace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShoelaceXs>`
- `<$ShoelaceSm>`
- `<$ShoelaceMd>`
- `<$ShoelaceLg>`





## Shoelace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Shoelace
include('fontawesome/Brands/Shoelace')

' renders the element
Shoelace('Shoelace', 'Shoelace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shoelace
include('fontawesome/Brands/Shoelace')

' renders the element
Shoelace('Shoelace', 'Shoelace', 'an optional tech label', 'an optional description')
@enduml
```

