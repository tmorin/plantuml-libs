# School


```text
material-4/Social/School
```

```text
include('material-4/Social/School')
```



| Illustration | School |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/School.png) | ![illustration for School](../../material-4/Social/School.Local.png) |




## School

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element School
include('material-4/Social/School')

' renders the element
School('School', 'School', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element School
include('material-4/Social/School')

' renders the element
School('School', 'School', 'an optional tech label', 'an optional description')
@enduml
```

