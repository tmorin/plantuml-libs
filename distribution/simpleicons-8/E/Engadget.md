# Engadget


```text
simpleicons-8/E/Engadget
```

```text
include('simpleicons-8/E/Engadget')
```



| Illustration | Engadget |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Engadget.png) | ![illustration for Engadget](../../simpleicons-8/E/Engadget.Local.png) |




## Engadget

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Engadget
include('simpleicons-8/E/Engadget')

' renders the element
Engadget('Engadget', 'Engadget', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Engadget
include('simpleicons-8/E/Engadget')

' renders the element
Engadget('Engadget', 'Engadget', 'an optional tech label', 'an optional description')
@enduml
```

