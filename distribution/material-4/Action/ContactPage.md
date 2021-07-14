# ContactPage


```text
material-4/Action/ContactPage
```

```text
include('material-4/Action/ContactPage')
```



| Illustration | ContactPage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ContactPage.png) | ![illustration for ContactPage](../../material-4/Action/ContactPage.Local.png) |




## ContactPage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ContactPage
include('material-4/Action/ContactPage')

' renders the element
ContactPage('ContactPage', 'Contact Page', 'an optional tech label')
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

' loads the Item which embeds the element ContactPage
include('material-4/Action/ContactPage')

' renders the element
ContactPage('ContactPage', 'Contact Page', 'an optional tech label')
@enduml
```

