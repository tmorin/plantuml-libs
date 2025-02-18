# Ello


```text
simpleicons-14/E/Ello
```

```text
include('simpleicons-14/E/Ello')
```



| Illustration | Ello |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Ello.png) | ![illustration for Ello](../../simpleicons-14/E/Ello.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElloXs>`
- `<$ElloSm>`
- `<$ElloMd>`
- `<$ElloLg>`





## Ello

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ello
include('simpleicons-14/E/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ello
include('simpleicons-14/E/Ello')

' renders the element
Ello('Ello', 'Ello', 'an optional tech label', 'an optional description')
@enduml
```

