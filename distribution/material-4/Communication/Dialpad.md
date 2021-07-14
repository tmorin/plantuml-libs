# Dialpad


```text
material-4/Communication/Dialpad
```

```text
include('material-4/Communication/Dialpad')
```



| Illustration | Dialpad |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Dialpad.png) | ![illustration for Dialpad](../../material-4/Communication/Dialpad.Local.png) |




## Dialpad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dialpad
include('material-4/Communication/Dialpad')

' renders the element
Dialpad('Dialpad', 'Dialpad', 'an optional tech label')
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

' loads the Item which embeds the element Dialpad
include('material-4/Communication/Dialpad')

' renders the element
Dialpad('Dialpad', 'Dialpad', 'an optional tech label')
@enduml
```

