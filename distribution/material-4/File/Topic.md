# Topic


```text
material-4/File/Topic
```

```text
include('material-4/File/Topic')
```



| Illustration | Topic |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/Topic.png) | ![illustration for Topic](../../material-4/File/Topic.Local.png) |




## Topic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Topic
include('material-4/File/Topic')

' renders the element
Topic('Topic', 'Topic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Topic
include('material-4/File/Topic')

' renders the element
Topic('Topic', 'Topic', 'an optional tech label', 'an optional description')
@enduml
```

