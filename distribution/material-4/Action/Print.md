# Print


```text
material-4/Action/Print
```

```text
include('material-4/Action/Print')
```



| Illustration | Print |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Print.png) | ![illustration for Print](../../material-4/Action/Print.Local.png) |




## Print

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Print
include('material-4/Action/Print')

' renders the element
Print('Print', 'Print', 'an optional tech label')
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

' loads the Item which embeds the element Print
include('material-4/Action/Print')

' renders the element
Print('Print', 'Print', 'an optional tech label')
@enduml
```

