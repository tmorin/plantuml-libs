# Group


```text
material-4/Social/Group
```

```text
include('material-4/Social/Group')
```



| Illustration | Group |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Group.png) | ![illustration for Group](../../material-4/Social/Group.Local.png) |




## Group

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Group
include('material-4/Social/Group')

' renders the element
Group('Group', 'Group', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Group
include('material-4/Social/Group')

' renders the element
Group('Group', 'Group', 'an optional tech label', 'an optional description')
@enduml
```

