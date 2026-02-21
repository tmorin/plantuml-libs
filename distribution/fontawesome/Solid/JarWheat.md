# JarWheat


```text
fontawesome/Solid/JarWheat
```

```text
include('fontawesome/Solid/JarWheat')
```



| Illustration | JarWheat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/JarWheat.png) | ![illustration for JarWheat](../../fontawesome/Solid/JarWheat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JarWheatXs>`
- `<$JarWheatSm>`
- `<$JarWheatMd>`
- `<$JarWheatLg>`





## JarWheat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element JarWheat
include('fontawesome/Solid/JarWheat')

' renders the element
JarWheat('JarWheat', 'Jar Wheat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element JarWheat
include('fontawesome/Solid/JarWheat')

' renders the element
JarWheat('JarWheat', 'Jar Wheat', 'an optional tech label', 'an optional description')
@enduml
```

