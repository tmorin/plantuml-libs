# Concourse


```text
simpleicons-6/C/Concourse
```

```text
include('simpleicons-6/C/Concourse')
```



| Illustration | Concourse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Concourse.png) | ![illustration for Concourse](../../simpleicons-6/C/Concourse.Local.png) |




## Concourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Concourse
include('simpleicons-6/C/Concourse')

' renders the element
Concourse('Concourse', 'Concourse', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Concourse
include('simpleicons-6/C/Concourse')

' renders the element
Concourse('Concourse', 'Concourse', 'an optional tech label')
@enduml
```

