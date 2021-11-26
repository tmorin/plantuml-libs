# Duckduckgo


```text
simpleicons-5/D/Duckduckgo
```

```text
include('simpleicons-5/D/Duckduckgo')
```



| Illustration | Duckduckgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Duckduckgo.png) | ![illustration for Duckduckgo](../../simpleicons-5/D/Duckduckgo.Local.png) |




## Duckduckgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Duckduckgo
include('simpleicons-5/D/Duckduckgo')

' renders the element
Duckduckgo('Duckduckgo', 'Duckduckgo', 'an optional tech label')
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

' loads the Item which embeds the element Duckduckgo
include('simpleicons-5/D/Duckduckgo')

' renders the element
Duckduckgo('Duckduckgo', 'Duckduckgo', 'an optional tech label')
@enduml
```

