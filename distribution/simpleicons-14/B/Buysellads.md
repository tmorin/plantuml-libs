# Buysellads


```text
simpleicons-14/B/Buysellads
```

```text
include('simpleicons-14/B/Buysellads')
```



| Illustration | Buysellads |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Buysellads.png) | ![illustration for Buysellads](../../simpleicons-14/B/Buysellads.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuyselladsXs>`
- `<$BuyselladsSm>`
- `<$BuyselladsMd>`
- `<$BuyselladsLg>`





## Buysellads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Buysellads
include('simpleicons-14/B/Buysellads')

' renders the element
Buysellads('Buysellads', 'Buysellads', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Buysellads
include('simpleicons-14/B/Buysellads')

' renders the element
Buysellads('Buysellads', 'Buysellads', 'an optional tech label', 'an optional description')
@enduml
```

