# Micro Dot Blog

```text
simpleicons-4.1/M/MicroDotBlog
```

```text
include('simpleicons-4.1/M/MicroDotBlog')
```

|icon|element|
|---|---|
|![](MicroDotBlog.png)|![](MicroDotBlog.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the MicroDotBlog element
include('simpleicons-4.1/M/MicroDotBlog')
MicroDotBlog('micro_dot_blog', 'Micro Dot Blog', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the MicroDotBlog element
include('simpleicons-4.1/M/MicroDotBlog')
MicroDotBlog('micro_dot_blog', 'Micro Dot Blog', 'an optional tech field')
@enduml
```

