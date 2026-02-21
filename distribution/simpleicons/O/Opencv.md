# Opencv


```text
simpleicons/O/Opencv
```

```text
include('simpleicons/O/Opencv')
```



| Illustration | Opencv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Opencv.png) | ![illustration for Opencv](../../simpleicons/O/Opencv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpencvXs>`
- `<$OpencvSm>`
- `<$OpencvMd>`
- `<$OpencvLg>`





## Opencv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Opencv
include('simpleicons/O/Opencv')

' renders the element
Opencv('Opencv', 'Opencv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opencv
include('simpleicons/O/Opencv')

' renders the element
Opencv('Opencv', 'Opencv', 'an optional tech label', 'an optional description')
@enduml
```

