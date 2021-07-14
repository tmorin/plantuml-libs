# Concourse


```text
simpleicons-5/C/Concourse
```

```text
include('simpleicons-5/C/Concourse')
```



| Illustration | Concourse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Concourse.png) | ![illustration for Concourse](../../simpleicons-5/C/Concourse.Local.png) |




## Concourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Concourse
include('simpleicons-5/C/Concourse')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Concourse
include('simpleicons-5/C/Concourse')

' renders the element
Concourse('Concourse', 'Concourse', 'an optional tech label')
@enduml
```

