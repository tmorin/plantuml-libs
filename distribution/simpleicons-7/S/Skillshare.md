# Skillshare


```text
simpleicons-7/S/Skillshare
```

```text
include('simpleicons-7/S/Skillshare')
```



| Illustration | Skillshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Skillshare.png) | ![illustration for Skillshare](../../simpleicons-7/S/Skillshare.Local.png) |




## Skillshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Skillshare
include('simpleicons-7/S/Skillshare')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Skillshare
include('simpleicons-7/S/Skillshare')

' renders the element
Skillshare('Skillshare', 'Skillshare', 'an optional tech label')
@enduml
```

