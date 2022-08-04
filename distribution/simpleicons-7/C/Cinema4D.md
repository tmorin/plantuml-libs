# Cinema4D


```text
simpleicons-7/C/Cinema4D
```

```text
include('simpleicons-7/C/Cinema4D')
```



| Illustration | Cinema4D |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cinema4D.png) | ![illustration for Cinema4D](../../simpleicons-7/C/Cinema4D.Local.png) |




## Cinema4D

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cinema4D
include('simpleicons-7/C/Cinema4D')

' renders the element
Cinema4D('Cinema4D', 'Cinema4 D', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cinema4D
include('simpleicons-7/C/Cinema4D')

' renders the element
Cinema4D('Cinema4D', 'Cinema4 D', 'an optional tech label', 'an optional description')
@enduml
```

