# VenusDouble


```text
fontawesome-5/Solid/VenusDouble
```

```text
include('fontawesome-5/Solid/VenusDouble')
```



| Illustration | VenusDouble |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/VenusDouble.png) | ![illustration for VenusDouble](../../fontawesome-5/Solid/VenusDouble.Local.png) |




## VenusDouble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element VenusDouble
include('fontawesome-5/Solid/VenusDouble')

' renders the element
VenusDouble('VenusDouble', 'Venus Double', 'an optional tech label')
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

' loads the Item which embeds the element VenusDouble
include('fontawesome-5/Solid/VenusDouble')

' renders the element
VenusDouble('VenusDouble', 'Venus Double', 'an optional tech label')
@enduml
```

