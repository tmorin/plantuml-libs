# DonutLarge


```text
material-4/Action/DonutLarge
```

```text
include('material-4/Action/DonutLarge')
```



| Illustration | DonutLarge |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/DonutLarge.png) | ![illustration for DonutLarge](../../material-4/Action/DonutLarge.Local.png) |




## DonutLarge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DonutLarge
include('material-4/Action/DonutLarge')

' renders the element
DonutLarge('DonutLarge', 'Donut Large', 'an optional tech label')
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

' loads the Item which embeds the element DonutLarge
include('material-4/Action/DonutLarge')

' renders the element
DonutLarge('DonutLarge', 'Donut Large', 'an optional tech label')
@enduml
```

