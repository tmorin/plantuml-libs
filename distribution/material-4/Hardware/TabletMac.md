# TabletMac


```text
material-4/Hardware/TabletMac
```

```text
include('material-4/Hardware/TabletMac')
```



| Illustration | TabletMac |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/TabletMac.png) | ![illustration for TabletMac](../../material-4/Hardware/TabletMac.Local.png) |




## TabletMac

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TabletMac
include('material-4/Hardware/TabletMac')

' renders the element
TabletMac('TabletMac', 'Tablet Mac', 'an optional tech label')
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

' loads the Item which embeds the element TabletMac
include('material-4/Hardware/TabletMac')

' renders the element
TabletMac('TabletMac', 'Tablet Mac', 'an optional tech label')
@enduml
```

