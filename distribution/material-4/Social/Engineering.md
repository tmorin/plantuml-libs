# Engineering


```text
material-4/Social/Engineering
```

```text
include('material-4/Social/Engineering')
```



| Illustration | Engineering |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Engineering.png) | ![illustration for Engineering](../../material-4/Social/Engineering.Local.png) |




## Engineering

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Engineering
include('material-4/Social/Engineering')

' renders the element
Engineering('Engineering', 'Engineering', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Engineering
include('material-4/Social/Engineering')

' renders the element
Engineering('Engineering', 'Engineering', 'an optional tech label', 'an optional description')
@enduml
```

