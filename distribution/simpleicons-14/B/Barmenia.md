# Barmenia


```text
simpleicons-14/B/Barmenia
```

```text
include('simpleicons-14/B/Barmenia')
```



| Illustration | Barmenia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Barmenia.png) | ![illustration for Barmenia](../../simpleicons-14/B/Barmenia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BarmeniaXs>`
- `<$BarmeniaSm>`
- `<$BarmeniaMd>`
- `<$BarmeniaLg>`





## Barmenia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Barmenia
include('simpleicons-14/B/Barmenia')

' renders the element
Barmenia('Barmenia', 'Barmenia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Barmenia
include('simpleicons-14/B/Barmenia')

' renders the element
Barmenia('Barmenia', 'Barmenia', 'an optional tech label', 'an optional description')
@enduml
```

