# StackOverflow


```text
fontawesome-5/Brands/StackOverflow
```

```text
include('fontawesome-5/Brands/StackOverflow')
```



| Illustration | StackOverflow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/StackOverflow.png) | ![illustration for StackOverflow](../../fontawesome-5/Brands/StackOverflow.Local.png) |




## StackOverflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StackOverflow
include('fontawesome-5/Brands/StackOverflow')

' renders the element
StackOverflow('StackOverflow', 'Stack Overflow', 'an optional tech label')
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

' loads the Item which embeds the element StackOverflow
include('fontawesome-5/Brands/StackOverflow')

' renders the element
StackOverflow('StackOverflow', 'Stack Overflow', 'an optional tech label')
@enduml
```

