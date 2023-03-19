# PesetaSign


```text
fontawesome-6/Solid/PesetaSign
```

```text
include('fontawesome-6/Solid/PesetaSign')
```



| Illustration | PesetaSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PesetaSign.png) | ![illustration for PesetaSign](../../fontawesome-6/Solid/PesetaSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PesetaSignXs>`
- `<$PesetaSignSm>`
- `<$PesetaSignMd>`
- `<$PesetaSignLg>`





## PesetaSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PesetaSign
include('fontawesome-6/Solid/PesetaSign')

' renders the element
PesetaSign('PesetaSign', 'Peseta Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PesetaSign
include('fontawesome-6/Solid/PesetaSign')

' renders the element
PesetaSign('PesetaSign', 'Peseta Sign', 'an optional tech label', 'an optional description')
@enduml
```

