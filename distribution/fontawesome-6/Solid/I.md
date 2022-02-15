# I


```text
fontawesome-6/Solid/I
```

```text
include('fontawesome-6/Solid/I')
```



| Illustration | I |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/I.png) | ![illustration for I](../../fontawesome-6/Solid/I.Local.png) |




## I

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element I
include('fontawesome-6/Solid/I')

' renders the element
I('I', 'I', 'an optional tech label')
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

' loads the Item which embeds the element I
include('fontawesome-6/Solid/I')

' renders the element
I('I', 'I', 'an optional tech label')
@enduml
```

