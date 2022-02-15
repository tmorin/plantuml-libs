# Rarible


```text
simpleicons-6/R/Rarible
```

```text
include('simpleicons-6/R/Rarible')
```



| Illustration | Rarible |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rarible.png) | ![illustration for Rarible](../../simpleicons-6/R/Rarible.Local.png) |




## Rarible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rarible
include('simpleicons-6/R/Rarible')

' renders the element
Rarible('Rarible', 'Rarible', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rarible
include('simpleicons-6/R/Rarible')

' renders the element
Rarible('Rarible', 'Rarible', 'an optional tech label')
@enduml
```

