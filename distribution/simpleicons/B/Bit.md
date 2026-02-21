# Bit


```text
simpleicons/B/Bit
```

```text
include('simpleicons/B/Bit')
```



| Illustration | Bit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bit.png) | ![illustration for Bit](../../simpleicons/B/Bit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitXs>`
- `<$BitSm>`
- `<$BitMd>`
- `<$BitLg>`





## Bit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bit
include('simpleicons/B/Bit')

' renders the element
Bit('Bit', 'Bit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bit
include('simpleicons/B/Bit')

' renders the element
Bit('Bit', 'Bit', 'an optional tech label', 'an optional description')
@enduml
```

