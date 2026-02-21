# Wwise


```text
simpleicons/W/Wwise
```

```text
include('simpleicons/W/Wwise')
```



| Illustration | Wwise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wwise.png) | ![illustration for Wwise](../../simpleicons/W/Wwise.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WwiseXs>`
- `<$WwiseSm>`
- `<$WwiseMd>`
- `<$WwiseLg>`





## Wwise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wwise
include('simpleicons/W/Wwise')

' renders the element
Wwise('Wwise', 'Wwise', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wwise
include('simpleicons/W/Wwise')

' renders the element
Wwise('Wwise', 'Wwise', 'an optional tech label', 'an optional description')
@enduml
```

