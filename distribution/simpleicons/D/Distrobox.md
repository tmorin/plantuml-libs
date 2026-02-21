# Distrobox


```text
simpleicons/D/Distrobox
```

```text
include('simpleicons/D/Distrobox')
```



| Illustration | Distrobox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Distrobox.png) | ![illustration for Distrobox](../../simpleicons/D/Distrobox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DistroboxXs>`
- `<$DistroboxSm>`
- `<$DistroboxMd>`
- `<$DistroboxLg>`





## Distrobox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Distrobox
include('simpleicons/D/Distrobox')

' renders the element
Distrobox('Distrobox', 'Distrobox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Distrobox
include('simpleicons/D/Distrobox')

' renders the element
Distrobox('Distrobox', 'Distrobox', 'an optional tech label', 'an optional description')
@enduml
```

