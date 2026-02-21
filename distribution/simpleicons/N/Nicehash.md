# Nicehash


```text
simpleicons/N/Nicehash
```

```text
include('simpleicons/N/Nicehash')
```



| Illustration | Nicehash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nicehash.png) | ![illustration for Nicehash](../../simpleicons/N/Nicehash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NicehashXs>`
- `<$NicehashSm>`
- `<$NicehashMd>`
- `<$NicehashLg>`





## Nicehash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nicehash
include('simpleicons/N/Nicehash')

' renders the element
Nicehash('Nicehash', 'Nicehash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nicehash
include('simpleicons/N/Nicehash')

' renders the element
Nicehash('Nicehash', 'Nicehash', 'an optional tech label', 'an optional description')
@enduml
```

