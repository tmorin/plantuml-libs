# Cut


```text
fontawesome/Solid/Cut
```

```text
include('fontawesome/Solid/Cut')
```



| Illustration | Cut |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cut.png) | ![illustration for Cut](../../fontawesome/Solid/Cut.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CutXs>`
- `<$CutSm>`
- `<$CutMd>`
- `<$CutLg>`





## Cut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cut
include('fontawesome/Solid/Cut')

' renders the element
Cut('Cut', 'Cut', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cut
include('fontawesome/Solid/Cut')

' renders the element
Cut('Cut', 'Cut', 'an optional tech label', 'an optional description')
@enduml
```

