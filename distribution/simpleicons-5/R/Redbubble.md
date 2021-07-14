# Redbubble


```text
simpleicons-5/R/Redbubble
```

```text
include('simpleicons-5/R/Redbubble')
```



| Illustration | Redbubble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Redbubble.png) | ![illustration for Redbubble](../../simpleicons-5/R/Redbubble.Local.png) |




## Redbubble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Redbubble
include('simpleicons-5/R/Redbubble')

' renders the element
Redbubble('Redbubble', 'Redbubble', 'an optional tech label')
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

' loads the Item which embeds the element Redbubble
include('simpleicons-5/R/Redbubble')

' renders the element
Redbubble('Redbubble', 'Redbubble', 'an optional tech label')
@enduml
```

