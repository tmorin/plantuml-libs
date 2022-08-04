# Call


```text
material-4/Communication/Call
```

```text
include('material-4/Communication/Call')
```



| Illustration | Call |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Call.png) | ![illustration for Call](../../material-4/Communication/Call.Local.png) |




## Call

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Call
include('material-4/Communication/Call')

' renders the element
Call('Call', 'Call', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Call
include('material-4/Communication/Call')

' renders the element
Call('Call', 'Call', 'an optional tech label', 'an optional description')
@enduml
```

