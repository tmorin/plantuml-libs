# WineGlassEmpty


```text
fontawesome-6/Solid/WineGlassEmpty
```

```text
include('fontawesome-6/Solid/WineGlassEmpty')
```



| Illustration | WineGlassEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WineGlassEmpty.png) | ![illustration for WineGlassEmpty](../../fontawesome-6/Solid/WineGlassEmpty.Local.png) |




## WineGlassEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WineGlassEmpty
include('fontawesome-6/Solid/WineGlassEmpty')

' renders the element
WineGlassEmpty('WineGlassEmpty', 'Wine Glass Empty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WineGlassEmpty
include('fontawesome-6/Solid/WineGlassEmpty')

' renders the element
WineGlassEmpty('WineGlassEmpty', 'Wine Glass Empty', 'an optional tech label', 'an optional description')
@enduml
```

