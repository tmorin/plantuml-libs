# OutgoingMail


```text
material-4/Action/OutgoingMail
```

```text
include('material-4/Action/OutgoingMail')
```



| Illustration | OutgoingMail |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/OutgoingMail.png) | ![illustration for OutgoingMail](../../material-4/Action/OutgoingMail.Local.png) |




## OutgoingMail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OutgoingMail
include('material-4/Action/OutgoingMail')

' renders the element
OutgoingMail('OutgoingMail', 'Outgoing Mail', 'an optional tech label')
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

' loads the Item which embeds the element OutgoingMail
include('material-4/Action/OutgoingMail')

' renders the element
OutgoingMail('OutgoingMail', 'Outgoing Mail', 'an optional tech label')
@enduml
```

