# Lootcrate


```text
simpleicons-14/L/Lootcrate
```

```text
include('simpleicons-14/L/Lootcrate')
```



| Illustration | Lootcrate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lootcrate.png) | ![illustration for Lootcrate](../../simpleicons-14/L/Lootcrate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LootcrateXs>`
- `<$LootcrateSm>`
- `<$LootcrateMd>`
- `<$LootcrateLg>`





## Lootcrate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lootcrate
include('simpleicons-14/L/Lootcrate')

' renders the element
Lootcrate('Lootcrate', 'Lootcrate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lootcrate
include('simpleicons-14/L/Lootcrate')

' renders the element
Lootcrate('Lootcrate', 'Lootcrate', 'an optional tech label', 'an optional description')
@enduml
```

