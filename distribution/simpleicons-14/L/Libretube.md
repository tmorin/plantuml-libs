# Libretube


```text
simpleicons-14/L/Libretube
```

```text
include('simpleicons-14/L/Libretube')
```



| Illustration | Libretube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Libretube.png) | ![illustration for Libretube](../../simpleicons-14/L/Libretube.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibretubeXs>`
- `<$LibretubeSm>`
- `<$LibretubeMd>`
- `<$LibretubeLg>`





## Libretube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Libretube
include('simpleicons-14/L/Libretube')

' renders the element
Libretube('Libretube', 'Libretube', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Libretube
include('simpleicons-14/L/Libretube')

' renders the element
Libretube('Libretube', 'Libretube', 'an optional tech label', 'an optional description')
@enduml
```

