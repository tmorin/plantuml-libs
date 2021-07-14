# CenterFocusWeak


```text
material-4/Image/CenterFocusWeak
```

```text
include('material-4/Image/CenterFocusWeak')
```



| Illustration | CenterFocusWeak |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CenterFocusWeak.png) | ![illustration for CenterFocusWeak](../../material-4/Image/CenterFocusWeak.Local.png) |




## CenterFocusWeak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CenterFocusWeak
include('material-4/Image/CenterFocusWeak')

' renders the element
CenterFocusWeak('CenterFocusWeak', 'Center Focus Weak', 'an optional tech label')
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

' loads the Item which embeds the element CenterFocusWeak
include('material-4/Image/CenterFocusWeak')

' renders the element
CenterFocusWeak('CenterFocusWeak', 'Center Focus Weak', 'an optional tech label')
@enduml
```

