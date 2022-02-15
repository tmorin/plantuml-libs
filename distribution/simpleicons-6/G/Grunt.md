# Grunt


```text
simpleicons-6/G/Grunt
```

```text
include('simpleicons-6/G/Grunt')
```



| Illustration | Grunt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Grunt.png) | ![illustration for Grunt](../../simpleicons-6/G/Grunt.Local.png) |




## Grunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grunt
include('simpleicons-6/G/Grunt')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grunt
include('simpleicons-6/G/Grunt')

' renders the element
Grunt('Grunt', 'Grunt', 'an optional tech label')
@enduml
```

