# SquareMinus


```text
fontawesome-6/Solid/SquareMinus
```

```text
include('fontawesome-6/Solid/SquareMinus')
```



| Illustration | SquareMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareMinus.png) | ![illustration for SquareMinus](../../fontawesome-6/Solid/SquareMinus.Local.png) |




## SquareMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareMinus
include('fontawesome-6/Solid/SquareMinus')

' renders the element
SquareMinus('SquareMinus', 'Square Minus', 'an optional tech label')
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

' loads the Item which embeds the element SquareMinus
include('fontawesome-6/Solid/SquareMinus')

' renders the element
SquareMinus('SquareMinus', 'Square Minus', 'an optional tech label')
@enduml
```

