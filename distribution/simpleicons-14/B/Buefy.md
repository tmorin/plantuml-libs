# Buefy


```text
simpleicons-14/B/Buefy
```

```text
include('simpleicons-14/B/Buefy')
```



| Illustration | Buefy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Buefy.png) | ![illustration for Buefy](../../simpleicons-14/B/Buefy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuefyXs>`
- `<$BuefySm>`
- `<$BuefyMd>`
- `<$BuefyLg>`





## Buefy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Buefy
include('simpleicons-14/B/Buefy')

' renders the element
Buefy('Buefy', 'Buefy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Buefy
include('simpleicons-14/B/Buefy')

' renders the element
Buefy('Buefy', 'Buefy', 'an optional tech label', 'an optional description')
@enduml
```

