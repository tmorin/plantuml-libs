# Dolby


```text
simpleicons-7/D/Dolby
```

```text
include('simpleicons-7/D/Dolby')
```



| Illustration | Dolby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Dolby.png) | ![illustration for Dolby](../../simpleicons-7/D/Dolby.Local.png) |




## Dolby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dolby
include('simpleicons-7/D/Dolby')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Dolby
include('simpleicons-7/D/Dolby')

' renders the element
Dolby('Dolby', 'Dolby', 'an optional tech label')
@enduml
```

