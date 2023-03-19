# Iobroker


```text
simpleicons-8/I/Iobroker
```

```text
include('simpleicons-8/I/Iobroker')
```



| Illustration | Iobroker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Iobroker.png) | ![illustration for Iobroker](../../simpleicons-8/I/Iobroker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IobrokerXs>`
- `<$IobrokerSm>`
- `<$IobrokerMd>`
- `<$IobrokerLg>`





## Iobroker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Iobroker
include('simpleicons-8/I/Iobroker')

' renders the element
Iobroker('Iobroker', 'Iobroker', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Iobroker
include('simpleicons-8/I/Iobroker')

' renders the element
Iobroker('Iobroker', 'Iobroker', 'an optional tech label', 'an optional description')
@enduml
```

