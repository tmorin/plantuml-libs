# ContactSupport


```text
material-4/Action/ContactSupport
```

```text
include('material-4/Action/ContactSupport')
```



| Illustration | ContactSupport |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ContactSupport.png) | ![illustration for ContactSupport](../../material-4/Action/ContactSupport.Local.png) |




## ContactSupport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ContactSupport
include('material-4/Action/ContactSupport')

' renders the element
ContactSupport('ContactSupport', 'Contact Support', 'an optional tech label')
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

' loads the Item which embeds the element ContactSupport
include('material-4/Action/ContactSupport')

' renders the element
ContactSupport('ContactSupport', 'Contact Support', 'an optional tech label')
@enduml
```

