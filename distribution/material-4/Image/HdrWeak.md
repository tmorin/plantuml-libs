# HdrWeak


```text
material-4/Image/HdrWeak
```

```text
include('material-4/Image/HdrWeak')
```



| Illustration | HdrWeak |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/HdrWeak.png) | ![illustration for HdrWeak](../../material-4/Image/HdrWeak.Local.png) |




## HdrWeak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HdrWeak
include('material-4/Image/HdrWeak')

' renders the element
HdrWeak('HdrWeak', 'Hdr Weak', 'an optional tech label')
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

' loads the Item which embeds the element HdrWeak
include('material-4/Image/HdrWeak')

' renders the element
HdrWeak('HdrWeak', 'Hdr Weak', 'an optional tech label')
@enduml
```

