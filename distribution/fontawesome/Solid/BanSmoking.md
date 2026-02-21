# BanSmoking


```text
fontawesome/Solid/BanSmoking
```

```text
include('fontawesome/Solid/BanSmoking')
```



| Illustration | BanSmoking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BanSmoking.png) | ![illustration for BanSmoking](../../fontawesome/Solid/BanSmoking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BanSmokingXs>`
- `<$BanSmokingSm>`
- `<$BanSmokingMd>`
- `<$BanSmokingLg>`





## BanSmoking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BanSmoking
include('fontawesome/Solid/BanSmoking')

' renders the element
BanSmoking('BanSmoking', 'Ban Smoking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BanSmoking
include('fontawesome/Solid/BanSmoking')

' renders the element
BanSmoking('BanSmoking', 'Ban Smoking', 'an optional tech label', 'an optional description')
@enduml
```

