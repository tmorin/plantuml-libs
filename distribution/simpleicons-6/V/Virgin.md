# Virgin


```text
simpleicons-6/V/Virgin
```

```text
include('simpleicons-6/V/Virgin')
```



| Illustration | Virgin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Virgin.png) | ![illustration for Virgin](../../simpleicons-6/V/Virgin.Local.png) |




## Virgin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Virgin
include('simpleicons-6/V/Virgin')

' renders the element
Virgin('Virgin', 'Virgin', 'an optional tech label')
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

' loads the Item which embeds the element Virgin
include('simpleicons-6/V/Virgin')

' renders the element
Virgin('Virgin', 'Virgin', 'an optional tech label')
@enduml
```

