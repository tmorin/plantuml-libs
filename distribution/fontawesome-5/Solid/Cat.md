# Cat


```text
fontawesome-5/Solid/Cat
```

```text
include('fontawesome-5/Solid/Cat')
```



| Illustration | Cat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cat.png) | ![illustration for Cat](../../fontawesome-5/Solid/Cat.Local.png) |




## Cat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cat
include('fontawesome-5/Solid/Cat')

' renders the element
Cat('Cat', 'Cat', 'an optional tech label')
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

' loads the Item which embeds the element Cat
include('fontawesome-5/Solid/Cat')

' renders the element
Cat('Cat', 'Cat', 'an optional tech label')
@enduml
```

