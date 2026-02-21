# Keeper


```text
simpleicons-14/K/Keeper
```

```text
include('simpleicons-14/K/Keeper')
```



| Illustration | Keeper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Keeper.png) | ![illustration for Keeper](../../simpleicons-14/K/Keeper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeeperXs>`
- `<$KeeperSm>`
- `<$KeeperMd>`
- `<$KeeperLg>`





## Keeper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Keeper
include('simpleicons-14/K/Keeper')

' renders the element
Keeper('Keeper', 'Keeper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Keeper
include('simpleicons-14/K/Keeper')

' renders the element
Keeper('Keeper', 'Keeper', 'an optional tech label', 'an optional description')
@enduml
```

