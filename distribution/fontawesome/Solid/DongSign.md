# DongSign


```text
fontawesome/Solid/DongSign
```

```text
include('fontawesome/Solid/DongSign')
```



| Illustration | DongSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DongSign.png) | ![illustration for DongSign](../../fontawesome/Solid/DongSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DongSignXs>`
- `<$DongSignSm>`
- `<$DongSignMd>`
- `<$DongSignLg>`





## DongSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DongSign
include('fontawesome/Solid/DongSign')

' renders the element
DongSign('DongSign', 'Dong Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DongSign
include('fontawesome/Solid/DongSign')

' renders the element
DongSign('DongSign', 'Dong Sign', 'an optional tech label', 'an optional description')
@enduml
```

