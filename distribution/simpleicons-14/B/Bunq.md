# Bunq


```text
simpleicons-14/B/Bunq
```

```text
include('simpleicons-14/B/Bunq')
```



| Illustration | Bunq |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bunq.png) | ![illustration for Bunq](../../simpleicons-14/B/Bunq.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BunqXs>`
- `<$BunqSm>`
- `<$BunqMd>`
- `<$BunqLg>`





## Bunq

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bunq
include('simpleicons-14/B/Bunq')

' renders the element
Bunq('Bunq', 'Bunq', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bunq
include('simpleicons-14/B/Bunq')

' renders the element
Bunq('Bunq', 'Bunq', 'an optional tech label', 'an optional description')
@enduml
```

