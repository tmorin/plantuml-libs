# Duckduckgo


```text
simpleicons-8/D/Duckduckgo
```

```text
include('simpleicons-8/D/Duckduckgo')
```



| Illustration | Duckduckgo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Duckduckgo.png) | ![illustration for Duckduckgo](../../simpleicons-8/D/Duckduckgo.Local.png) |




## Duckduckgo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Duckduckgo
include('simpleicons-8/D/Duckduckgo')

' renders the element
Duckduckgo('Duckduckgo', 'Duckduckgo', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Duckduckgo
include('simpleicons-8/D/Duckduckgo')

' renders the element
Duckduckgo('Duckduckgo', 'Duckduckgo', 'an optional tech label', 'an optional description')
@enduml
```

