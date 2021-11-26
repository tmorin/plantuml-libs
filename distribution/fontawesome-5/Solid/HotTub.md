# HotTub


```text
fontawesome-5/Solid/HotTub
```

```text
include('fontawesome-5/Solid/HotTub')
```



| Illustration | HotTub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HotTub.png) | ![illustration for HotTub](../../fontawesome-5/Solid/HotTub.Local.png) |




## HotTub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HotTub
include('fontawesome-5/Solid/HotTub')

' renders the element
HotTub('HotTub', 'Hot Tub', 'an optional tech label')
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

' loads the Item which embeds the element HotTub
include('fontawesome-5/Solid/HotTub')

' renders the element
HotTub('HotTub', 'Hot Tub', 'an optional tech label')
@enduml
```

