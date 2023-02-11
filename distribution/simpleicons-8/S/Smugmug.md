# Smugmug


```text
simpleicons-8/S/Smugmug
```

```text
include('simpleicons-8/S/Smugmug')
```



| Illustration | Smugmug |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Smugmug.png) | ![illustration for Smugmug](../../simpleicons-8/S/Smugmug.Local.png) |




## Smugmug

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Smugmug
include('simpleicons-8/S/Smugmug')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Smugmug
include('simpleicons-8/S/Smugmug')

' renders the element
Smugmug('Smugmug', 'Smugmug', 'an optional tech label', 'an optional description')
@enduml
```

