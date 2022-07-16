# Smugmug


```text
simpleicons-7/S/Smugmug
```

```text
include('simpleicons-7/S/Smugmug')
```



| Illustration | Smugmug |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Smugmug.png) | ![illustration for Smugmug](../../simpleicons-7/S/Smugmug.Local.png) |




## Smugmug

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Smugmug
include('simpleicons-7/S/Smugmug')

' renders the element
Smugmug('Smugmug', 'Smugmug', 'an optional tech label')
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

' loads the Item which embeds the element Smugmug
include('simpleicons-7/S/Smugmug')

' renders the element
Smugmug('Smugmug', 'Smugmug', 'an optional tech label')
@enduml
```

