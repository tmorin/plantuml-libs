# Tether


```text
simpleicons-8/T/Tether
```

```text
include('simpleicons-8/T/Tether')
```



| Illustration | Tether |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tether.png) | ![illustration for Tether](../../simpleicons-8/T/Tether.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TetherXs>`
- `<$TetherSm>`
- `<$TetherMd>`
- `<$TetherLg>`





## Tether

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tether
include('simpleicons-8/T/Tether')

' renders the element
Tether('Tether', 'Tether', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tether
include('simpleicons-8/T/Tether')

' renders the element
Tether('Tether', 'Tether', 'an optional tech label', 'an optional description')
@enduml
```

