# PlusCircle


```text
fontawesome-5/Solid/PlusCircle
```

```text
include('fontawesome-5/Solid/PlusCircle')
```



| Illustration | PlusCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PlusCircle.png) | ![illustration for PlusCircle](../../fontawesome-5/Solid/PlusCircle.Local.png) |




## PlusCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlusCircle
include('fontawesome-5/Solid/PlusCircle')

' renders the element
PlusCircle('PlusCircle', 'Plus Circle', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlusCircle
include('fontawesome-5/Solid/PlusCircle')

' renders the element
PlusCircle('PlusCircle', 'Plus Circle', 'an optional tech label')
@enduml
```

