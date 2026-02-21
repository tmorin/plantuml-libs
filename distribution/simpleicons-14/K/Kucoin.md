# Kucoin


```text
simpleicons-14/K/Kucoin
```

```text
include('simpleicons-14/K/Kucoin')
```



| Illustration | Kucoin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kucoin.png) | ![illustration for Kucoin](../../simpleicons-14/K/Kucoin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KucoinXs>`
- `<$KucoinSm>`
- `<$KucoinMd>`
- `<$KucoinLg>`





## Kucoin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kucoin
include('simpleicons-14/K/Kucoin')

' renders the element
Kucoin('Kucoin', 'Kucoin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kucoin
include('simpleicons-14/K/Kucoin')

' renders the element
Kucoin('Kucoin', 'Kucoin', 'an optional tech label', 'an optional description')
@enduml
```

