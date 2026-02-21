# Trueup


```text
simpleicons/T/Trueup
```

```text
include('simpleicons/T/Trueup')
```



| Illustration | Trueup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trueup.png) | ![illustration for Trueup](../../simpleicons/T/Trueup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrueupXs>`
- `<$TrueupSm>`
- `<$TrueupMd>`
- `<$TrueupLg>`





## Trueup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trueup
include('simpleicons/T/Trueup')

' renders the element
Trueup('Trueup', 'Trueup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trueup
include('simpleicons/T/Trueup')

' renders the element
Trueup('Trueup', 'Trueup', 'an optional tech label', 'an optional description')
@enduml
```

