# CallMissedOutgoing


```text
material-4/Communication/CallMissedOutgoing
```

```text
include('material-4/Communication/CallMissedOutgoing')
```



| Illustration | CallMissedOutgoing |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CallMissedOutgoing.png) | ![illustration for CallMissedOutgoing](../../material-4/Communication/CallMissedOutgoing.Local.png) |




## CallMissedOutgoing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CallMissedOutgoing
include('material-4/Communication/CallMissedOutgoing')

' renders the element
CallMissedOutgoing('CallMissedOutgoing', 'Call Missed Outgoing', 'an optional tech label')
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

' loads the Item which embeds the element CallMissedOutgoing
include('material-4/Communication/CallMissedOutgoing')

' renders the element
CallMissedOutgoing('CallMissedOutgoing', 'Call Missed Outgoing', 'an optional tech label')
@enduml
```

