# Zeromq


```text
simpleicons-14/Z/Zeromq
```

```text
include('simpleicons-14/Z/Zeromq')
```



| Illustration | Zeromq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zeromq.png) | ![illustration for Zeromq](../../simpleicons-14/Z/Zeromq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZeromqXs>`
- `<$ZeromqSm>`
- `<$ZeromqMd>`
- `<$ZeromqLg>`





## Zeromq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zeromq
include('simpleicons-14/Z/Zeromq')

' renders the element
Zeromq('Zeromq', 'Zeromq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zeromq
include('simpleicons-14/Z/Zeromq')

' renders the element
Zeromq('Zeromq', 'Zeromq', 'an optional tech label', 'an optional description')
@enduml
```

