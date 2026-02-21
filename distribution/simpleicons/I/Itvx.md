# Itvx


```text
simpleicons/I/Itvx
```

```text
include('simpleicons/I/Itvx')
```



| Illustration | Itvx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Itvx.png) | ![illustration for Itvx](../../simpleicons/I/Itvx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ItvxXs>`
- `<$ItvxSm>`
- `<$ItvxMd>`
- `<$ItvxLg>`





## Itvx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Itvx
include('simpleicons/I/Itvx')

' renders the element
Itvx('Itvx', 'Itvx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Itvx
include('simpleicons/I/Itvx')

' renders the element
Itvx('Itvx', 'Itvx', 'an optional tech label', 'an optional description')
@enduml
```

