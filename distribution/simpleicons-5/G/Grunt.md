# Grunt


```text
simpleicons-5/G/Grunt
```

```text
include('simpleicons-5/G/Grunt')
```



| Illustration | Grunt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Grunt.png) | ![illustration for Grunt](../../simpleicons-5/G/Grunt.Local.png) |




## Grunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Grunt
include('simpleicons-5/G/Grunt')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Grunt
include('simpleicons-5/G/Grunt')

' renders the element
Grunt('Grunt', 'Grunt', 'an optional tech label')
@enduml
```

