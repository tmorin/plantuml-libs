# SquareVirus


```text
fontawesome-6/Solid/SquareVirus
```

```text
include('fontawesome-6/Solid/SquareVirus')
```



| Illustration | SquareVirus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareVirus.png) | ![illustration for SquareVirus](../../fontawesome-6/Solid/SquareVirus.Local.png) |




## SquareVirus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareVirus
include('fontawesome-6/Solid/SquareVirus')

' renders the element
SquareVirus('SquareVirus', 'Square Virus', 'an optional tech label')
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

' loads the Item which embeds the element SquareVirus
include('fontawesome-6/Solid/SquareVirus')

' renders the element
SquareVirus('SquareVirus', 'Square Virus', 'an optional tech label')
@enduml
```

