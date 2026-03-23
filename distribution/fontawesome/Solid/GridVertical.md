# GridVertical


```text
fontawesome/Solid/GridVertical
```

```text
include('fontawesome/Solid/GridVertical')
```



| Illustration | GridVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GridVertical.png) | ![illustration for GridVertical](../../fontawesome/Solid/GridVertical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GridVerticalXs>`
- `<$GridVerticalSm>`
- `<$GridVerticalMd>`
- `<$GridVerticalLg>`





## GridVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GridVertical
include('fontawesome/Solid/GridVertical')

' renders the element
GridVertical('GridVertical', 'Grid Vertical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GridVertical
include('fontawesome/Solid/GridVertical')

' renders the element
GridVertical('GridVertical', 'Grid Vertical', 'an optional tech label', 'an optional description')
@enduml
```

