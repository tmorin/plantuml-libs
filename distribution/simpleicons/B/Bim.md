# Bim


```text
simpleicons/B/Bim
```

```text
include('simpleicons/B/Bim')
```



| Illustration | Bim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bim.png) | ![illustration for Bim](../../simpleicons/B/Bim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BimXs>`
- `<$BimSm>`
- `<$BimMd>`
- `<$BimLg>`





## Bim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bim
include('simpleicons/B/Bim')

' renders the element
Bim('Bim', 'Bim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bim
include('simpleicons/B/Bim')

' renders the element
Bim('Bim', 'Bim', 'an optional tech label', 'an optional description')
@enduml
```

