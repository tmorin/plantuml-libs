# Paritysubstrate


```text
simpleicons-14/P/Paritysubstrate
```

```text
include('simpleicons-14/P/Paritysubstrate')
```



| Illustration | Paritysubstrate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Paritysubstrate.png) | ![illustration for Paritysubstrate](../../simpleicons-14/P/Paritysubstrate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ParitysubstrateXs>`
- `<$ParitysubstrateSm>`
- `<$ParitysubstrateMd>`
- `<$ParitysubstrateLg>`





## Paritysubstrate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Paritysubstrate
include('simpleicons-14/P/Paritysubstrate')

' renders the element
Paritysubstrate('Paritysubstrate', 'Paritysubstrate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paritysubstrate
include('simpleicons-14/P/Paritysubstrate')

' renders the element
Paritysubstrate('Paritysubstrate', 'Paritysubstrate', 'an optional tech label', 'an optional description')
@enduml
```

