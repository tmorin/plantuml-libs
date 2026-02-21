# Smugmug


```text
simpleicons/S/Smugmug
```

```text
include('simpleicons/S/Smugmug')
```



| Illustration | Smugmug |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Smugmug.png) | ![illustration for Smugmug](../../simpleicons/S/Smugmug.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmugmugXs>`
- `<$SmugmugSm>`
- `<$SmugmugMd>`
- `<$SmugmugLg>`





## Smugmug

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Smugmug
include('simpleicons/S/Smugmug')

' renders the element
Smugmug('Smugmug', 'Smugmug', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smugmug
include('simpleicons/S/Smugmug')

' renders the element
Smugmug('Smugmug', 'Smugmug', 'an optional tech label', 'an optional description')
@enduml
```

