# Blog


```text
fontawesome-5/Solid/Blog
```

```text
include('fontawesome-5/Solid/Blog')
```



| Illustration | Blog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Blog.png) | ![illustration for Blog](../../fontawesome-5/Solid/Blog.Local.png) |




## Blog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Blog
include('fontawesome-5/Solid/Blog')

' renders the element
Blog('Blog', 'Blog', 'an optional tech label')
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

' loads the Item which embeds the element Blog
include('fontawesome-5/Solid/Blog')

' renders the element
Blog('Blog', 'Blog', 'an optional tech label')
@enduml
```

