# FirstPage


```text
material-4/Navigation/FirstPage
```

```text
include('material-4/Navigation/FirstPage')
```



| Illustration | FirstPage |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/FirstPage.png) | ![illustration for FirstPage](../../material-4/Navigation/FirstPage.Local.png) |




## FirstPage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FirstPage
include('material-4/Navigation/FirstPage')

' renders the element
FirstPage('FirstPage', 'First Page', 'an optional tech label')
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

' loads the Item which embeds the element FirstPage
include('material-4/Navigation/FirstPage')

' renders the element
FirstPage('FirstPage', 'First Page', 'an optional tech label')
@enduml
```

