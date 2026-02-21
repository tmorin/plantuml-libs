# Coda


```text
simpleicons/C/Coda
```

```text
include('simpleicons/C/Coda')
```



| Illustration | Coda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Coda.png) | ![illustration for Coda](../../simpleicons/C/Coda.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodaXs>`
- `<$CodaSm>`
- `<$CodaMd>`
- `<$CodaLg>`





## Coda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Coda
include('simpleicons/C/Coda')

' renders the element
Coda('Coda', 'Coda', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coda
include('simpleicons/C/Coda')

' renders the element
Coda('Coda', 'Coda', 'an optional tech label', 'an optional description')
@enduml
```

