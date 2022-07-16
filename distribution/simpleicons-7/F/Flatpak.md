# Flatpak


```text
simpleicons-7/F/Flatpak
```

```text
include('simpleicons-7/F/Flatpak')
```



| Illustration | Flatpak |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Flatpak.png) | ![illustration for Flatpak](../../simpleicons-7/F/Flatpak.Local.png) |




## Flatpak

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Flatpak
include('simpleicons-7/F/Flatpak')

' renders the element
Flatpak('Flatpak', 'Flatpak', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Flatpak
include('simpleicons-7/F/Flatpak')

' renders the element
Flatpak('Flatpak', 'Flatpak', 'an optional tech label')
@enduml
```

