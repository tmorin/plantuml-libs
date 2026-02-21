# CloudArrowDown


```text
fontawesome/Solid/CloudArrowDown
```

```text
include('fontawesome/Solid/CloudArrowDown')
```



| Illustration | CloudArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudArrowDown.png) | ![illustration for CloudArrowDown](../../fontawesome/Solid/CloudArrowDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudArrowDownXs>`
- `<$CloudArrowDownSm>`
- `<$CloudArrowDownMd>`
- `<$CloudArrowDownLg>`





## CloudArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudArrowDown
include('fontawesome/Solid/CloudArrowDown')

' renders the element
CloudArrowDown('CloudArrowDown', 'Cloud Arrow Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudArrowDown
include('fontawesome/Solid/CloudArrowDown')

' renders the element
CloudArrowDown('CloudArrowDown', 'Cloud Arrow Down', 'an optional tech label', 'an optional description')
@enduml
```

