# Julia


```text
simpleicons-5/J/Julia
```

```text
include('simpleicons-5/J/Julia')
```



| Illustration | Julia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Julia.png) | ![illustration for Julia](../../simpleicons-5/J/Julia.Local.png) |




## Julia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Julia
include('simpleicons-5/J/Julia')

' renders the element
Julia('Julia', 'Julia', 'an optional tech label')
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

' loads the Item which embeds the element Julia
include('simpleicons-5/J/Julia')

' renders the element
Julia('Julia', 'Julia', 'an optional tech label')
@enduml
```

