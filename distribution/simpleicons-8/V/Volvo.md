# Volvo


```text
simpleicons-8/V/Volvo
```

```text
include('simpleicons-8/V/Volvo')
```



| Illustration | Volvo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Volvo.png) | ![illustration for Volvo](../../simpleicons-8/V/Volvo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolvoXs>`
- `<$VolvoSm>`
- `<$VolvoMd>`
- `<$VolvoLg>`





## Volvo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Volvo
include('simpleicons-8/V/Volvo')

' renders the element
Volvo('Volvo', 'Volvo', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Volvo
include('simpleicons-8/V/Volvo')

' renders the element
Volvo('Volvo', 'Volvo', 'an optional tech label', 'an optional description')
@enduml
```

