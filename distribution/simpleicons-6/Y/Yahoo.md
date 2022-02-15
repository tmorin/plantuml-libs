# Yahoo


```text
simpleicons-6/Y/Yahoo
```

```text
include('simpleicons-6/Y/Yahoo')
```



| Illustration | Yahoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/Y/Yahoo.png) | ![illustration for Yahoo](../../simpleicons-6/Y/Yahoo.Local.png) |




## Yahoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Yahoo
include('simpleicons-6/Y/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label')
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

' loads the Item which embeds the element Yahoo
include('simpleicons-6/Y/Yahoo')

' renders the element
Yahoo('Yahoo', 'Yahoo', 'an optional tech label')
@enduml
```

