# Sonarsource


```text
simpleicons-8/S/Sonarsource
```

```text
include('simpleicons-8/S/Sonarsource')
```



| Illustration | Sonarsource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sonarsource.png) | ![illustration for Sonarsource](../../simpleicons-8/S/Sonarsource.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonarsourceXs>`
- `<$SonarsourceSm>`
- `<$SonarsourceMd>`
- `<$SonarsourceLg>`





## Sonarsource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sonarsource
include('simpleicons-8/S/Sonarsource')

' renders the element
Sonarsource('Sonarsource', 'Sonarsource', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sonarsource
include('simpleicons-8/S/Sonarsource')

' renders the element
Sonarsource('Sonarsource', 'Sonarsource', 'an optional tech label', 'an optional description')
@enduml
```

