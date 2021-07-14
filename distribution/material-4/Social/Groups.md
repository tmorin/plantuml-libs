# Groups


```text
material-4/Social/Groups
```

```text
include('material-4/Social/Groups')
```



| Illustration | Groups |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Groups.png) | ![illustration for Groups](../../material-4/Social/Groups.Local.png) |




## Groups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Groups
include('material-4/Social/Groups')

' renders the element
Groups('Groups', 'Groups', 'an optional tech label')
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

' loads the Item which embeds the element Groups
include('material-4/Social/Groups')

' renders the element
Groups('Groups', 'Groups', 'an optional tech label')
@enduml
```

