# Jar


```text
fontawesome/Solid/Jar
```

```text
include('fontawesome/Solid/Jar')
```



| Illustration | Jar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Jar.png) | ![illustration for Jar](../../fontawesome/Solid/Jar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JarXs>`
- `<$JarSm>`
- `<$JarMd>`
- `<$JarLg>`





## Jar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jar
include('fontawesome/Solid/Jar')

' renders the element
Jar('Jar', 'Jar', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Jar
include('fontawesome/Solid/Jar')

' renders the element
Jar('Jar', 'Jar', 'an optional tech label', 'an optional description')
@enduml
```

