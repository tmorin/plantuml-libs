# Scopus


```text
simpleicons/S/Scopus
```

```text
include('simpleicons/S/Scopus')
```



| Illustration | Scopus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Scopus.png) | ![illustration for Scopus](../../simpleicons/S/Scopus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScopusXs>`
- `<$ScopusSm>`
- `<$ScopusMd>`
- `<$ScopusLg>`





## Scopus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Scopus
include('simpleicons/S/Scopus')

' renders the element
Scopus('Scopus', 'Scopus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scopus
include('simpleicons/S/Scopus')

' renders the element
Scopus('Scopus', 'Scopus', 'an optional tech label', 'an optional description')
@enduml
```

