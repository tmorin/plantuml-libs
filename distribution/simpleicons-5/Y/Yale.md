# Yale


```text
simpleicons-5/Y/Yale
```

```text
include('simpleicons-5/Y/Yale')
```



| Illustration | Yale |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/Y/Yale.png) | ![illustration for Yale](../../simpleicons-5/Y/Yale.Local.png) |




## Yale

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Yale
include('simpleicons-5/Y/Yale')

' renders the element
Yale('Yale', 'Yale', 'an optional tech label')
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

' loads the Item which embeds the element Yale
include('simpleicons-5/Y/Yale')

' renders the element
Yale('Yale', 'Yale', 'an optional tech label')
@enduml
```

