# Julia


```text
simpleicons-8/J/Julia
```

```text
include('simpleicons-8/J/Julia')
```



| Illustration | Julia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/J/Julia.png) | ![illustration for Julia](../../simpleicons-8/J/Julia.Local.png) |




## Julia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Julia
include('simpleicons-8/J/Julia')

' renders the element
Julia('Julia', 'Julia', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Julia
include('simpleicons-8/J/Julia')

' renders the element
Julia('Julia', 'Julia', 'an optional tech label', 'an optional description')
@enduml
```

