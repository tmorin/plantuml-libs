# Flatpak


```text
simpleicons/F/Flatpak
```

```text
include('simpleicons/F/Flatpak')
```



| Illustration | Flatpak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Flatpak.png) | ![illustration for Flatpak](../../simpleicons/F/Flatpak.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlatpakXs>`
- `<$FlatpakSm>`
- `<$FlatpakMd>`
- `<$FlatpakLg>`





## Flatpak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flatpak
include('simpleicons/F/Flatpak')

' renders the element
Flatpak('Flatpak', 'Flatpak', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Flatpak
include('simpleicons/F/Flatpak')

' renders the element
Flatpak('Flatpak', 'Flatpak', 'an optional tech label', 'an optional description')
@enduml
```

