# WineBottle


```text
fontawesome-5/Solid/WineBottle
```

```text
include('fontawesome-5/Solid/WineBottle')
```



| Illustration | WineBottle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/WineBottle.png) | ![illustration for WineBottle](../../fontawesome-5/Solid/WineBottle.Local.png) |




## WineBottle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WineBottle
include('fontawesome-5/Solid/WineBottle')

' renders the element
WineBottle('WineBottle', 'Wine Bottle', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WineBottle
include('fontawesome-5/Solid/WineBottle')

' renders the element
WineBottle('WineBottle', 'Wine Bottle', 'an optional tech label')
@enduml
```

