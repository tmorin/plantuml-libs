# Emby


```text
simpleicons-5/E/Emby
```

```text
include('simpleicons-5/E/Emby')
```



| Illustration | Emby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Emby.png) | ![illustration for Emby](../../simpleicons-5/E/Emby.Local.png) |




## Emby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Emby
include('simpleicons-5/E/Emby')

' renders the element
Emby('Emby', 'Emby', 'an optional tech label')
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

' loads the Item which embeds the element Emby
include('simpleicons-5/E/Emby')

' renders the element
Emby('Emby', 'Emby', 'an optional tech label')
@enduml
```

