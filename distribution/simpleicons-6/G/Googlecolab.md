# Googlecolab


```text
simpleicons-6/G/Googlecolab
```

```text
include('simpleicons-6/G/Googlecolab')
```



| Illustration | Googlecolab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlecolab.png) | ![illustration for Googlecolab](../../simpleicons-6/G/Googlecolab.Local.png) |




## Googlecolab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlecolab
include('simpleicons-6/G/Googlecolab')

' renders the element
Googlecolab('Googlecolab', 'Googlecolab', 'an optional tech label')
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

' loads the Item which embeds the element Googlecolab
include('simpleicons-6/G/Googlecolab')

' renders the element
Googlecolab('Googlecolab', 'Googlecolab', 'an optional tech label')
@enduml
```

