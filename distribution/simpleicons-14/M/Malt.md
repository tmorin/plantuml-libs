# Malt


```text
simpleicons-14/M/Malt
```

```text
include('simpleicons-14/M/Malt')
```



| Illustration | Malt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Malt.png) | ![illustration for Malt](../../simpleicons-14/M/Malt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaltXs>`
- `<$MaltSm>`
- `<$MaltMd>`
- `<$MaltLg>`





## Malt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Malt
include('simpleicons-14/M/Malt')

' renders the element
Malt('Malt', 'Malt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Malt
include('simpleicons-14/M/Malt')

' renders the element
Malt('Malt', 'Malt', 'an optional tech label', 'an optional description')
@enduml
```

