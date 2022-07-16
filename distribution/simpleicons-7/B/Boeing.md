# Boeing


```text
simpleicons-7/B/Boeing
```

```text
include('simpleicons-7/B/Boeing')
```



| Illustration | Boeing |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Boeing.png) | ![illustration for Boeing](../../simpleicons-7/B/Boeing.Local.png) |




## Boeing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Boeing
include('simpleicons-7/B/Boeing')

' renders the element
Boeing('Boeing', 'Boeing', 'an optional tech label')
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

' loads the Item which embeds the element Boeing
include('simpleicons-7/B/Boeing')

' renders the element
Boeing('Boeing', 'Boeing', 'an optional tech label')
@enduml
```

