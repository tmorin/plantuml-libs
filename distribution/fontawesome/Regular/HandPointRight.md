# HandPointRight


```text
fontawesome/Regular/HandPointRight
```

```text
include('fontawesome/Regular/HandPointRight')
```



| Illustration | HandPointRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HandPointRight.png) | ![illustration for HandPointRight](../../fontawesome/Regular/HandPointRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandPointRightXs>`
- `<$HandPointRightSm>`
- `<$HandPointRightMd>`
- `<$HandPointRightLg>`





## HandPointRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandPointRight
include('fontawesome/Regular/HandPointRight')

' renders the element
HandPointRight('HandPointRight', 'Hand Point Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandPointRight
include('fontawesome/Regular/HandPointRight')

' renders the element
HandPointRight('HandPointRight', 'Hand Point Right', 'an optional tech label', 'an optional description')
@enduml
```

