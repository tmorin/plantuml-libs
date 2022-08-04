# Computer


```text
material-4/Hardware/Computer
```

```text
include('material-4/Hardware/Computer')
```



| Illustration | Computer |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Computer.png) | ![illustration for Computer](../../material-4/Hardware/Computer.Local.png) |




## Computer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Computer
include('material-4/Hardware/Computer')

' renders the element
Computer('Computer', 'Computer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Computer
include('material-4/Hardware/Computer')

' renders the element
Computer('Computer', 'Computer', 'an optional tech label', 'an optional description')
@enduml
```

