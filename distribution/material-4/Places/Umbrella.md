# Umbrella


```text
material-4/Places/Umbrella
```

```text
include('material-4/Places/Umbrella')
```



| Illustration | Umbrella |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Umbrella.png) | ![illustration for Umbrella](../../material-4/Places/Umbrella.Local.png) |




## Umbrella

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Umbrella
include('material-4/Places/Umbrella')

' renders the element
Umbrella('Umbrella', 'Umbrella', 'an optional tech label')
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

' loads the Item which embeds the element Umbrella
include('material-4/Places/Umbrella')

' renders the element
Umbrella('Umbrella', 'Umbrella', 'an optional tech label')
@enduml
```

