# SquareJs


```text
fontawesome-6/Brands/SquareJs
```

```text
include('fontawesome-6/Brands/SquareJs')
```



| Illustration | SquareJs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareJs.png) | ![illustration for SquareJs](../../fontawesome-6/Brands/SquareJs.Local.png) |




## SquareJs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareJs
include('fontawesome-6/Brands/SquareJs')

' renders the element
SquareJs('SquareJs', 'Square Js', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareJs
include('fontawesome-6/Brands/SquareJs')

' renders the element
SquareJs('SquareJs', 'Square Js', 'an optional tech label', 'an optional description')
@enduml
```

