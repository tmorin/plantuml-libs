# Mosquito


```text
fontawesome-6/Solid/Mosquito
```

```text
include('fontawesome-6/Solid/Mosquito')
```



| Illustration | Mosquito |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Mosquito.png) | ![illustration for Mosquito](../../fontawesome-6/Solid/Mosquito.Local.png) |




## Mosquito

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mosquito
include('fontawesome-6/Solid/Mosquito')

' renders the element
Mosquito('Mosquito', 'Mosquito', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mosquito
include('fontawesome-6/Solid/Mosquito')

' renders the element
Mosquito('Mosquito', 'Mosquito', 'an optional tech label')
@enduml
```

