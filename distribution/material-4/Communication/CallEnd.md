# CallEnd


```text
material-4/Communication/CallEnd
```

```text
include('material-4/Communication/CallEnd')
```



| Illustration | CallEnd |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/CallEnd.png) | ![illustration for CallEnd](../../material-4/Communication/CallEnd.Local.png) |




## CallEnd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CallEnd
include('material-4/Communication/CallEnd')

' renders the element
CallEnd('CallEnd', 'Call End', 'an optional tech label')
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

' loads the Item which embeds the element CallEnd
include('material-4/Communication/CallEnd')

' renders the element
CallEnd('CallEnd', 'Call End', 'an optional tech label')
@enduml
```

