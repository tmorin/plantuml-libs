# SendAndArchive


```text
material-4/Action/SendAndArchive
```

```text
include('material-4/Action/SendAndArchive')
```



| Illustration | SendAndArchive |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SendAndArchive.png) | ![illustration for SendAndArchive](../../material-4/Action/SendAndArchive.Local.png) |




## SendAndArchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SendAndArchive
include('material-4/Action/SendAndArchive')

' renders the element
SendAndArchive('SendAndArchive', 'Send And Archive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SendAndArchive
include('material-4/Action/SendAndArchive')

' renders the element
SendAndArchive('SendAndArchive', 'Send And Archive', 'an optional tech label', 'an optional description')
@enduml
```

