# Skyliner


```text
simpleicons-5/S/Skyliner
```

```text
include('simpleicons-5/S/Skyliner')
```



| Illustration | Skyliner |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Skyliner.png) | ![illustration for Skyliner](../../simpleicons-5/S/Skyliner.Local.png) |




## Skyliner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Skyliner
include('simpleicons-5/S/Skyliner')

' renders the element
Skyliner('Skyliner', 'Skyliner', 'an optional tech label')
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

' loads the Item which embeds the element Skyliner
include('simpleicons-5/S/Skyliner')

' renders the element
Skyliner('Skyliner', 'Skyliner', 'an optional tech label')
@enduml
```

