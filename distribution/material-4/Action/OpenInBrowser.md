# OpenInBrowser


```text
material-4/Action/OpenInBrowser
```

```text
include('material-4/Action/OpenInBrowser')
```



| Illustration | OpenInBrowser |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/OpenInBrowser.png) | ![illustration for OpenInBrowser](../../material-4/Action/OpenInBrowser.Local.png) |




## OpenInBrowser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OpenInBrowser
include('material-4/Action/OpenInBrowser')

' renders the element
OpenInBrowser('OpenInBrowser', 'Open In Browser', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OpenInBrowser
include('material-4/Action/OpenInBrowser')

' renders the element
OpenInBrowser('OpenInBrowser', 'Open In Browser', 'an optional tech label', 'an optional description')
@enduml
```

