# Subject


```text
material-4/Action/Subject
```

```text
include('material-4/Action/Subject')
```



| Illustration | Subject |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Subject.png) | ![illustration for Subject](../../material-4/Action/Subject.Local.png) |




## Subject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Subject
include('material-4/Action/Subject')

' renders the element
Subject('Subject', 'Subject', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Subject
include('material-4/Action/Subject')

' renders the element
Subject('Subject', 'Subject', 'an optional tech label')
@enduml
```

