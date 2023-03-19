# Bim


```text
simpleicons-8/B/Bim
```

```text
include('simpleicons-8/B/Bim')
```



| Illustration | Bim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bim.png) | ![illustration for Bim](../../simpleicons-8/B/Bim.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bim
include('simpleicons-8/B/Bim')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bim
include('simpleicons-8/B/Bim')

' renders the element
Bim('Bim', 'Bim', 'an optional tech label', 'an optional description')
@enduml
```

