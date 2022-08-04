# ContactPhone


```text
material-4/Communication/ContactPhone
```

```text
include('material-4/Communication/ContactPhone')
```



| Illustration | ContactPhone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/ContactPhone.png) | ![illustration for ContactPhone](../../material-4/Communication/ContactPhone.Local.png) |




## ContactPhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ContactPhone
include('material-4/Communication/ContactPhone')

' renders the element
ContactPhone('ContactPhone', 'Contact Phone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ContactPhone
include('material-4/Communication/ContactPhone')

' renders the element
ContactPhone('ContactPhone', 'Contact Phone', 'an optional tech label', 'an optional description')
@enduml
```

