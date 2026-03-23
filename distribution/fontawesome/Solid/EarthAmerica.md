# EarthAmerica


```text
fontawesome/Solid/EarthAmerica
```

```text
include('fontawesome/Solid/EarthAmerica')
```



| Illustration | EarthAmerica |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EarthAmerica.png) | ![illustration for EarthAmerica](../../fontawesome/Solid/EarthAmerica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EarthAmericaXs>`
- `<$EarthAmericaSm>`
- `<$EarthAmericaMd>`
- `<$EarthAmericaLg>`





## EarthAmerica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EarthAmerica
include('fontawesome/Solid/EarthAmerica')

' renders the element
EarthAmerica('EarthAmerica', 'Earth America', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EarthAmerica
include('fontawesome/Solid/EarthAmerica')

' renders the element
EarthAmerica('EarthAmerica', 'Earth America', 'an optional tech label', 'an optional description')
@enduml
```

