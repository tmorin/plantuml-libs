# Beats


```text
simpleicons/B/Beats
```

```text
include('simpleicons/B/Beats')
```



| Illustration | Beats |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Beats.png) | ![illustration for Beats](../../simpleicons/B/Beats.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeatsXs>`
- `<$BeatsSm>`
- `<$BeatsMd>`
- `<$BeatsLg>`





## Beats

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Beats
include('simpleicons/B/Beats')

' renders the element
Beats('Beats', 'Beats', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beats
include('simpleicons/B/Beats')

' renders the element
Beats('Beats', 'Beats', 'an optional tech label', 'an optional description')
@enduml
```

