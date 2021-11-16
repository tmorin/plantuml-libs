# Dedge


```text
simpleicons-5/D/Dedge
```

```text
include('simpleicons-5/D/Dedge')
```



| Illustration | Dedge |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dedge.png) | ![illustration for Dedge](../../simpleicons-5/D/Dedge.Local.png) |




## Dedge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dedge
include('simpleicons-5/D/Dedge')

' renders the element
Dedge('Dedge', 'Dedge', 'an optional tech label')
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

' loads the Item which embeds the element Dedge
include('simpleicons-5/D/Dedge')

' renders the element
Dedge('Dedge', 'Dedge', 'an optional tech label')
@enduml
```

