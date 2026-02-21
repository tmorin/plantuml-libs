# GripLinesVertical


```text
fontawesome/Solid/GripLinesVertical
```

```text
include('fontawesome/Solid/GripLinesVertical')
```



| Illustration | GripLinesVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GripLinesVertical.png) | ![illustration for GripLinesVertical](../../fontawesome/Solid/GripLinesVertical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GripLinesVerticalXs>`
- `<$GripLinesVerticalSm>`
- `<$GripLinesVerticalMd>`
- `<$GripLinesVerticalLg>`





## GripLinesVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GripLinesVertical
include('fontawesome/Solid/GripLinesVertical')

' renders the element
GripLinesVertical('GripLinesVertical', 'Grip Lines Vertical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GripLinesVertical
include('fontawesome/Solid/GripLinesVertical')

' renders the element
GripLinesVertical('GripLinesVertical', 'Grip Lines Vertical', 'an optional tech label', 'an optional description')
@enduml
```

