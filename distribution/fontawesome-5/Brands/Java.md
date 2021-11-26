# Java


```text
fontawesome-5/Brands/Java
```

```text
include('fontawesome-5/Brands/Java')
```



| Illustration | Java |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Java.png) | ![illustration for Java](../../fontawesome-5/Brands/Java.Local.png) |




## Java

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Java
include('fontawesome-5/Brands/Java')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Java
include('fontawesome-5/Brands/Java')

' renders the element
Java('Java', 'Java', 'an optional tech label')
@enduml
```

