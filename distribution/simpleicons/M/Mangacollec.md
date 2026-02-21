# Mangacollec


```text
simpleicons/M/Mangacollec
```

```text
include('simpleicons/M/Mangacollec')
```



| Illustration | Mangacollec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mangacollec.png) | ![illustration for Mangacollec](../../simpleicons/M/Mangacollec.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MangacollecXs>`
- `<$MangacollecSm>`
- `<$MangacollecMd>`
- `<$MangacollecLg>`





## Mangacollec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mangacollec
include('simpleicons/M/Mangacollec')

' renders the element
Mangacollec('Mangacollec', 'Mangacollec', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mangacollec
include('simpleicons/M/Mangacollec')

' renders the element
Mangacollec('Mangacollec', 'Mangacollec', 'an optional tech label', 'an optional description')
@enduml
```

