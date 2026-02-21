# EllipsisVertical


```text
fontawesome/Solid/EllipsisVertical
```

```text
include('fontawesome/Solid/EllipsisVertical')
```



| Illustration | EllipsisVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EllipsisVertical.png) | ![illustration for EllipsisVertical](../../fontawesome/Solid/EllipsisVertical.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EllipsisVerticalXs>`
- `<$EllipsisVerticalSm>`
- `<$EllipsisVerticalMd>`
- `<$EllipsisVerticalLg>`





## EllipsisVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EllipsisVertical
include('fontawesome/Solid/EllipsisVertical')

' renders the element
EllipsisVertical('EllipsisVertical', 'Ellipsis Vertical', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EllipsisVertical
include('fontawesome/Solid/EllipsisVertical')

' renders the element
EllipsisVertical('EllipsisVertical', 'Ellipsis Vertical', 'an optional tech label', 'an optional description')
@enduml
```

