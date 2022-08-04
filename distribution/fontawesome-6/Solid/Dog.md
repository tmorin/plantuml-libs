# Dog


```text
fontawesome-6/Solid/Dog
```

```text
include('fontawesome-6/Solid/Dog')
```



| Illustration | Dog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Dog.png) | ![illustration for Dog](../../fontawesome-6/Solid/Dog.Local.png) |




## Dog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dog
include('fontawesome-6/Solid/Dog')

' renders the element
Dog('Dog', 'Dog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dog
include('fontawesome-6/Solid/Dog')

' renders the element
Dog('Dog', 'Dog', 'an optional tech label', 'an optional description')
@enduml
```

