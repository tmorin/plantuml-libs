# Padding


```text
material-4/Editor/Padding
```

```text
include('material-4/Editor/Padding')
```



| Illustration | Padding |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Padding.png) | ![illustration for Padding](../../material-4/Editor/Padding.Local.png) |




## Padding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Padding
include('material-4/Editor/Padding')

' renders the element
Padding('Padding', 'Padding', 'an optional tech label')
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

' loads the Item which embeds the element Padding
include('material-4/Editor/Padding')

' renders the element
Padding('Padding', 'Padding', 'an optional tech label')
@enduml
```

