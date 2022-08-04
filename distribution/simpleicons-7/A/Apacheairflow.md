# Apacheairflow


```text
simpleicons-7/A/Apacheairflow
```

```text
include('simpleicons-7/A/Apacheairflow')
```



| Illustration | Apacheairflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Apacheairflow.png) | ![illustration for Apacheairflow](../../simpleicons-7/A/Apacheairflow.Local.png) |




## Apacheairflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Apacheairflow
include('simpleicons-7/A/Apacheairflow')

' renders the element
Apacheairflow('Apacheairflow', 'Apacheairflow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apacheairflow
include('simpleicons-7/A/Apacheairflow')

' renders the element
Apacheairflow('Apacheairflow', 'Apacheairflow', 'an optional tech label', 'an optional description')
@enduml
```

