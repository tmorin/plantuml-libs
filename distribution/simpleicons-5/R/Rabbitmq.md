# Rabbitmq


```text
simpleicons-5/R/Rabbitmq
```

```text
include('simpleicons-5/R/Rabbitmq')
```



| Illustration | Rabbitmq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rabbitmq.png) | ![illustration for Rabbitmq](../../simpleicons-5/R/Rabbitmq.Local.png) |




## Rabbitmq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rabbitmq
include('simpleicons-5/R/Rabbitmq')

' renders the element
Rabbitmq('Rabbitmq', 'Rabbitmq', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rabbitmq
include('simpleicons-5/R/Rabbitmq')

' renders the element
Rabbitmq('Rabbitmq', 'Rabbitmq', 'an optional tech label')
@enduml
```

