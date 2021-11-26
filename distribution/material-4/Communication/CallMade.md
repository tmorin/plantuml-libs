# CallMade


```text
material-4/Communication/CallMade
```

```text
include('material-4/Communication/CallMade')
```



| Illustration | CallMade |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CallMade.png) | ![illustration for CallMade](../../material-4/Communication/CallMade.Local.png) |




## CallMade

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CallMade
include('material-4/Communication/CallMade')

' renders the element
CallMade('CallMade', 'Call Made', 'an optional tech label')
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

' loads the Item which embeds the element CallMade
include('material-4/Communication/CallMade')

' renders the element
CallMade('CallMade', 'Call Made', 'an optional tech label')
@enduml
```

