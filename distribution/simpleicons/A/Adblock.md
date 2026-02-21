# Adblock


```text
simpleicons/A/Adblock
```

```text
include('simpleicons/A/Adblock')
```



| Illustration | Adblock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Adblock.png) | ![illustration for Adblock](../../simpleicons/A/Adblock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdblockXs>`
- `<$AdblockSm>`
- `<$AdblockMd>`
- `<$AdblockLg>`





## Adblock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Adblock
include('simpleicons/A/Adblock')

' renders the element
Adblock('Adblock', 'Adblock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adblock
include('simpleicons/A/Adblock')

' renders the element
Adblock('Adblock', 'Adblock', 'an optional tech label', 'an optional description')
@enduml
```

