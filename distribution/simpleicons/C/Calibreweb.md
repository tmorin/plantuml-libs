# Calibreweb


```text
simpleicons/C/Calibreweb
```

```text
include('simpleicons/C/Calibreweb')
```



| Illustration | Calibreweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Calibreweb.png) | ![illustration for Calibreweb](../../simpleicons/C/Calibreweb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalibrewebXs>`
- `<$CalibrewebSm>`
- `<$CalibrewebMd>`
- `<$CalibrewebLg>`





## Calibreweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Calibreweb
include('simpleicons/C/Calibreweb')

' renders the element
Calibreweb('Calibreweb', 'Calibreweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Calibreweb
include('simpleicons/C/Calibreweb')

' renders the element
Calibreweb('Calibreweb', 'Calibreweb', 'an optional tech label', 'an optional description')
@enduml
```

