# RequestPage


```text
material-4/Action/RequestPage
```

```text
include('material-4/Action/RequestPage')
```



| Illustration | RequestPage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/RequestPage.png) | ![illustration for RequestPage](../../material-4/Action/RequestPage.Local.png) |




## RequestPage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RequestPage
include('material-4/Action/RequestPage')

' renders the element
RequestPage('RequestPage', 'Request Page', 'an optional tech label')
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

' loads the Item which embeds the element RequestPage
include('material-4/Action/RequestPage')

' renders the element
RequestPage('RequestPage', 'Request Page', 'an optional tech label')
@enduml
```

