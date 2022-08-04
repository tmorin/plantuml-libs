# FishFins


```text
fontawesome-6/Solid/FishFins
```

```text
include('fontawesome-6/Solid/FishFins')
```



| Illustration | FishFins |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FishFins.png) | ![illustration for FishFins](../../fontawesome-6/Solid/FishFins.Local.png) |




## FishFins

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FishFins
include('fontawesome-6/Solid/FishFins')

' renders the element
FishFins('FishFins', 'Fish Fins', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FishFins
include('fontawesome-6/Solid/FishFins')

' renders the element
FishFins('FishFins', 'Fish Fins', 'an optional tech label', 'an optional description')
@enduml
```

