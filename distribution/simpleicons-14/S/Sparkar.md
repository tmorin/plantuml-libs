# Sparkar


```text
simpleicons-14/S/Sparkar
```

```text
include('simpleicons-14/S/Sparkar')
```



| Illustration | Sparkar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sparkar.png) | ![illustration for Sparkar](../../simpleicons-14/S/Sparkar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SparkarXs>`
- `<$SparkarSm>`
- `<$SparkarMd>`
- `<$SparkarLg>`





## Sparkar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sparkar
include('simpleicons-14/S/Sparkar')

' renders the element
Sparkar('Sparkar', 'Sparkar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sparkar
include('simpleicons-14/S/Sparkar')

' renders the element
Sparkar('Sparkar', 'Sparkar', 'an optional tech label', 'an optional description')
@enduml
```

