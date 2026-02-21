# CircleRight


```text
fontawesome/Regular/CircleRight
```

```text
include('fontawesome/Regular/CircleRight')
```



| Illustration | CircleRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CircleRight.png) | ![illustration for CircleRight](../../fontawesome/Regular/CircleRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleRightXs>`
- `<$CircleRightSm>`
- `<$CircleRightMd>`
- `<$CircleRightLg>`





## CircleRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleRight
include('fontawesome/Regular/CircleRight')

' renders the element
CircleRight('CircleRight', 'Circle Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleRight
include('fontawesome/Regular/CircleRight')

' renders the element
CircleRight('CircleRight', 'Circle Right', 'an optional tech label', 'an optional description')
@enduml
```

