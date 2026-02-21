# Boosty


```text
simpleicons-14/B/Boosty
```

```text
include('simpleicons-14/B/Boosty')
```



| Illustration | Boosty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Boosty.png) | ![illustration for Boosty](../../simpleicons-14/B/Boosty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoostyXs>`
- `<$BoostySm>`
- `<$BoostyMd>`
- `<$BoostyLg>`





## Boosty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Boosty
include('simpleicons-14/B/Boosty')

' renders the element
Boosty('Boosty', 'Boosty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Boosty
include('simpleicons-14/B/Boosty')

' renders the element
Boosty('Boosty', 'Boosty', 'an optional tech label', 'an optional description')
@enduml
```

