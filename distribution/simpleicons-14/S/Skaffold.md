# Skaffold


```text
simpleicons-14/S/Skaffold
```

```text
include('simpleicons-14/S/Skaffold')
```



| Illustration | Skaffold |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Skaffold.png) | ![illustration for Skaffold](../../simpleicons-14/S/Skaffold.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkaffoldXs>`
- `<$SkaffoldSm>`
- `<$SkaffoldMd>`
- `<$SkaffoldLg>`





## Skaffold

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Skaffold
include('simpleicons-14/S/Skaffold')

' renders the element
Skaffold('Skaffold', 'Skaffold', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Skaffold
include('simpleicons-14/S/Skaffold')

' renders the element
Skaffold('Skaffold', 'Skaffold', 'an optional tech label', 'an optional description')
@enduml
```

