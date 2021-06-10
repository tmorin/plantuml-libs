# Horse


```text
fontawesome-5/Solid/Horse
```

```text
include('fontawesome-5/Solid/Horse')
```



| Illustration | Horse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Horse.png) | ![illustration for Horse](../../fontawesome-5/Solid/Horse.Local.png) |




## Horse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Horse
include('fontawesome-5/Solid/Horse')

' renders the element
Horse('Horse', 'Horse', 'an optional tech label')
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

' loads the Item which embeds the element Horse
include('fontawesome-5/Solid/Horse')

' renders the element
Horse('Horse', 'Horse', 'an optional tech label')
@enduml
```

