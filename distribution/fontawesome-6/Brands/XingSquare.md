# XingSquare


```text
fontawesome-6/Brands/XingSquare
```

```text
include('fontawesome-6/Brands/XingSquare')
```



| Illustration | XingSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/XingSquare.png) | ![illustration for XingSquare](../../fontawesome-6/Brands/XingSquare.Local.png) |




## XingSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element XingSquare
include('fontawesome-6/Brands/XingSquare')

' renders the element
XingSquare('XingSquare', 'Xing Square', 'an optional tech label')
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

' loads the Item which embeds the element XingSquare
include('fontawesome-6/Brands/XingSquare')

' renders the element
XingSquare('XingSquare', 'Xing Square', 'an optional tech label')
@enduml
```

