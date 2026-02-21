# BahtSign


```text
fontawesome/Solid/BahtSign
```

```text
include('fontawesome/Solid/BahtSign')
```



| Illustration | BahtSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BahtSign.png) | ![illustration for BahtSign](../../fontawesome/Solid/BahtSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BahtSignXs>`
- `<$BahtSignSm>`
- `<$BahtSignMd>`
- `<$BahtSignLg>`





## BahtSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BahtSign
include('fontawesome/Solid/BahtSign')

' renders the element
BahtSign('BahtSign', 'Baht Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BahtSign
include('fontawesome/Solid/BahtSign')

' renders the element
BahtSign('BahtSign', 'Baht Sign', 'an optional tech label', 'an optional description')
@enduml
```

