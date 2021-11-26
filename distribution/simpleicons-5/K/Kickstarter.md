# Kickstarter


```text
simpleicons-5/K/Kickstarter
```

```text
include('simpleicons-5/K/Kickstarter')
```



| Illustration | Kickstarter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kickstarter.png) | ![illustration for Kickstarter](../../simpleicons-5/K/Kickstarter.Local.png) |




## Kickstarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kickstarter
include('simpleicons-5/K/Kickstarter')

' renders the element
Kickstarter('Kickstarter', 'Kickstarter', 'an optional tech label')
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

' loads the Item which embeds the element Kickstarter
include('simpleicons-5/K/Kickstarter')

' renders the element
Kickstarter('Kickstarter', 'Kickstarter', 'an optional tech label')
@enduml
```

