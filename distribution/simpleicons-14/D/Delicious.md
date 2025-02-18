# Delicious


```text
simpleicons-14/D/Delicious
```

```text
include('simpleicons-14/D/Delicious')
```



| Illustration | Delicious |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Delicious.png) | ![illustration for Delicious](../../simpleicons-14/D/Delicious.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeliciousXs>`
- `<$DeliciousSm>`
- `<$DeliciousMd>`
- `<$DeliciousLg>`





## Delicious

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Delicious
include('simpleicons-14/D/Delicious')

' renders the element
Delicious('Delicious', 'Delicious', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Delicious
include('simpleicons-14/D/Delicious')

' renders the element
Delicious('Delicious', 'Delicious', 'an optional tech label', 'an optional description')
@enduml
```

