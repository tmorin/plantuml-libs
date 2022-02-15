# SquarePlus


```text
fontawesome-6/Solid/SquarePlus
```

```text
include('fontawesome-6/Solid/SquarePlus')
```



| Illustration | SquarePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquarePlus.png) | ![illustration for SquarePlus](../../fontawesome-6/Solid/SquarePlus.Local.png) |




## SquarePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquarePlus
include('fontawesome-6/Solid/SquarePlus')

' renders the element
SquarePlus('SquarePlus', 'Square Plus', 'an optional tech label')
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

' loads the Item which embeds the element SquarePlus
include('fontawesome-6/Solid/SquarePlus')

' renders the element
SquarePlus('SquarePlus', 'Square Plus', 'an optional tech label')
@enduml
```

