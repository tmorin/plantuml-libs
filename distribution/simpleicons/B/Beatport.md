# Beatport


```text
simpleicons/B/Beatport
```

```text
include('simpleicons/B/Beatport')
```



| Illustration | Beatport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Beatport.png) | ![illustration for Beatport](../../simpleicons/B/Beatport.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeatportXs>`
- `<$BeatportSm>`
- `<$BeatportMd>`
- `<$BeatportLg>`





## Beatport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Beatport
include('simpleicons/B/Beatport')

' renders the element
Beatport('Beatport', 'Beatport', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beatport
include('simpleicons/B/Beatport')

' renders the element
Beatport('Beatport', 'Beatport', 'an optional tech label', 'an optional description')
@enduml
```

