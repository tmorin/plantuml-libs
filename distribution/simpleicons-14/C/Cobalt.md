# Cobalt


```text
simpleicons-14/C/Cobalt
```

```text
include('simpleicons-14/C/Cobalt')
```



| Illustration | Cobalt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cobalt.png) | ![illustration for Cobalt](../../simpleicons-14/C/Cobalt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CobaltXs>`
- `<$CobaltSm>`
- `<$CobaltMd>`
- `<$CobaltLg>`





## Cobalt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cobalt
include('simpleicons-14/C/Cobalt')

' renders the element
Cobalt('Cobalt', 'Cobalt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cobalt
include('simpleicons-14/C/Cobalt')

' renders the element
Cobalt('Cobalt', 'Cobalt', 'an optional tech label', 'an optional description')
@enduml
```

