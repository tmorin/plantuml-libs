# Academia


```text
simpleicons-7/A/Academia
```

```text
include('simpleicons-7/A/Academia')
```



| Illustration | Academia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Academia.png) | ![illustration for Academia](../../simpleicons-7/A/Academia.Local.png) |




## Academia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Academia
include('simpleicons-7/A/Academia')

' renders the element
Academia('Academia', 'Academia', 'an optional tech label')
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

' loads the Item which embeds the element Academia
include('simpleicons-7/A/Academia')

' renders the element
Academia('Academia', 'Academia', 'an optional tech label')
@enduml
```

