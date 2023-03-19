# Sonarlint


```text
simpleicons-8/S/Sonarlint
```

```text
include('simpleicons-8/S/Sonarlint')
```



| Illustration | Sonarlint |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Sonarlint.png) | ![illustration for Sonarlint](../../simpleicons-8/S/Sonarlint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonarlintXs>`
- `<$SonarlintSm>`
- `<$SonarlintMd>`
- `<$SonarlintLg>`





## Sonarlint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Sonarlint
include('simpleicons-8/S/Sonarlint')

' renders the element
Sonarlint('Sonarlint', 'Sonarlint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonarlint
include('simpleicons-8/S/Sonarlint')

' renders the element
Sonarlint('Sonarlint', 'Sonarlint', 'an optional tech label', 'an optional description')
@enduml
```

