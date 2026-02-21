# Bricks


```text
simpleicons/B/Bricks
```

```text
include('simpleicons/B/Bricks')
```



| Illustration | Bricks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bricks.png) | ![illustration for Bricks](../../simpleicons/B/Bricks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BricksXs>`
- `<$BricksSm>`
- `<$BricksMd>`
- `<$BricksLg>`





## Bricks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bricks
include('simpleicons/B/Bricks')

' renders the element
Bricks('Bricks', 'Bricks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bricks
include('simpleicons/B/Bricks')

' renders the element
Bricks('Bricks', 'Bricks', 'an optional tech label', 'an optional description')
@enduml
```

