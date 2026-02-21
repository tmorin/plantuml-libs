# Betterstack


```text
simpleicons-14/B/Betterstack
```

```text
include('simpleicons-14/B/Betterstack')
```



| Illustration | Betterstack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Betterstack.png) | ![illustration for Betterstack](../../simpleicons-14/B/Betterstack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BetterstackXs>`
- `<$BetterstackSm>`
- `<$BetterstackMd>`
- `<$BetterstackLg>`





## Betterstack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Betterstack
include('simpleicons-14/B/Betterstack')

' renders the element
Betterstack('Betterstack', 'Betterstack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Betterstack
include('simpleicons-14/B/Betterstack')

' renders the element
Betterstack('Betterstack', 'Betterstack', 'an optional tech label', 'an optional description')
@enduml
```

