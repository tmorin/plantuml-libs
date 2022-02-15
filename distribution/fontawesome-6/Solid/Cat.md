# Cat


```text
fontawesome-6/Solid/Cat
```

```text
include('fontawesome-6/Solid/Cat')
```



| Illustration | Cat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Cat.png) | ![illustration for Cat](../../fontawesome-6/Solid/Cat.Local.png) |




## Cat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cat
include('fontawesome-6/Solid/Cat')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Cat
include('fontawesome-6/Solid/Cat')

' renders the element
Cat('Cat', 'Cat', 'an optional tech label')
@enduml
```

