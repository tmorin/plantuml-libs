# Microbit


```text
simpleicons-14/M/Microbit
```

```text
include('simpleicons-14/M/Microbit')
```



| Illustration | Microbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Microbit.png) | ![illustration for Microbit](../../simpleicons-14/M/Microbit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrobitXs>`
- `<$MicrobitSm>`
- `<$MicrobitMd>`
- `<$MicrobitLg>`





## Microbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Microbit
include('simpleicons-14/M/Microbit')

' renders the element
Microbit('Microbit', 'Microbit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microbit
include('simpleicons-14/M/Microbit')

' renders the element
Microbit('Microbit', 'Microbit', 'an optional tech label', 'an optional description')
@enduml
```

