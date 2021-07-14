# PersonAddAlt1


```text
material-4/Social/PersonAddAlt1
```

```text
include('material-4/Social/PersonAddAlt1')
```



| Illustration | PersonAddAlt1 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PersonAddAlt1.png) | ![illustration for PersonAddAlt1](../../material-4/Social/PersonAddAlt1.Local.png) |




## PersonAddAlt1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PersonAddAlt1
include('material-4/Social/PersonAddAlt1')

' renders the element
PersonAddAlt1('PersonAddAlt1', 'Person Add Alt1', 'an optional tech label')
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

' loads the Item which embeds the element PersonAddAlt1
include('material-4/Social/PersonAddAlt1')

' renders the element
PersonAddAlt1('PersonAddAlt1', 'Person Add Alt1', 'an optional tech label')
@enduml
```

