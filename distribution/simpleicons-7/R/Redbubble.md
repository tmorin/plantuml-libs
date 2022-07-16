# Redbubble


```text
simpleicons-7/R/Redbubble
```

```text
include('simpleicons-7/R/Redbubble')
```



| Illustration | Redbubble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Redbubble.png) | ![illustration for Redbubble](../../simpleicons-7/R/Redbubble.Local.png) |




## Redbubble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Redbubble
include('simpleicons-7/R/Redbubble')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Redbubble
include('simpleicons-7/R/Redbubble')

' renders the element
Redbubble('Redbubble', 'Redbubble', 'an optional tech label')
@enduml
```

