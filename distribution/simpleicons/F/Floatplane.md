# Floatplane


```text
simpleicons/F/Floatplane
```

```text
include('simpleicons/F/Floatplane')
```



| Illustration | Floatplane |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Floatplane.png) | ![illustration for Floatplane](../../simpleicons/F/Floatplane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FloatplaneXs>`
- `<$FloatplaneSm>`
- `<$FloatplaneMd>`
- `<$FloatplaneLg>`





## Floatplane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Floatplane
include('simpleicons/F/Floatplane')

' renders the element
Floatplane('Floatplane', 'Floatplane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Floatplane
include('simpleicons/F/Floatplane')

' renders the element
Floatplane('Floatplane', 'Floatplane', 'an optional tech label', 'an optional description')
@enduml
```

