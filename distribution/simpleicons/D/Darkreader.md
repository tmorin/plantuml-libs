# Darkreader


```text
simpleicons/D/Darkreader
```

```text
include('simpleicons/D/Darkreader')
```



| Illustration | Darkreader |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Darkreader.png) | ![illustration for Darkreader](../../simpleicons/D/Darkreader.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DarkreaderXs>`
- `<$DarkreaderSm>`
- `<$DarkreaderMd>`
- `<$DarkreaderLg>`





## Darkreader

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Darkreader
include('simpleicons/D/Darkreader')

' renders the element
Darkreader('Darkreader', 'Darkreader', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Darkreader
include('simpleicons/D/Darkreader')

' renders the element
Darkreader('Darkreader', 'Darkreader', 'an optional tech label', 'an optional description')
@enduml
```

