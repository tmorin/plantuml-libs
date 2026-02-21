# Camunda


```text
simpleicons-14/C/Camunda
```

```text
include('simpleicons-14/C/Camunda')
```



| Illustration | Camunda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Camunda.png) | ![illustration for Camunda](../../simpleicons-14/C/Camunda.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Camunda
include('simpleicons-14/C/Camunda')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Camunda
include('simpleicons-14/C/Camunda')

' renders the element
Camunda('Camunda', 'Camunda', 'an optional tech label', 'an optional description')
@enduml
```

