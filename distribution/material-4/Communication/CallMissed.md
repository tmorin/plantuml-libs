# CallMissed


```text
material-4/Communication/CallMissed
```

```text
include('material-4/Communication/CallMissed')
```



| Illustration | CallMissed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CallMissed.png) | ![illustration for CallMissed](../../material-4/Communication/CallMissed.Local.png) |




## CallMissed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CallMissed
include('material-4/Communication/CallMissed')

' renders the element
CallMissed('CallMissed', 'Call Missed', 'an optional tech label')
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

' loads the Item which embeds the element CallMissed
include('material-4/Communication/CallMissed')

' renders the element
CallMissed('CallMissed', 'Call Missed', 'an optional tech label')
@enduml
```

