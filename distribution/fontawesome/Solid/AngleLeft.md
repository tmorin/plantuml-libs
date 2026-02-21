# AngleLeft


```text
fontawesome/Solid/AngleLeft
```

```text
include('fontawesome/Solid/AngleLeft')
```



| Illustration | AngleLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AngleLeft.png) | ![illustration for AngleLeft](../../fontawesome/Solid/AngleLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngleLeftXs>`
- `<$AngleLeftSm>`
- `<$AngleLeftMd>`
- `<$AngleLeftLg>`





## AngleLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AngleLeft
include('fontawesome/Solid/AngleLeft')

' renders the element
AngleLeft('AngleLeft', 'Angle Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AngleLeft
include('fontawesome/Solid/AngleLeft')

' renders the element
AngleLeft('AngleLeft', 'Angle Left', 'an optional tech label', 'an optional description')
@enduml
```

