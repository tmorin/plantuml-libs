# Spine


```text
simpleicons/S/Spine
```

```text
include('simpleicons/S/Spine')
```



| Illustration | Spine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spine.png) | ![illustration for Spine](../../simpleicons/S/Spine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpineXs>`
- `<$SpineSm>`
- `<$SpineMd>`
- `<$SpineLg>`





## Spine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spine
include('simpleicons/S/Spine')

' renders the element
Spine('Spine', 'Spine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spine
include('simpleicons/S/Spine')

' renders the element
Spine('Spine', 'Spine', 'an optional tech label', 'an optional description')
@enduml
```

