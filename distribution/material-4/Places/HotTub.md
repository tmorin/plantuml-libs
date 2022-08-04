# HotTub


```text
material-4/Places/HotTub
```

```text
include('material-4/Places/HotTub')
```



| Illustration | HotTub |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/HotTub.png) | ![illustration for HotTub](../../material-4/Places/HotTub.Local.png) |




## HotTub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HotTub
include('material-4/Places/HotTub')

' renders the element
HotTub('HotTub', 'Hot Tub', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element HotTub
include('material-4/Places/HotTub')

' renders the element
HotTub('HotTub', 'Hot Tub', 'an optional tech label', 'an optional description')
@enduml
```

