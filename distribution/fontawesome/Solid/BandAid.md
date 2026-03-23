# BandAid


```text
fontawesome/Solid/BandAid
```

```text
include('fontawesome/Solid/BandAid')
```



| Illustration | BandAid |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BandAid.png) | ![illustration for BandAid](../../fontawesome/Solid/BandAid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BandAidXs>`
- `<$BandAidSm>`
- `<$BandAidMd>`
- `<$BandAidLg>`





## BandAid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BandAid
include('fontawesome/Solid/BandAid')

' renders the element
BandAid('BandAid', 'Band Aid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BandAid
include('fontawesome/Solid/BandAid')

' renders the element
BandAid('BandAid', 'Band Aid', 'an optional tech label', 'an optional description')
@enduml
```

