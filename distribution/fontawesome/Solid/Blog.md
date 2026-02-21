# Blog


```text
fontawesome/Solid/Blog
```

```text
include('fontawesome/Solid/Blog')
```



| Illustration | Blog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Blog.png) | ![illustration for Blog](../../fontawesome/Solid/Blog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BlogXs>`
- `<$BlogSm>`
- `<$BlogMd>`
- `<$BlogLg>`





## Blog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Blog
include('fontawesome/Solid/Blog')

' renders the element
Blog('Blog', 'Blog', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Blog
include('fontawesome/Solid/Blog')

' renders the element
Blog('Blog', 'Blog', 'an optional tech label', 'an optional description')
@enduml
```

