# Dashlane


```text
simpleicons-5/D/Dashlane
```

```text
include('simpleicons-5/D/Dashlane')
```



| Illustration | Dashlane |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dashlane.png) | ![illustration for Dashlane](../../simpleicons-5/D/Dashlane.Local.png) |




## Dashlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dashlane
include('simpleicons-5/D/Dashlane')

' renders the element
Dashlane('Dashlane', 'Dashlane', 'an optional tech label')
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

' loads the Item which embeds the element Dashlane
include('simpleicons-5/D/Dashlane')

' renders the element
Dashlane('Dashlane', 'Dashlane', 'an optional tech label')
@enduml
```

