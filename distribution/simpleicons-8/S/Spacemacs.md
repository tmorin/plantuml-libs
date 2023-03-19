# Spacemacs


```text
simpleicons-8/S/Spacemacs
```

```text
include('simpleicons-8/S/Spacemacs')
```



| Illustration | Spacemacs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Spacemacs.png) | ![illustration for Spacemacs](../../simpleicons-8/S/Spacemacs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpacemacsXs>`
- `<$SpacemacsSm>`
- `<$SpacemacsMd>`
- `<$SpacemacsLg>`





## Spacemacs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Spacemacs
include('simpleicons-8/S/Spacemacs')

' renders the element
Spacemacs('Spacemacs', 'Spacemacs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spacemacs
include('simpleicons-8/S/Spacemacs')

' renders the element
Spacemacs('Spacemacs', 'Spacemacs', 'an optional tech label', 'an optional description')
@enduml
```

