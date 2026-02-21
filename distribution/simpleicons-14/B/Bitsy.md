# Bitsy


```text
simpleicons-14/B/Bitsy
```

```text
include('simpleicons-14/B/Bitsy')
```



| Illustration | Bitsy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bitsy.png) | ![illustration for Bitsy](../../simpleicons-14/B/Bitsy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitsyXs>`
- `<$BitsySm>`
- `<$BitsyMd>`
- `<$BitsyLg>`





## Bitsy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bitsy
include('simpleicons-14/B/Bitsy')

' renders the element
Bitsy('Bitsy', 'Bitsy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitsy
include('simpleicons-14/B/Bitsy')

' renders the element
Bitsy('Bitsy', 'Bitsy', 'an optional tech label', 'an optional description')
@enduml
```

