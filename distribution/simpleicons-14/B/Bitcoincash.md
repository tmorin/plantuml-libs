# Bitcoincash


```text
simpleicons-14/B/Bitcoincash
```

```text
include('simpleicons-14/B/Bitcoincash')
```



| Illustration | Bitcoincash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bitcoincash.png) | ![illustration for Bitcoincash](../../simpleicons-14/B/Bitcoincash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitcoincashXs>`
- `<$BitcoincashSm>`
- `<$BitcoincashMd>`
- `<$BitcoincashLg>`





## Bitcoincash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bitcoincash
include('simpleicons-14/B/Bitcoincash')

' renders the element
Bitcoincash('Bitcoincash', 'Bitcoincash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitcoincash
include('simpleicons-14/B/Bitcoincash')

' renders the element
Bitcoincash('Bitcoincash', 'Bitcoincash', 'an optional tech label', 'an optional description')
@enduml
```

