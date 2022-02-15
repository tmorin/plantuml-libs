# Java


```text
simpleicons-6/J/Java
```

```text
include('simpleicons-6/J/Java')
```



| Illustration | Java |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Java.png) | ![illustration for Java](../../simpleicons-6/J/Java.Local.png) |




## Java

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Java
include('simpleicons-6/J/Java')

' renders the element
Java('Java', 'Java', 'an optional tech label')
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

' loads the Item which embeds the element Java
include('simpleicons-6/J/Java')

' renders the element
Java('Java', 'Java', 'an optional tech label')
@enduml
```

