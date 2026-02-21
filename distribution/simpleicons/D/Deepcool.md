# Deepcool


```text
simpleicons/D/Deepcool
```

```text
include('simpleicons/D/Deepcool')
```



| Illustration | Deepcool |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Deepcool.png) | ![illustration for Deepcool](../../simpleicons/D/Deepcool.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeepcoolXs>`
- `<$DeepcoolSm>`
- `<$DeepcoolMd>`
- `<$DeepcoolLg>`





## Deepcool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Deepcool
include('simpleicons/D/Deepcool')

' renders the element
Deepcool('Deepcool', 'Deepcool', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deepcool
include('simpleicons/D/Deepcool')

' renders the element
Deepcool('Deepcool', 'Deepcool', 'an optional tech label', 'an optional description')
@enduml
```

