# Javascript


```text
simpleicons-5/J/Javascript
```

```text
include('simpleicons-5/J/Javascript')
```



| Illustration | Javascript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Javascript.png) | ![illustration for Javascript](../../simpleicons-5/J/Javascript.Local.png) |




## Javascript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Javascript
include('simpleicons-5/J/Javascript')

' renders the element
Javascript('Javascript', 'Javascript', 'an optional tech label')
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

' loads the Item which embeds the element Javascript
include('simpleicons-5/J/Javascript')

' renders the element
Javascript('Javascript', 'Javascript', 'an optional tech label')
@enduml
```

