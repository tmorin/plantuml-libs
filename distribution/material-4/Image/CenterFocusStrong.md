# CenterFocusStrong


```text
material-4/Image/CenterFocusStrong
```

```text
include('material-4/Image/CenterFocusStrong')
```



| Illustration | CenterFocusStrong |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CenterFocusStrong.png) | ![illustration for CenterFocusStrong](../../material-4/Image/CenterFocusStrong.Local.png) |




## CenterFocusStrong

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CenterFocusStrong
include('material-4/Image/CenterFocusStrong')

' renders the element
CenterFocusStrong('CenterFocusStrong', 'Center Focus Strong', 'an optional tech label')
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

' loads the Item which embeds the element CenterFocusStrong
include('material-4/Image/CenterFocusStrong')

' renders the element
CenterFocusStrong('CenterFocusStrong', 'Center Focus Strong', 'an optional tech label')
@enduml
```

