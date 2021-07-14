# CallReceived


```text
material-4/Communication/CallReceived
```

```text
include('material-4/Communication/CallReceived')
```



| Illustration | CallReceived |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CallReceived.png) | ![illustration for CallReceived](../../material-4/Communication/CallReceived.Local.png) |




## CallReceived

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CallReceived
include('material-4/Communication/CallReceived')

' renders the element
CallReceived('CallReceived', 'Call Received', 'an optional tech label')
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

' loads the Item which embeds the element CallReceived
include('material-4/Communication/CallReceived')

' renders the element
CallReceived('CallReceived', 'Call Received', 'an optional tech label')
@enduml
```

