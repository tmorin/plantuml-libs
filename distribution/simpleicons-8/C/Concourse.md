# Concourse


```text
simpleicons-8/C/Concourse
```

```text
include('simpleicons-8/C/Concourse')
```



| Illustration | Concourse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Concourse.png) | ![illustration for Concourse](../../simpleicons-8/C/Concourse.Local.png) |




## Concourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Concourse
include('simpleicons-8/C/Concourse')

' renders the element
Concourse('Concourse', 'Concourse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Concourse
include('simpleicons-8/C/Concourse')

' renders the element
Concourse('Concourse', 'Concourse', 'an optional tech label', 'an optional description')
@enduml
```

