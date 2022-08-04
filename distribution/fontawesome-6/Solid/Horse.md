# Horse


```text
fontawesome-6/Solid/Horse
```

```text
include('fontawesome-6/Solid/Horse')
```



| Illustration | Horse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Horse.png) | ![illustration for Horse](../../fontawesome-6/Solid/Horse.Local.png) |




## Horse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Horse
include('fontawesome-6/Solid/Horse')

' renders the element
Horse('Horse', 'Horse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Horse
include('fontawesome-6/Solid/Horse')

' renders the element
Horse('Horse', 'Horse', 'an optional tech label', 'an optional description')
@enduml
```

