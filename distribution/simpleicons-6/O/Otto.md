# Otto


```text
simpleicons-6/O/Otto
```

```text
include('simpleicons-6/O/Otto')
```



| Illustration | Otto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Otto.png) | ![illustration for Otto](../../simpleicons-6/O/Otto.Local.png) |




## Otto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Otto
include('simpleicons-6/O/Otto')

' renders the element
Otto('Otto', 'Otto', 'an optional tech label')
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

' loads the Item which embeds the element Otto
include('simpleicons-6/O/Otto')

' renders the element
Otto('Otto', 'Otto', 'an optional tech label')
@enduml
```

