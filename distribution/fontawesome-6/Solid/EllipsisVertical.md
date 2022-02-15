# EllipsisVertical


```text
fontawesome-6/Solid/EllipsisVertical
```

```text
include('fontawesome-6/Solid/EllipsisVertical')
```



| Illustration | EllipsisVertical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/EllipsisVertical.png) | ![illustration for EllipsisVertical](../../fontawesome-6/Solid/EllipsisVertical.Local.png) |




## EllipsisVertical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EllipsisVertical
include('fontawesome-6/Solid/EllipsisVertical')

' renders the element
EllipsisVertical('EllipsisVertical', 'Ellipsis Vertical', 'an optional tech label')
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

' loads the Item which embeds the element EllipsisVertical
include('fontawesome-6/Solid/EllipsisVertical')

' renders the element
EllipsisVertical('EllipsisVertical', 'Ellipsis Vertical', 'an optional tech label')
@enduml
```

