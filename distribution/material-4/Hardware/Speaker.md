# Speaker


```text
material-4/Hardware/Speaker
```

```text
include('material-4/Hardware/Speaker')
```



| Illustration | Speaker |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Speaker.png) | ![illustration for Speaker](../../material-4/Hardware/Speaker.Local.png) |




## Speaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Speaker
include('material-4/Hardware/Speaker')

' renders the element
Speaker('Speaker', 'Speaker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Speaker
include('material-4/Hardware/Speaker')

' renders the element
Speaker('Speaker', 'Speaker', 'an optional tech label', 'an optional description')
@enduml
```

