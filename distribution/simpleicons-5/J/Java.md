# Java


```text
simpleicons-5/J/Java
```

```text
include('simpleicons-5/J/Java')
```



| Illustration | Java |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Java.png) | ![illustration for Java](../../simpleicons-5/J/Java.Local.png) |




## Java

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Java
include('simpleicons-5/J/Java')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Java
include('simpleicons-5/J/Java')

' renders the element
Java('Java', 'Java', 'an optional tech label')
@enduml
```

