# Crunchyroll


```text
simpleicons/C/Crunchyroll
```

```text
include('simpleicons/C/Crunchyroll')
```



| Illustration | Crunchyroll |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Crunchyroll.png) | ![illustration for Crunchyroll](../../simpleicons/C/Crunchyroll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrunchyrollXs>`
- `<$CrunchyrollSm>`
- `<$CrunchyrollMd>`
- `<$CrunchyrollLg>`





## Crunchyroll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Crunchyroll
include('simpleicons/C/Crunchyroll')

' renders the element
Crunchyroll('Crunchyroll', 'Crunchyroll', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Crunchyroll
include('simpleicons/C/Crunchyroll')

' renders the element
Crunchyroll('Crunchyroll', 'Crunchyroll', 'an optional tech label', 'an optional description')
@enduml
```

