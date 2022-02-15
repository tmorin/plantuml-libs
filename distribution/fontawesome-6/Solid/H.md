# H


```text
fontawesome-6/Solid/H
```

```text
include('fontawesome-6/Solid/H')
```



| Illustration | H |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/H.png) | ![illustration for H](../../fontawesome-6/Solid/H.Local.png) |




## H

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element H
include('fontawesome-6/Solid/H')

' renders the element
H('H', 'H', 'an optional tech label')
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

' loads the Item which embeds the element H
include('fontawesome-6/Solid/H')

' renders the element
H('H', 'H', 'an optional tech label')
@enduml
```

