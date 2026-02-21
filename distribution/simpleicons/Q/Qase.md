# Qase


```text
simpleicons/Q/Qase
```

```text
include('simpleicons/Q/Qase')
```



| Illustration | Qase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qase.png) | ![illustration for Qase](../../simpleicons/Q/Qase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QaseXs>`
- `<$QaseSm>`
- `<$QaseMd>`
- `<$QaseLg>`





## Qase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qase
include('simpleicons/Q/Qase')

' renders the element
Qase('Qase', 'Qase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qase
include('simpleicons/Q/Qase')

' renders the element
Qase('Qase', 'Qase', 'an optional tech label', 'an optional description')
@enduml
```

