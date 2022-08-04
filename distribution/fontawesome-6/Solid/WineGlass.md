# WineGlass


```text
fontawesome-6/Solid/WineGlass
```

```text
include('fontawesome-6/Solid/WineGlass')
```



| Illustration | WineGlass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WineGlass.png) | ![illustration for WineGlass](../../fontawesome-6/Solid/WineGlass.Local.png) |




## WineGlass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WineGlass
include('fontawesome-6/Solid/WineGlass')

' renders the element
WineGlass('WineGlass', 'Wine Glass', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WineGlass
include('fontawesome-6/Solid/WineGlass')

' renders the element
WineGlass('WineGlass', 'Wine Glass', 'an optional tech label', 'an optional description')
@enduml
```

