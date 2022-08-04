# SquareFontAwesome


```text
fontawesome-6/Brands/SquareFontAwesome
```

```text
include('fontawesome-6/Brands/SquareFontAwesome')
```



| Illustration | SquareFontAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareFontAwesome.png) | ![illustration for SquareFontAwesome](../../fontawesome-6/Brands/SquareFontAwesome.Local.png) |




## SquareFontAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareFontAwesome
include('fontawesome-6/Brands/SquareFontAwesome')

' renders the element
SquareFontAwesome('SquareFontAwesome', 'Square Font Awesome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareFontAwesome
include('fontawesome-6/Brands/SquareFontAwesome')

' renders the element
SquareFontAwesome('SquareFontAwesome', 'Square Font Awesome', 'an optional tech label', 'an optional description')
@enduml
```

