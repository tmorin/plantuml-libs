# Monkeytype


```text
simpleicons-14/M/Monkeytype
```

```text
include('simpleicons-14/M/Monkeytype')
```



| Illustration | Monkeytype |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Monkeytype.png) | ![illustration for Monkeytype](../../simpleicons-14/M/Monkeytype.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonkeytypeXs>`
- `<$MonkeytypeSm>`
- `<$MonkeytypeMd>`
- `<$MonkeytypeLg>`





## Monkeytype

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Monkeytype
include('simpleicons-14/M/Monkeytype')

' renders the element
Monkeytype('Monkeytype', 'Monkeytype', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monkeytype
include('simpleicons-14/M/Monkeytype')

' renders the element
Monkeytype('Monkeytype', 'Monkeytype', 'an optional tech label', 'an optional description')
@enduml
```

