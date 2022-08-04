# HdrOn


```text
material-4/Image/HdrOn
```

```text
include('material-4/Image/HdrOn')
```



| Illustration | HdrOn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/HdrOn.png) | ![illustration for HdrOn](../../material-4/Image/HdrOn.Local.png) |




## HdrOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HdrOn
include('material-4/Image/HdrOn')

' renders the element
HdrOn('HdrOn', 'Hdr On', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HdrOn
include('material-4/Image/HdrOn')

' renders the element
HdrOn('HdrOn', 'Hdr On', 'an optional tech label', 'an optional description')
@enduml
```

