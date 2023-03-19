# Walkman


```text
simpleicons-8/W/Walkman
```

```text
include('simpleicons-8/W/Walkman')
```



| Illustration | Walkman |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/W/Walkman.png) | ![illustration for Walkman](../../simpleicons-8/W/Walkman.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WalkmanXs>`
- `<$WalkmanSm>`
- `<$WalkmanMd>`
- `<$WalkmanLg>`





## Walkman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Walkman
include('simpleicons-8/W/Walkman')

' renders the element
Walkman('Walkman', 'Walkman', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Walkman
include('simpleicons-8/W/Walkman')

' renders the element
Walkman('Walkman', 'Walkman', 'an optional tech label', 'an optional description')
@enduml
```

