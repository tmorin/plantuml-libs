# Stockx


```text
simpleicons-14/S/Stockx
```

```text
include('simpleicons-14/S/Stockx')
```



| Illustration | Stockx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Stockx.png) | ![illustration for Stockx](../../simpleicons-14/S/Stockx.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StockxXs>`
- `<$StockxSm>`
- `<$StockxMd>`
- `<$StockxLg>`





## Stockx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Stockx
include('simpleicons-14/S/Stockx')

' renders the element
Stockx('Stockx', 'Stockx', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stockx
include('simpleicons-14/S/Stockx')

' renders the element
Stockx('Stockx', 'Stockx', 'an optional tech label', 'an optional description')
@enduml
```

