# Tiktok


```text
simpleicons-7/T/Tiktok
```

```text
include('simpleicons-7/T/Tiktok')
```



| Illustration | Tiktok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tiktok.png) | ![illustration for Tiktok](../../simpleicons-7/T/Tiktok.Local.png) |




## Tiktok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tiktok
include('simpleicons-7/T/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label')
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

' loads the Item which embeds the element Tiktok
include('simpleicons-7/T/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label')
@enduml
```

