# Myanimelist


```text
simpleicons-5/M/Myanimelist
```

```text
include('simpleicons-5/M/Myanimelist')
```



| Illustration | Myanimelist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Myanimelist.png) | ![illustration for Myanimelist](../../simpleicons-5/M/Myanimelist.Local.png) |




## Myanimelist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Myanimelist
include('simpleicons-5/M/Myanimelist')

' renders the element
Myanimelist('Myanimelist', 'Myanimelist', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Myanimelist
include('simpleicons-5/M/Myanimelist')

' renders the element
Myanimelist('Myanimelist', 'Myanimelist', 'an optional tech label')
@enduml
```

