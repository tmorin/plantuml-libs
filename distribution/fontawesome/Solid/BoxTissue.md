# BoxTissue


```text
fontawesome/Solid/BoxTissue
```

```text
include('fontawesome/Solid/BoxTissue')
```



| Illustration | BoxTissue |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BoxTissue.png) | ![illustration for BoxTissue](../../fontawesome/Solid/BoxTissue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxTissueXs>`
- `<$BoxTissueSm>`
- `<$BoxTissueMd>`
- `<$BoxTissueLg>`





## BoxTissue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoxTissue
include('fontawesome/Solid/BoxTissue')

' renders the element
BoxTissue('BoxTissue', 'Box Tissue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoxTissue
include('fontawesome/Solid/BoxTissue')

' renders the element
BoxTissue('BoxTissue', 'Box Tissue', 'an optional tech label', 'an optional description')
@enduml
```

