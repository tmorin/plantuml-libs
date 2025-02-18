# Virginmedia


```text
simpleicons-14/V/Virginmedia
```

```text
include('simpleicons-14/V/Virginmedia')
```



| Illustration | Virginmedia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Virginmedia.png) | ![illustration for Virginmedia](../../simpleicons-14/V/Virginmedia.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VirginmediaXs>`
- `<$VirginmediaSm>`
- `<$VirginmediaMd>`
- `<$VirginmediaLg>`





## Virginmedia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Virginmedia
include('simpleicons-14/V/Virginmedia')

' renders the element
Virginmedia('Virginmedia', 'Virginmedia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Virginmedia
include('simpleicons-14/V/Virginmedia')

' renders the element
Virginmedia('Virginmedia', 'Virginmedia', 'an optional tech label', 'an optional description')
@enduml
```

