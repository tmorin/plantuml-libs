# Js


```text
fontawesome-5/Brands/Js
```

```text
include('fontawesome-5/Brands/Js')
```



| Illustration | Js |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Js.png) | ![illustration for Js](../../fontawesome-5/Brands/Js.Local.png) |




## Js

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Js
include('fontawesome-5/Brands/Js')

' renders the element
Js('Js', 'Js', 'an optional tech label')
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

' loads the Item which embeds the element Js
include('fontawesome-5/Brands/Js')

' renders the element
Js('Js', 'Js', 'an optional tech label')
@enduml
```

