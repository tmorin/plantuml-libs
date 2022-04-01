# Jar


```text
fontawesome-6/Solid/Jar
```

```text
include('fontawesome-6/Solid/Jar')
```



| Illustration | Jar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Jar.png) | ![illustration for Jar](../../fontawesome-6/Solid/Jar.Local.png) |




## Jar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Jar
include('fontawesome-6/Solid/Jar')

' renders the element
Jar('Jar', 'Jar', 'an optional tech label')
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

' loads the Item which embeds the element Jar
include('fontawesome-6/Solid/Jar')

' renders the element
Jar('Jar', 'Jar', 'an optional tech label')
@enduml
```

