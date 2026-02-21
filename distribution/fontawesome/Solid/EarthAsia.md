# EarthAsia


```text
fontawesome/Solid/EarthAsia
```

```text
include('fontawesome/Solid/EarthAsia')
```



| Illustration | EarthAsia |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EarthAsia.png) | ![illustration for EarthAsia](../../fontawesome/Solid/EarthAsia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EarthAsiaXs>`
- `<$EarthAsiaSm>`
- `<$EarthAsiaMd>`
- `<$EarthAsiaLg>`





## EarthAsia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EarthAsia
include('fontawesome/Solid/EarthAsia')

' renders the element
EarthAsia('EarthAsia', 'Earth Asia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EarthAsia
include('fontawesome/Solid/EarthAsia')

' renders the element
EarthAsia('EarthAsia', 'Earth Asia', 'an optional tech label', 'an optional description')
@enduml
```

