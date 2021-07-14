# Cucumber


```text
simpleicons-5/C/Cucumber
```

```text
include('simpleicons-5/C/Cucumber')
```



| Illustration | Cucumber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cucumber.png) | ![illustration for Cucumber](../../simpleicons-5/C/Cucumber.Local.png) |




## Cucumber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cucumber
include('simpleicons-5/C/Cucumber')

' renders the element
Cucumber('Cucumber', 'Cucumber', 'an optional tech label')
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

' loads the Item which embeds the element Cucumber
include('simpleicons-5/C/Cucumber')

' renders the element
Cucumber('Cucumber', 'Cucumber', 'an optional tech label')
@enduml
```

