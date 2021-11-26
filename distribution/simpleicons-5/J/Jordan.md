# Jordan


```text
simpleicons-5/J/Jordan
```

```text
include('simpleicons-5/J/Jordan')
```



| Illustration | Jordan |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jordan.png) | ![illustration for Jordan](../../simpleicons-5/J/Jordan.Local.png) |




## Jordan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jordan
include('simpleicons-5/J/Jordan')

' renders the element
Jordan('Jordan', 'Jordan', 'an optional tech label')
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

' loads the Item which embeds the element Jordan
include('simpleicons-5/J/Jordan')

' renders the element
Jordan('Jordan', 'Jordan', 'an optional tech label')
@enduml
```

