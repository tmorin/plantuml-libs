# Virgin


```text
simpleicons-7/V/Virgin
```

```text
include('simpleicons-7/V/Virgin')
```



| Illustration | Virgin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Virgin.png) | ![illustration for Virgin](../../simpleicons-7/V/Virgin.Local.png) |




## Virgin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Virgin
include('simpleicons-7/V/Virgin')

' renders the element
Virgin('Virgin', 'Virgin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Virgin
include('simpleicons-7/V/Virgin')

' renders the element
Virgin('Virgin', 'Virgin', 'an optional tech label', 'an optional description')
@enduml
```

