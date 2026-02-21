# Celestron


```text
simpleicons/C/Celestron
```

```text
include('simpleicons/C/Celestron')
```



| Illustration | Celestron |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Celestron.png) | ![illustration for Celestron](../../simpleicons/C/Celestron.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CelestronXs>`
- `<$CelestronSm>`
- `<$CelestronMd>`
- `<$CelestronLg>`





## Celestron

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Celestron
include('simpleicons/C/Celestron')

' renders the element
Celestron('Celestron', 'Celestron', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Celestron
include('simpleicons/C/Celestron')

' renders the element
Celestron('Celestron', 'Celestron', 'an optional tech label', 'an optional description')
@enduml
```

