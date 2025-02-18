# Affinityphoto


```text
simpleicons-14/A/Affinityphoto
```

```text
include('simpleicons-14/A/Affinityphoto')
```



| Illustration | Affinityphoto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Affinityphoto.png) | ![illustration for Affinityphoto](../../simpleicons-14/A/Affinityphoto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AffinityphotoXs>`
- `<$AffinityphotoSm>`
- `<$AffinityphotoMd>`
- `<$AffinityphotoLg>`





## Affinityphoto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Affinityphoto
include('simpleicons-14/A/Affinityphoto')

' renders the element
Affinityphoto('Affinityphoto', 'Affinityphoto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Affinityphoto
include('simpleicons-14/A/Affinityphoto')

' renders the element
Affinityphoto('Affinityphoto', 'Affinityphoto', 'an optional tech label', 'an optional description')
@enduml
```

