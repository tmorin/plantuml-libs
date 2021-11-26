# TabletAndroid


```text
material-4/Hardware/TabletAndroid
```

```text
include('material-4/Hardware/TabletAndroid')
```



| Illustration | TabletAndroid |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/TabletAndroid.png) | ![illustration for TabletAndroid](../../material-4/Hardware/TabletAndroid.Local.png) |




## TabletAndroid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TabletAndroid
include('material-4/Hardware/TabletAndroid')

' renders the element
TabletAndroid('TabletAndroid', 'Tablet Android', 'an optional tech label')
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

' loads the Item which embeds the element TabletAndroid
include('material-4/Hardware/TabletAndroid')

' renders the element
TabletAndroid('TabletAndroid', 'Tablet Android', 'an optional tech label')
@enduml
```

