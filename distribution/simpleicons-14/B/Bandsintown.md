# Bandsintown


```text
simpleicons-14/B/Bandsintown
```

```text
include('simpleicons-14/B/Bandsintown')
```



| Illustration | Bandsintown |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bandsintown.png) | ![illustration for Bandsintown](../../simpleicons-14/B/Bandsintown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BandsintownXs>`
- `<$BandsintownSm>`
- `<$BandsintownMd>`
- `<$BandsintownLg>`





## Bandsintown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bandsintown
include('simpleicons-14/B/Bandsintown')

' renders the element
Bandsintown('Bandsintown', 'Bandsintown', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bandsintown
include('simpleicons-14/B/Bandsintown')

' renders the element
Bandsintown('Bandsintown', 'Bandsintown', 'an optional tech label', 'an optional description')
@enduml
```

