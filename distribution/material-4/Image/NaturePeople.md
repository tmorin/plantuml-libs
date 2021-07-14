# NaturePeople


```text
material-4/Image/NaturePeople
```

```text
include('material-4/Image/NaturePeople')
```



| Illustration | NaturePeople |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/NaturePeople.png) | ![illustration for NaturePeople](../../material-4/Image/NaturePeople.Local.png) |




## NaturePeople

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NaturePeople
include('material-4/Image/NaturePeople')

' renders the element
NaturePeople('NaturePeople', 'Nature People', 'an optional tech label')
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

' loads the Item which embeds the element NaturePeople
include('material-4/Image/NaturePeople')

' renders the element
NaturePeople('NaturePeople', 'Nature People', 'an optional tech label')
@enduml
```

