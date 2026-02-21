# ManatSign


```text
fontawesome/Solid/ManatSign
```

```text
include('fontawesome/Solid/ManatSign')
```



| Illustration | ManatSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ManatSign.png) | ![illustration for ManatSign](../../fontawesome/Solid/ManatSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ManatSignXs>`
- `<$ManatSignSm>`
- `<$ManatSignMd>`
- `<$ManatSignLg>`





## ManatSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ManatSign
include('fontawesome/Solid/ManatSign')

' renders the element
ManatSign('ManatSign', 'Manat Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ManatSign
include('fontawesome/Solid/ManatSign')

' renders the element
ManatSign('ManatSign', 'Manat Sign', 'an optional tech label', 'an optional description')
@enduml
```

