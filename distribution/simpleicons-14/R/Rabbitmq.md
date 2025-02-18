# Rabbitmq


```text
simpleicons-14/R/Rabbitmq
```

```text
include('simpleicons-14/R/Rabbitmq')
```



| Illustration | Rabbitmq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rabbitmq.png) | ![illustration for Rabbitmq](../../simpleicons-14/R/Rabbitmq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RabbitmqXs>`
- `<$RabbitmqSm>`
- `<$RabbitmqMd>`
- `<$RabbitmqLg>`





## Rabbitmq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rabbitmq
include('simpleicons-14/R/Rabbitmq')

' renders the element
Rabbitmq('Rabbitmq', 'Rabbitmq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rabbitmq
include('simpleicons-14/R/Rabbitmq')

' renders the element
Rabbitmq('Rabbitmq', 'Rabbitmq', 'an optional tech label', 'an optional description')
@enduml
```

