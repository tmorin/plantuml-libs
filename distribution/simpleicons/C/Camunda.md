# Camunda


```text
simpleicons/C/Camunda
```

```text
include('simpleicons/C/Camunda')
```



| Illustration | Camunda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Camunda.png) | ![illustration for Camunda](../../simpleicons/C/Camunda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CamundaXs>`
- `<$CamundaSm>`
- `<$CamundaMd>`
- `<$CamundaLg>`





## Camunda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Camunda
include('simpleicons/C/Camunda')

' renders the element
Camunda('Camunda', 'Camunda', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Camunda
include('simpleicons/C/Camunda')

' renders the element
Camunda('Camunda', 'Camunda', 'an optional tech label', 'an optional description')
@enduml
```

