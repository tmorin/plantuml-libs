# Hivemq


```text
simpleicons-14/H/Hivemq
```

```text
include('simpleicons-14/H/Hivemq')
```



| Illustration | Hivemq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hivemq.png) | ![illustration for Hivemq](../../simpleicons-14/H/Hivemq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HivemqXs>`
- `<$HivemqSm>`
- `<$HivemqMd>`
- `<$HivemqLg>`





## Hivemq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hivemq
include('simpleicons-14/H/Hivemq')

' renders the element
Hivemq('Hivemq', 'Hivemq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hivemq
include('simpleicons-14/H/Hivemq')

' renders the element
Hivemq('Hivemq', 'Hivemq', 'an optional tech label', 'an optional description')
@enduml
```

