# Solana


```text
simpleicons/S/Solana
```

```text
include('simpleicons/S/Solana')
```



| Illustration | Solana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Solana.png) | ![illustration for Solana](../../simpleicons/S/Solana.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SolanaXs>`
- `<$SolanaSm>`
- `<$SolanaMd>`
- `<$SolanaLg>`





## Solana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Solana
include('simpleicons/S/Solana')

' renders the element
Solana('Solana', 'Solana', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Solana
include('simpleicons/S/Solana')

' renders the element
Solana('Solana', 'Solana', 'an optional tech label', 'an optional description')
@enduml
```

