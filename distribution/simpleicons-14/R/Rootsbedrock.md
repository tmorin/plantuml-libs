# Rootsbedrock


```text
simpleicons-14/R/Rootsbedrock
```

```text
include('simpleicons-14/R/Rootsbedrock')
```



| Illustration | Rootsbedrock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rootsbedrock.png) | ![illustration for Rootsbedrock](../../simpleicons-14/R/Rootsbedrock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RootsbedrockXs>`
- `<$RootsbedrockSm>`
- `<$RootsbedrockMd>`
- `<$RootsbedrockLg>`





## Rootsbedrock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rootsbedrock
include('simpleicons-14/R/Rootsbedrock')

' renders the element
Rootsbedrock('Rootsbedrock', 'Rootsbedrock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rootsbedrock
include('simpleicons-14/R/Rootsbedrock')

' renders the element
Rootsbedrock('Rootsbedrock', 'Rootsbedrock', 'an optional tech label', 'an optional description')
@enduml
```

