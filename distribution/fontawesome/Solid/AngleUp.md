# AngleUp


```text
fontawesome/Solid/AngleUp
```

```text
include('fontawesome/Solid/AngleUp')
```



| Illustration | AngleUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AngleUp.png) | ![illustration for AngleUp](../../fontawesome/Solid/AngleUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngleUpXs>`
- `<$AngleUpSm>`
- `<$AngleUpMd>`
- `<$AngleUpLg>`





## AngleUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AngleUp
include('fontawesome/Solid/AngleUp')

' renders the element
AngleUp('AngleUp', 'Angle Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AngleUp
include('fontawesome/Solid/AngleUp')

' renders the element
AngleUp('AngleUp', 'Angle Up', 'an optional tech label', 'an optional description')
@enduml
```

