# Tiktok


```text
simpleicons-5/T/Tiktok
```

```text
include('simpleicons-5/T/Tiktok')
```



| Illustration | Tiktok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tiktok.png) | ![illustration for Tiktok](../../simpleicons-5/T/Tiktok.Local.png) |




## Tiktok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tiktok
include('simpleicons-5/T/Tiktok')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tiktok
include('simpleicons-5/T/Tiktok')

' renders the element
Tiktok('Tiktok', 'Tiktok', 'an optional tech label')
@enduml
```

