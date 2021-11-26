# Man


```text
simpleicons-5/M/Man
```

```text
include('simpleicons-5/M/Man')
```



| Illustration | Man |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Man.png) | ![illustration for Man](../../simpleicons-5/M/Man.Local.png) |




## Man

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Man
include('simpleicons-5/M/Man')

' renders the element
Man('Man', 'Man', 'an optional tech label')
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

' loads the Item which embeds the element Man
include('simpleicons-5/M/Man')

' renders the element
Man('Man', 'Man', 'an optional tech label')
@enduml
```

