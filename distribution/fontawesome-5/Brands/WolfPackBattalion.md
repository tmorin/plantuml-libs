# WolfPackBattalion


```text
fontawesome-5/Brands/WolfPackBattalion
```

```text
include('fontawesome-5/Brands/WolfPackBattalion')
```



| Illustration | WolfPackBattalion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/WolfPackBattalion.png) | ![illustration for WolfPackBattalion](../../fontawesome-5/Brands/WolfPackBattalion.Local.png) |




## WolfPackBattalion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WolfPackBattalion
include('fontawesome-5/Brands/WolfPackBattalion')

' renders the element
WolfPackBattalion('WolfPackBattalion', 'Wolf Pack Battalion', 'an optional tech label')
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

' loads the Item which embeds the element WolfPackBattalion
include('fontawesome-5/Brands/WolfPackBattalion')

' renders the element
WolfPackBattalion('WolfPackBattalion', 'Wolf Pack Battalion', 'an optional tech label')
@enduml
```

