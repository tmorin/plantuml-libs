# Changedetection


```text
simpleicons/C/Changedetection
```

```text
include('simpleicons/C/Changedetection')
```



| Illustration | Changedetection |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Changedetection.png) | ![illustration for Changedetection](../../simpleicons/C/Changedetection.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChangedetectionXs>`
- `<$ChangedetectionSm>`
- `<$ChangedetectionMd>`
- `<$ChangedetectionLg>`





## Changedetection

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Changedetection
include('simpleicons/C/Changedetection')

' renders the element
Changedetection('Changedetection', 'Changedetection', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Changedetection
include('simpleicons/C/Changedetection')

' renders the element
Changedetection('Changedetection', 'Changedetection', 'an optional tech label', 'an optional description')
@enduml
```

