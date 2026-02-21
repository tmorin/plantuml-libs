# Applenews


```text
simpleicons/A/Applenews
```

```text
include('simpleicons/A/Applenews')
```



| Illustration | Applenews |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Applenews.png) | ![illustration for Applenews](../../simpleicons/A/Applenews.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApplenewsXs>`
- `<$ApplenewsSm>`
- `<$ApplenewsMd>`
- `<$ApplenewsLg>`





## Applenews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Applenews
include('simpleicons/A/Applenews')

' renders the element
Applenews('Applenews', 'Applenews', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Applenews
include('simpleicons/A/Applenews')

' renders the element
Applenews('Applenews', 'Applenews', 'an optional tech label', 'an optional description')
@enduml
```

