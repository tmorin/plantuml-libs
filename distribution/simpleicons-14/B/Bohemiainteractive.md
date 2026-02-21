# Bohemiainteractive


```text
simpleicons-14/B/Bohemiainteractive
```

```text
include('simpleicons-14/B/Bohemiainteractive')
```



| Illustration | Bohemiainteractive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bohemiainteractive.png) | ![illustration for Bohemiainteractive](../../simpleicons-14/B/Bohemiainteractive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BohemiainteractiveXs>`
- `<$BohemiainteractiveSm>`
- `<$BohemiainteractiveMd>`
- `<$BohemiainteractiveLg>`





## Bohemiainteractive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bohemiainteractive
include('simpleicons-14/B/Bohemiainteractive')

' renders the element
Bohemiainteractive('Bohemiainteractive', 'Bohemiainteractive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bohemiainteractive
include('simpleicons-14/B/Bohemiainteractive')

' renders the element
Bohemiainteractive('Bohemiainteractive', 'Bohemiainteractive', 'an optional tech label', 'an optional description')
@enduml
```

