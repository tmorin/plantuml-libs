# Grunt


```text
fontawesome-5/Brands/Grunt
```

```text
include('fontawesome-5/Brands/Grunt')
```



| Illustration | Grunt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Grunt.png) | ![illustration for Grunt](../../fontawesome-5/Brands/Grunt.Local.png) |




## Grunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Grunt
include('fontawesome-5/Brands/Grunt')

' renders the element
Grunt('Grunt', 'Grunt', 'an optional tech label')
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

' loads the Item which embeds the element Grunt
include('fontawesome-5/Brands/Grunt')

' renders the element
Grunt('Grunt', 'Grunt', 'an optional tech label')
@enduml
```

