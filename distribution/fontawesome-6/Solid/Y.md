# Y


```text
fontawesome-6/Solid/Y
```

```text
include('fontawesome-6/Solid/Y')
```



| Illustration | Y |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Y.png) | ![illustration for Y](../../fontawesome-6/Solid/Y.Local.png) |




## Y

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Y
include('fontawesome-6/Solid/Y')

' renders the element
Y('Y', 'Y', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Y
include('fontawesome-6/Solid/Y')

' renders the element
Y('Y', 'Y', 'an optional tech label')
@enduml
```

