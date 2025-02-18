# Applenews


```text
simpleicons-14/A/Applenews
```

```text
include('simpleicons-14/A/Applenews')
```



| Illustration | Applenews |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Applenews.png) | ![illustration for Applenews](../../simpleicons-14/A/Applenews.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Applenews
include('simpleicons-14/A/Applenews')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Applenews
include('simpleicons-14/A/Applenews')

' renders the element
Applenews('Applenews', 'Applenews', 'an optional tech label', 'an optional description')
@enduml
```

