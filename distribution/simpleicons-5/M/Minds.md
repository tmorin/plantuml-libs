# Minds


```text
simpleicons-5/M/Minds
```

```text
include('simpleicons-5/M/Minds')
```



| Illustration | Minds |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Minds.png) | ![illustration for Minds](../../simpleicons-5/M/Minds.Local.png) |




## Minds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Minds
include('simpleicons-5/M/Minds')

' renders the element
Minds('Minds', 'Minds', 'an optional tech label')
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

' loads the Item which embeds the element Minds
include('simpleicons-5/M/Minds')

' renders the element
Minds('Minds', 'Minds', 'an optional tech label')
@enduml
```

