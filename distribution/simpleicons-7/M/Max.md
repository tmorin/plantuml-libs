# Max


```text
simpleicons-7/M/Max
```

```text
include('simpleicons-7/M/Max')
```



| Illustration | Max |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Max.png) | ![illustration for Max](../../simpleicons-7/M/Max.Local.png) |




## Max

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Max
include('simpleicons-7/M/Max')

' renders the element
Max('Max', 'Max', 'an optional tech label')
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

' loads the Item which embeds the element Max
include('simpleicons-7/M/Max')

' renders the element
Max('Max', 'Max', 'an optional tech label')
@enduml
```

