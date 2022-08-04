# BanSmoking


```text
fontawesome-6/Solid/BanSmoking
```

```text
include('fontawesome-6/Solid/BanSmoking')
```



| Illustration | BanSmoking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BanSmoking.png) | ![illustration for BanSmoking](../../fontawesome-6/Solid/BanSmoking.Local.png) |




## BanSmoking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BanSmoking
include('fontawesome-6/Solid/BanSmoking')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BanSmoking
include('fontawesome-6/Solid/BanSmoking')

' renders the element
BanSmoking('BanSmoking', 'Ban Smoking', 'an optional tech label', 'an optional description')
@enduml
```

