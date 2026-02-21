# School


```text
material/Social/School
```

```text
include('material/Social/School')
```



| Illustration | School |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/School.png) | ![illustration for School](../../material/Social/School.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SchoolXs>`
- `<$SchoolSm>`
- `<$SchoolMd>`
- `<$SchoolLg>`





## School

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element School
include('material/Social/School')

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
include('material/bootstrap')

' loads the Item which embeds the element School
include('material/Social/School')

' renders the element
School('School', 'School', 'an optional tech label', 'an optional description')
@enduml
```

