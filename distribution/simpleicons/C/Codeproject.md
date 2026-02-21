# Codeproject


```text
simpleicons/C/Codeproject
```

```text
include('simpleicons/C/Codeproject')
```



| Illustration | Codeproject |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codeproject.png) | ![illustration for Codeproject](../../simpleicons/C/Codeproject.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeprojectXs>`
- `<$CodeprojectSm>`
- `<$CodeprojectMd>`
- `<$CodeprojectLg>`





## Codeproject

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codeproject
include('simpleicons/C/Codeproject')

' renders the element
Codeproject('Codeproject', 'Codeproject', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codeproject
include('simpleicons/C/Codeproject')

' renders the element
Codeproject('Codeproject', 'Codeproject', 'an optional tech label', 'an optional description')
@enduml
```

