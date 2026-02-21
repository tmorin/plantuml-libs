# Grunt


```text
simpleicons/G/Grunt
```

```text
include('simpleicons/G/Grunt')
```



| Illustration | Grunt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Grunt.png) | ![illustration for Grunt](../../simpleicons/G/Grunt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GruntXs>`
- `<$GruntSm>`
- `<$GruntMd>`
- `<$GruntLg>`





## Grunt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Grunt
include('simpleicons/G/Grunt')

' renders the element
Grunt('Grunt', 'Grunt', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Grunt
include('simpleicons/G/Grunt')

' renders the element
Grunt('Grunt', 'Grunt', 'an optional tech label', 'an optional description')
@enduml
```

