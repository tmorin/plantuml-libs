# Dolby


```text
simpleicons-5/D/Dolby
```

```text
include('simpleicons-5/D/Dolby')
```



| Illustration | Dolby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dolby.png) | ![illustration for Dolby](../../simpleicons-5/D/Dolby.Local.png) |




## Dolby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dolby
include('simpleicons-5/D/Dolby')

' renders the element
Dolby('Dolby', 'Dolby', 'an optional tech label')
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

' loads the Item which embeds the element Dolby
include('simpleicons-5/D/Dolby')

' renders the element
Dolby('Dolby', 'Dolby', 'an optional tech label')
@enduml
```

