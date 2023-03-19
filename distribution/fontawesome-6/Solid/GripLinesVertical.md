# GripLinesVertical


```text
fontawesome-6/Solid/GripLinesVertical
```

```text
include('fontawesome-6/Solid/GripLinesVertical')
```



| Illustration | GripLinesVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GripLinesVertical.png) | ![illustration for GripLinesVertical](../../fontawesome-6/Solid/GripLinesVertical.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GripLinesVertical
include('fontawesome-6/Solid/GripLinesVertical')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GripLinesVertical
include('fontawesome-6/Solid/GripLinesVertical')

' renders the element
GripLinesVertical('GripLinesVertical', 'Grip Lines Vertical', 'an optional tech label', 'an optional description')
@enduml
```

