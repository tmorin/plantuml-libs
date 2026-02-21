# Mintlify


```text
simpleicons/M/Mintlify
```

```text
include('simpleicons/M/Mintlify')
```



| Illustration | Mintlify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mintlify.png) | ![illustration for Mintlify](../../simpleicons/M/Mintlify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MintlifyXs>`
- `<$MintlifySm>`
- `<$MintlifyMd>`
- `<$MintlifyLg>`





## Mintlify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mintlify
include('simpleicons/M/Mintlify')

' renders the element
Mintlify('Mintlify', 'Mintlify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mintlify
include('simpleicons/M/Mintlify')

' renders the element
Mintlify('Mintlify', 'Mintlify', 'an optional tech label', 'an optional description')
@enduml
```

