# Gameandwatch


```text
simpleicons-14/G/Gameandwatch
```

```text
include('simpleicons-14/G/Gameandwatch')
```



| Illustration | Gameandwatch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gameandwatch.png) | ![illustration for Gameandwatch](../../simpleicons-14/G/Gameandwatch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GameandwatchXs>`
- `<$GameandwatchSm>`
- `<$GameandwatchMd>`
- `<$GameandwatchLg>`





## Gameandwatch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gameandwatch
include('simpleicons-14/G/Gameandwatch')

' renders the element
Gameandwatch('Gameandwatch', 'Gameandwatch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gameandwatch
include('simpleicons-14/G/Gameandwatch')

' renders the element
Gameandwatch('Gameandwatch', 'Gameandwatch', 'an optional tech label', 'an optional description')
@enduml
```

