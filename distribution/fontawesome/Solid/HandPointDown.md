# HandPointDown


```text
fontawesome/Solid/HandPointDown
```

```text
include('fontawesome/Solid/HandPointDown')
```



| Illustration | HandPointDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandPointDown.png) | ![illustration for HandPointDown](../../fontawesome/Solid/HandPointDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandPointDownXs>`
- `<$HandPointDownSm>`
- `<$HandPointDownMd>`
- `<$HandPointDownLg>`





## HandPointDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandPointDown
include('fontawesome/Solid/HandPointDown')

' renders the element
HandPointDown('HandPointDown', 'Hand Point Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandPointDown
include('fontawesome/Solid/HandPointDown')

' renders the element
HandPointDown('HandPointDown', 'Hand Point Down', 'an optional tech label', 'an optional description')
@enduml
```

