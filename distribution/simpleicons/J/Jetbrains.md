# Jetbrains


```text
simpleicons/J/Jetbrains
```

```text
include('simpleicons/J/Jetbrains')
```



| Illustration | Jetbrains |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jetbrains.png) | ![illustration for Jetbrains](../../simpleicons/J/Jetbrains.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JetbrainsXs>`
- `<$JetbrainsSm>`
- `<$JetbrainsMd>`
- `<$JetbrainsLg>`





## Jetbrains

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jetbrains
include('simpleicons/J/Jetbrains')

' renders the element
Jetbrains('Jetbrains', 'Jetbrains', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jetbrains
include('simpleicons/J/Jetbrains')

' renders the element
Jetbrains('Jetbrains', 'Jetbrains', 'an optional tech label', 'an optional description')
@enduml
```

