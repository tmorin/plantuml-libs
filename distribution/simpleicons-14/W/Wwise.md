# Wwise


```text
simpleicons-14/W/Wwise
```

```text
include('simpleicons-14/W/Wwise')
```



| Illustration | Wwise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wwise.png) | ![illustration for Wwise](../../simpleicons-14/W/Wwise.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wwise
include('simpleicons-14/W/Wwise')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wwise
include('simpleicons-14/W/Wwise')

' renders the element
Wwise('Wwise', 'Wwise', 'an optional tech label', 'an optional description')
@enduml
```

