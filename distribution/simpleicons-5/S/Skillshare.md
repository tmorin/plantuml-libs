# Skillshare


```text
simpleicons-5/S/Skillshare
```

```text
include('simpleicons-5/S/Skillshare')
```



| Illustration | Skillshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Skillshare.png) | ![illustration for Skillshare](../../simpleicons-5/S/Skillshare.Local.png) |




## Skillshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Skillshare
include('simpleicons-5/S/Skillshare')

' renders the element
Skillshare('Skillshare', 'Skillshare', 'an optional tech label')
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

' loads the Item which embeds the element Skillshare
include('simpleicons-5/S/Skillshare')

' renders the element
Skillshare('Skillshare', 'Skillshare', 'an optional tech label')
@enduml
```

