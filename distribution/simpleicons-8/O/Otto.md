# Otto


```text
simpleicons-8/O/Otto
```

```text
include('simpleicons-8/O/Otto')
```



| Illustration | Otto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Otto.png) | ![illustration for Otto](../../simpleicons-8/O/Otto.Local.png) |




## Otto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Otto
include('simpleicons-8/O/Otto')

' renders the element
Otto('Otto', 'Otto', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Otto
include('simpleicons-8/O/Otto')

' renders the element
Otto('Otto', 'Otto', 'an optional tech label', 'an optional description')
@enduml
```

