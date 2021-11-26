# Headset


```text
material-4/Hardware/Headset
```

```text
include('material-4/Hardware/Headset')
```



| Illustration | Headset |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Headset.png) | ![illustration for Headset](../../material-4/Hardware/Headset.Local.png) |




## Headset

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Headset
include('material-4/Hardware/Headset')

' renders the element
Headset('Headset', 'Headset', 'an optional tech label')
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

' loads the Item which embeds the element Headset
include('material-4/Hardware/Headset')

' renders the element
Headset('Headset', 'Headset', 'an optional tech label')
@enduml
```

