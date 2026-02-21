# Itchdotio


```text
simpleicons/I/Itchdotio
```

```text
include('simpleicons/I/Itchdotio')
```



| Illustration | Itchdotio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Itchdotio.png) | ![illustration for Itchdotio](../../simpleicons/I/Itchdotio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ItchdotioXs>`
- `<$ItchdotioSm>`
- `<$ItchdotioMd>`
- `<$ItchdotioLg>`





## Itchdotio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Itchdotio
include('simpleicons/I/Itchdotio')

' renders the element
Itchdotio('Itchdotio', 'Itchdotio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Itchdotio
include('simpleicons/I/Itchdotio')

' renders the element
Itchdotio('Itchdotio', 'Itchdotio', 'an optional tech label', 'an optional description')
@enduml
```

