# WonSign


```text
fontawesome/Solid/WonSign
```

```text
include('fontawesome/Solid/WonSign')
```



| Illustration | WonSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WonSign.png) | ![illustration for WonSign](../../fontawesome/Solid/WonSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WonSignXs>`
- `<$WonSignSm>`
- `<$WonSignMd>`
- `<$WonSignLg>`





## WonSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WonSign
include('fontawesome/Solid/WonSign')

' renders the element
WonSign('WonSign', 'Won Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WonSign
include('fontawesome/Solid/WonSign')

' renders the element
WonSign('WonSign', 'Won Sign', 'an optional tech label', 'an optional description')
@enduml
```

