# Kucoin


```text
simpleicons/K/Kucoin
```

```text
include('simpleicons/K/Kucoin')
```



| Illustration | Kucoin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kucoin.png) | ![illustration for Kucoin](../../simpleicons/K/Kucoin.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kucoin
include('simpleicons/K/Kucoin')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kucoin
include('simpleicons/K/Kucoin')

' renders the element
Kucoin('Kucoin', 'Kucoin', 'an optional tech label', 'an optional description')
@enduml
```

