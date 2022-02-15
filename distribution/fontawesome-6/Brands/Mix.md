# Mix


```text
fontawesome-6/Brands/Mix
```

```text
include('fontawesome-6/Brands/Mix')
```



| Illustration | Mix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Mix.png) | ![illustration for Mix](../../fontawesome-6/Brands/Mix.Local.png) |




## Mix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Mix
include('fontawesome-6/Brands/Mix')

' renders the element
Mix('Mix', 'Mix', 'an optional tech label')
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

' loads the Item which embeds the element Mix
include('fontawesome-6/Brands/Mix')

' renders the element
Mix('Mix', 'Mix', 'an optional tech label')
@enduml
```

