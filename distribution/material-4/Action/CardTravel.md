# CardTravel


```text
material-4/Action/CardTravel
```

```text
include('material-4/Action/CardTravel')
```



| Illustration | CardTravel |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CardTravel.png) | ![illustration for CardTravel](../../material-4/Action/CardTravel.Local.png) |




## CardTravel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CardTravel
include('material-4/Action/CardTravel')

' renders the element
CardTravel('CardTravel', 'Card Travel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CardTravel
include('material-4/Action/CardTravel')

' renders the element
CardTravel('CardTravel', 'Card Travel', 'an optional tech label', 'an optional description')
@enduml
```

