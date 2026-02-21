# BoxesStacked


```text
fontawesome/Solid/BoxesStacked
```

```text
include('fontawesome/Solid/BoxesStacked')
```



| Illustration | BoxesStacked |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BoxesStacked.png) | ![illustration for BoxesStacked](../../fontawesome/Solid/BoxesStacked.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxesStackedXs>`
- `<$BoxesStackedSm>`
- `<$BoxesStackedMd>`
- `<$BoxesStackedLg>`





## BoxesStacked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoxesStacked
include('fontawesome/Solid/BoxesStacked')

' renders the element
BoxesStacked('BoxesStacked', 'Boxes Stacked', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoxesStacked
include('fontawesome/Solid/BoxesStacked')

' renders the element
BoxesStacked('BoxesStacked', 'Boxes Stacked', 'an optional tech label', 'an optional description')
@enduml
```

