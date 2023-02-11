# SquareViadeo


```text
fontawesome-6/Brands/SquareViadeo
```

```text
include('fontawesome-6/Brands/SquareViadeo')
```



| Illustration | SquareViadeo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareViadeo.png) | ![illustration for SquareViadeo](../../fontawesome-6/Brands/SquareViadeo.Local.png) |




## SquareViadeo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareViadeo
include('fontawesome-6/Brands/SquareViadeo')

' renders the element
SquareViadeo('SquareViadeo', 'Square Viadeo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareViadeo
include('fontawesome-6/Brands/SquareViadeo')

' renders the element
SquareViadeo('SquareViadeo', 'Square Viadeo', 'an optional tech label', 'an optional description')
@enduml
```

